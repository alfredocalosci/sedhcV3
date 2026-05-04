<template>
  <div ref="container" class="h-72 w-full">
    <svg
      :viewBox="viewBox"
      :width="canvasSize.width"
      :height="canvasSize.height"
      class="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >

      <!-- bg -->
      <rect width="100%" height="100%" fill="#fff" /> 

      <text
        v-for="label in resolvedLabels"
        :key="label.lugar"
        :x="label.x"
        :y="label.y"
        :fill="label.color"
        :font-size="label.fontSize"
        text-anchor="middle"
        dominant-baseline="middle"
        class="cursor-default select-none font-semibold"
      >{{ label.lugar }}</text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
  import { useTemplateRef } from 'vue'
  import { useElementSize } from '@vueuse/core'

  interface Lugar {
    lugar: string
    lat?: number
    lng?: number
    year?: number
  }

  const props = withDefaults(defineProps<{
    lugares: Lugar[]
  }>(), {
    lugares: () => []
  })

  const container = useTemplateRef('container')
  const { width, height } = useElementSize(container)

  const canvasSize = computed(() => ({ width: width.value, height: height.value }))
  const viewBox = computed(() => `0 0 ${canvasSize.value.width} ${canvasSize.value.height}`)

  const padding = 80;

  // Compute bounds from actual data
  const bounds = computed(() => {
    const validLugares = props.lugares.filter(l => l.lat != null && l.lng != null)
    if (!validLugares.length) return null
    const lngs = validLugares.map(l => l.lng as number)
    const lats = validLugares.map(l => l.lat as number)
    return {
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
    }
  })

  // Map lat/lng to svg coordinates using data min/max
  const project = (lng: number, lat: number): [number, number] => {
    const b = bounds.value
    if (!b) return [0, 0]
    const x = padding + ((lng - b.minLng) / (b.maxLng - b.minLng)) * (width.value - padding * 2)
    const y = padding + ((b.maxLat - lat) / (b.maxLat - b.minLat)) * (height.value - padding * 2)
    return [x, y]
  }

  // Rough text size estimates (px at font-size 10)
  const charWidth = 12
  const lineHeight = 24

  interface LabelPos {
    lugar: string
    x: number
    y: number
    color: string
    fontSize: number
  }

  const yearColor = (year: number | undefined, minYear: number, maxYear: number): string => {
    if (!year) return '#999'
    const t = maxYear === minYear ? 1 : (year - minYear) / (maxYear - minYear)
    // t=0 (oldest) → light gray #bbb, t=1 (newest) → dark #222
    const v = Math.round(187 - t * 165)
    return `rgb(${v},${v},${v})`
  }

  const resolveOverlaps = (labels: LabelPos[], iterations = 80): LabelPos[] => {
    const result = labels.map(l => ({ ...l }))

    const clamp = (label: LabelPos) => {
      const scaledCharWidth = charWidth * (label.fontSize / 10)
      const hw = (label.lugar.length * scaledCharWidth) / 2
      const hh = lineHeight / 2
      label.x = Math.max(hw, Math.min(width.value - hw, label.x))
      label.y = Math.max(hh, Math.min(height.value - hh, label.y))
    }

    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
          const a = result[i]!
          const b = result[j]!
          const aw = (a.lugar.length * charWidth) / 2
          const bw = (b.lugar.length * charWidth) / 2
          const dx = b.x - a.x
          const dy = b.y - a.y
          const overlapX = aw + bw - Math.abs(dx)
          const overlapY = lineHeight - Math.abs(dy)
          if (overlapX > 0 && overlapY > 0) {
            const push = 1.2
            const signX = dx === 0 ? 1 : Math.sign(dx)
            const signY = dy === 0 ? 1 : Math.sign(dy)
            a.x -= signX * push
            b.x += signX * push
            a.y -= signY * push
            b.y += signY * push
          }
        }
      }
      result.forEach(clamp)
    }
    return result
  }

  const resolvedLabels = computed((): LabelPos[] => {
    if (!width.value || !height.value || !props.lugares.length) return []

    const validLugares = props.lugares.filter(
      (l): l is Lugar & { lat: number; lng: number } => l.lat != null && l.lng != null
    )
    const years = validLugares.map(l => l.year ?? 0).filter(Boolean)
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)

    const initial: LabelPos[] = validLugares.map(l => {
      const [x, y] = project(l.lng, l.lat)
      const t = (maxYear === minYear || !l.year) ? 1 : (l.year - minYear) / (maxYear - minYear)
      const fontSize = Math.round(10 + t * 14)
      return { lugar: l.lugar, x, y, color: yearColor(l.year, minYear, maxYear), fontSize }
    })

    return resolveOverlaps(initial)
  })
</script>

<style></style>

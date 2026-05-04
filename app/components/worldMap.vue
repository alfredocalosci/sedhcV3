<template>
  <ClientOnly>
    <div ref="svg-container" class="h-75 w-full">
      <svg
        ref="my-svg"
        :viewBox="viewBox"
        :width="canvasSize.width"
        :height="canvasSize.height"
        class="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- a drop shadow filter-->
        <defs>
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/>
          </filter>
        </defs>

        <!-- bg -->
        <rect width="100%" height="100%" fill="#fff" />

        <!-- sphere background -->
        <path v-if="sphere" :d="sphere"  stroke="none" class="fill-gray-200"/>

        <!-- graticule -->
        <path v-if="graticule" :d="graticule"
          fill="none"
          class="stroke-white/50"
          stroke-width="1"
        />

        <!-- continents -->
        <g v-if="paths.length">
          <path
            v-for="(d, i) in paths"
            :key="i"
            :d="d"
            fill="#fff"
            stroke="#fff"
            stroke-width="1"
          />
        </g>

        <!-- rivers stroke-sky-400 -->
        <g v-if="rivers.length">
          <path
              v-for="(d, i) in rivers"
              :key="i"
              :d="d"
              fill="none"
              class="stroke-gray-300" 
              stroke-width="0.5"
          />
        </g>

        <!-- lugares -->

        <!-- lines  
         <line
          v-for="lugar in lugares"
          :key="lugar.slug + '-line'"
          v-if="projection"
          :x1="projection([lugar.lng, lugar.lat])![0]"
          :y1="projection([lugar.lng, lugar.lat])![1]"
          :x2="projection([lugar.lng, lugar.lat])![0]"
          :y2="projection([lugar.lng, lugar.lat])![1] - 24"
          stroke="#333"
          stroke-width="0.5"
        
        />
        -->
  
        <!--  -->
        <circle
          v-for="lugar in lugares"
          :key="lugar.slug"
          v-if="projection"
          :cx="projection([lugar.lng, lugar.lat])![0]"
          :cy="projection([lugar.lng, lugar.lat])![1]"
          r="1.5"
          class="fill-rosso-500"
          stroke="white"
          stroke-width="1"
        />

        <!-- selected lugar dot-->
        <g
          v-if="selectedCongreso && projection" filter="url(#drop-shadow)"
        >
          <circle
            v-if="projection && selectedCongreso"
            :cx="projection([selectedCongreso.lng, selectedCongreso.lat])![0]"
            :cy="projection([selectedCongreso.lng, selectedCongreso.lat])![1]"
            r="8"
            class="fill-rosso-500 transition-all duration-300"
            stroke="white"
            stroke-width="0"
          />

          <circle
            v-if="projection && selectedCongreso"
            :cx="projection([selectedCongreso.lng, selectedCongreso.lat])![0]"
            :cy="projection([selectedCongreso.lng, selectedCongreso.lat])![1]"
            r="2"
            class="fill-white transition-all duration-300"
            stroke="white"
            stroke-width="1"
          />
        </g>
      </svg>
    </div>
  </ClientOnly>

</template>

<script lang="ts" setup>
  import { useTemplateRef } from 'vue'
  import { useElementSize } from '@vueuse/core'
  import { geoPath, geoGraticule } from 'd3-geo'
  import { geoNicolosi } from 'd3-geo-projection'

  const svgContainer = useTemplateRef('svg-container')
  const { width, height } = useElementSize(svgContainer)
  const canvasSize = computed(() => ({ width: width.value, height: height.value }))
  const viewBox = computed(() => `0 0 ${canvasSize.value.width} ${canvasSize.value.height}`);


  const props = withDefaults(defineProps<{
    lugares: any[]
    selectedLugar: string | undefined
  }>(), {
    lugares: () => [],
    selectedLugar: undefined
  })

  const worldGeo = ref<any>(null);
  const riversGeo = ref<any>(null);

  const normalizeGeoJson = (raw: any): any => {
    if (raw.type === 'GeometryCollection') {
      return {
        type: 'FeatureCollection',
        features: raw.geometries.map((g: any) => ({ type: 'Feature', geometry: g, properties: {} }))
      }
    }
    return raw
  }

  onMounted(async () => {
    worldGeo.value = normalizeGeoJson(await $fetch('/geo/World_Continents_low_2.json'))
    riversGeo.value = normalizeGeoJson(await $fetch('/geo/rivers_fixed.json'))
  });

  const projection = computed(() => {
    if (!width.value || !height.value || !worldGeo.value) return null
    return geoNicolosi().fitSize([width.value, height.value*0.95], worldGeo.value)
  })

  const pathGen = computed(() => projection.value ? geoPath(projection.value) : null)

  const sphere = computed((): string => {
    if (!pathGen.value) return ''
    return pathGen.value({ type: 'Sphere' } as any) ?? ''
  })

  const graticule = computed((): string => {
    if (!pathGen.value) return ''
    return pathGen.value(geoGraticule()()) ?? ''
  })

  const paths = computed((): string[] => {
    if (!pathGen.value || !worldGeo.value) return []
    return worldGeo.value.features.map((feature: any) => pathGen.value!(feature) ?? '')
  })

  const rivers = computed((): string[] => {
    if (!pathGen.value || !riversGeo.value) return []
    return riversGeo.value.features.map((feature: any) => pathGen.value!(feature) ?? '')
  })

  // a computed function that returns the selected lugar data based on props.selectedLugar
  const selectedCongreso = computed(() => {
    if (!props.selectedLugar) return null;
    return props.lugares.find(l => l.lugar === props.selectedLugar) || null;
  });

</script>

<style></style>

<template>
  <div ref="container" class="h-48 w-full">
    <svg
      :viewBox="viewBox"
      :width="canvasSize.width"
      :height="canvasSize.height"
      class="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >

      <!-- bg -->
      <rect width="100%" height="100%" fill="#fff" /> 

      <!-- vertical lines for every new year in ScaleX timespan -->
      <g>
        <line
          v-for="year in yearTicks"
          :key="year.toString()"
          :x1="getX(year)" y1="0"
          :x2="getX(year)"
          :y2="ySpacing*4"
          :class="year.getFullYear() % 5 === 0 ? 'stroke-gray-300' : 'stroke-gray-100'"
          
        />
      </g>

      <!-- vertical labels every 5 years for years that are multiples of 5 -->
      <g>
        <text
          v-for="year in labelTicks"
          :key="year.toString()"
          :x="getX(year)"
          y="8"
          text-anchor="start"
          dx="0.3em"
         
          class="text-[9px] font-mono fill-gray-600">
          {{ String(year.getFullYear() % 100).padStart(2, '0') }}
        </text>
      </g>

      <!-- nacional items -->
       <line x1="0" :y1="ySpacing" :x2="canvasSize.width" :y2="ySpacing" class="stroke-gray-300" stroke-width="3" stroke-dasharray="3 3"/>
      <g >
        <circle 
          v-for="item in nacionalItems"
          :key="item.lugar"
          :cx="getX(item.dateFrom)" :cy="ySpacing" r="5" stroke-width="4" fill="white" class="stroke-blu-500"
          
        />
      </g>

      <!-- hispano items -->
       <line x1="0" :y1="ySpacing*2" :x2="canvasSize.width" :y2="ySpacing*2" class="stroke-gray-300" stroke-width="3" stroke-dasharray="3 3"/>
      <g>
        <circle v-for="item in hispanoItems" :key="item.lugar" :cx="getX(item.dateFrom)" :cy="ySpacing*2" r="5" stroke-width="4" fill="white" class="stroke-azzurro-500" />
      </g>

      

      <!-- internacional items -->
      <line x1="0" :y1="ySpacing*3" :x2="canvasSize.width" :y2="ySpacing*3" class="stroke-gray-300" stroke-width="3" stroke-dasharray="3 3"/>

      <g>
        <circle v-for="item in internacionalItems" :key="item.lugar" :cx="getX(item.dateFrom)" :cy="ySpacing*3" r="5" stroke-width="4" fill="white" class="stroke-rosso-500" />
      </g>

      <!-- labels  -->
      <text 
        v-for="(label, index) in ['Nacional', 'Hispanoamericano', 'Internacional']"
        :key="label"
        x="0" :y="ySpacing * (index + 1)" 
        dy="-0.33em"
        class="text-xs italic fill-gray-600">{{ label }}</text>
       
      
    </svg>
  </div>
</template>

<script lang="ts" setup>
  import { useTemplateRef } from 'vue'
  import { useElementSize } from '@vueuse/core'

  // a d3 ScaleTime mapping dateFrom values to x coordinates, based on the min and max dateFrom in the lugares prop
  import { scaleTime } from 'd3-scale'
  import { min, max } from 'd3-array'
  import { timeYear } from 'd3-time'
import { y } from 'vue-router/dist/router-CWoNjPRp.mjs'

  const scaleX = computed(() => {
    const dates = props.lugares.map(l => l.dateFrom).filter(Boolean) as Date[];
    const minDate = min(dates);
    const maxDate = max(dates);
    if (!minDate || !maxDate) return null;
    return scaleTime<number, number>()
      .domain([minDate, maxDate])
      .range([canvasSize.value.width/4, canvasSize.value.width - padding]);
  });

  const getX = (date: Date | undefined): number => {
    if (!date || !scaleX.value) return 0;
    return scaleX.value(date);
  };

  const yearTicks = computed(() => {
    if (!scaleX.value) return [];
    const [start, end] = scaleX.value.domain() as [Date, Date];
    return timeYear.range(start, end);
  });

  const labelTicks = computed(() => yearTicks.value.filter(d => d.getFullYear() % 5 === 0));

  interface itemData {
    lugar: string
    year?: number
    dateFrom?: Date
    nacional_num?: number
    hispano_num?: number
    internacional_num?: number
  }

  const props = withDefaults(defineProps<{
    lugares: itemData[]
  }>(), {
    lugares: () => []
  })

  const container = useTemplateRef('container')
  const { width, height } = useElementSize(container)

  const canvasSize = computed(() => ({ width: width.value, height: height.value }))
  const viewBox = computed(() => `0 0 ${canvasSize.value.width} ${canvasSize.value.height}`)

  const padding = 24;
  const ySpacing = 36;

  // computed variables to group itemData by nacional_num, hispano_num and internacional_num where nacional_num > 0, hispano_num > 0 and internacional_num > 0 respectively

  const nacionalItems = computed(() => props.lugares.filter(l => l.nacional_num && l.nacional_num > 0));
  const hispanoItems = computed(() => props.lugares.filter(l => l.hispano_num && l.hispano_num > 0));
  const internacionalItems = computed(() => props.lugares.filter(l => l.internacional_num && l.internacional_num > 0));

</script>

<style></style>

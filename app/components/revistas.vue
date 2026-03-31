<template>
  <div>
     <section 
      class="mt-6 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 items-start "
     >
      <a
        v-for="revista in revistas"
        :key="revista.volumen"
        :href="revista.url"
        target="_blank"
        rel="noopener noreferrer"
        class="mb-4 cursor-pointer group"
      >
        <img
          :src="revista.image?.src"
          :alt="revista.image?.alt"
          class="p-3  w-full h-auto group-hover:scale-105 transition-transform duration-300 shadow-md mb-4"
        />

        <div class="text-right pr-2">
          <p class="font-bold text-revista-500">Volumen {{ revista.volumen }}</p>
          <p class="text-xs text-gray-500">{{ revista.year }}</p>
        </div>
         
      </a>

     </section>
  </div>
</template>

<script lang="ts" setup>
 const { data: revistas } = await useAsyncData('revistas_list', () => {
    return queryCollection('revista')
      .order('volumen', 'DESC')
      .all()
  });

</script>

<style>

</style>
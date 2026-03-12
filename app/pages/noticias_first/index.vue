<template>
  <div>
    <GlobalHeader/>

    <div class="container mx-auto mt-12 mb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_4fr]  gap-6 max-w-5xl">
      <aside class="">
        <p class="text-4xl ">noticias<span class="text-azzurro-500">:</span></p>

        <div class="border-t-4 border-double border-gray-300 py-6 mt-6">
          <div v-for="cat in categorias" :key="cat.id" class=" py-2">
            <p class="text-base font-semibold ">{{ cat.nombre }}</p>
            <p class="text-xs italic pl-2 text-gray-700">{{ cat.desc }}</p>
          </div>
        </div>
      </aside>

      <div></div>

      <article class=" ">
        <div v-for="noticia in noticias" :key="noticia.slug" class="mb-6   pb-4">
          <NuxtLink :to="`/noticias/${noticia.slug}`">
            <p class="text-sm italic text-gray-500">
              {{ formatSpanishDate(noticia.date) }}
            </p>
            <h2 class="text-xl/7 my-3 text-gray-900">{{ noticia.title }}</h2>
            <p class="pl-3 text-base/6 italic text-gray-600">{{ noticia.description }}</p>
          </NuxtLink>

        </div>  
      </article>
    </div>
    

    <GlobalFooter/>
  </div>
</template>

<script lang="ts" setup>
  // ...existing code...
  // get noticias
  const { data: noticias } = await useAsyncData('noticias_list', () => {
  return queryCollection('noticias')
    .select('path', 'title', 'slug', 'description', 'date', 'category')
    .order('date', 'DESC')
    .all()
  })

  onMounted(() => {
    console.log(noticias.value)
  })
</script>

<style>

</style>
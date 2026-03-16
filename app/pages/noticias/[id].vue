<template>
  <div class="grid grid-cols-[300px_720px_1fr]">

    <aside class="w-full h-full bg-neutro-500 flex flex-col ">
      
      <NuxtLink to="/" class="w-full  bg-azzurro-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>

      <div v-if="noticia">
        <img :src="noticia.image?.src" :alt="noticia.image?.alt" class="mx-auto max-w-5/6 mt-12 shadow-lg/40"/>
      </div>
    </aside>

    <div class="p-12 px-18 bg-white shadow-2xl min-h-screen">
      <GlobalHeaderAlt/>

      <!-- breadcrumbs -->
      <div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3 ">
        <p class="font-mono uppercase text-[10px] text-azzurro-500">


          <NuxtLink to="/" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">inicio</NuxtLink>  / 

          <NuxtLink to="/noticias" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">noticias</NuxtLink>  / 

        </p>         
      </div>

      <!-- head -->
      <div v-if="noticia" class="mt-6 pb-2">
          <p class="text-sm italic text-gray-500">
            {{ formatSpanishDate(noticia.date) }}
          </p>
          <h2 class="text-4xl/10 my-6 text-gray-900 mr-6">{{ noticia.title }}</h2>
          <p class="pl-6 text-lg/7 italic text-gray-600">{{ noticia.description }}</p>
      </div>  

      <!-- content -->
      <article v-if="noticia" class=" ml-9 mb-12">
        <ContentRenderer v-if="noticia" :value="noticia" class="mdtxt"/>
      </article>

      <!-- link -->
      <div v-if="noticia?.url" class="pt-6 mb-12 border-t border-dashed">
        <p class="font-mono text-xs pb-0 text-gray-600">mas información en:</p>
        <a :href="noticia.url" target="_blank" class="text-gray-700 decoration-cyan-500 underline underline-offset-6 text-sm pl-2">
          {{ shortenUrl(noticia.url, 50) }}
        </a>
      </div>

      <GlobalFooter/>
    </div>

    <div></div>
    
  </div>
</template>

<script lang="ts" setup>

  const route = useRoute()

  const { data: noticia } = await useAsyncData(route.path, () => {
    return queryCollection('noticias').where('slug', '=', route.params.id).first()
  })


</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

   .mdtxt :deep(p), .mdtxt :deep(li), .mdtxt :deep(blockquote p) {
        
        @apply text-base/6  ;
    }

   .mdtxt :deep(p) {
        @apply -indent-3;
    }

    .mdtxt :deep(blockquote) {
        @apply -ml-6;
    }

    .mdtxt :deep(blockquote p) {
        @apply indent-0  pl-9 text-2xl/8 my-9;
    }

    .mdtxt :deep(a) {
        @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
    }

</style>
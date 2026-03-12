<template>
  <div>
    <GlobalHeader/>

    <div class="container mx-auto mt-18 mb-12 grid grid-cols-1 md:grid-cols-[2fr_4fr_1fr]  gap-6 max-w-5xl">

      <aside v-if="noticia" class="row-span-2">
        <img :src="noticia.image?.src" :alt="noticia.image?.alt" class="max-w-5/6 mt-12 shadow-lg/40"/>
      </aside>

      <article class="col-span-2">
        <div v-if="noticia" class=" pb-2">
          

          <p class="text-sm italic text-gray-500">
            {{ formatSpanishDate(noticia.date) }}
          </p>
          <h2 class="text-4xl/11 my-6 text-gray-900 mr-6">{{ noticia.title }}</h2>
          <p class="pl-6 text-lg/7 italic text-gray-600">{{ noticia.description }}</p>
        </div>  
      </article>

       <article
        v-if="noticia"
        class="col-start-2 col-span-2 mr-12 ml-9"
      >

        <ContentRenderer v-if="noticia" :value="noticia" class="mdtxt"/>
      </article>

    </div>

    <GlobalFooter/>


  </div>
</template>

<script lang="ts" setup>

const route = useRoute()

 const { data: noticia } = await useAsyncData(route.path, () => {
  return queryCollection('noticias').where('slug', '=', route.params.id).first()
  })

  onMounted(() => {
    console.log("path .........")
    console.log(route.path)
    console.log(route.params.id)
    console.log(noticia)
  })

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

   .mdtxt :deep(p), .mdtxt :deep(li), .mdtxt :deep(blockquote p) {
        
        @apply text-lg/7  ;
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
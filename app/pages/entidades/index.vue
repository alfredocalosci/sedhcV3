<template>
   <div class="sedhc_grid">

     <aside class="w-full h-full bg-mist-500  flex flex-col  pb-8">
      <NuxtLink to="/" class="w-full  bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>
     </aside>

     <div class="main_content bg-white min-h-screen">
      <h2 class="text-4xl font-bold mb-4 mt-3 " >entidades</h2>
      

        <!-- index -->
        <div class="mt-9 border-t border-dashed pt-6 mb-12">
          <NuxtLink 
            v-for="entidad in entidades"
            :key="entidad.acronym" 
            :to="entidad.path"
            class="mb-1 block hover:text-rosso-500 transition-colors duration-300"
          >
            <h3 >{{ entidad.title }}</h3>
          </NuxtLink>
        </div>

       <GlobalFooter/>
     </div>

     <div></div>
    
  </div>
</template>

<script lang="ts" setup>
  const { data: entidades } = await useAsyncData('entidades_list', () => {
    return queryCollection('entidades')
      .order('rank', 'ASC')
      .all()
  });
</script>

<style>

</style>
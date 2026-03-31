<template>
  <div class="sedhc_grid">
    
    <div class="bg-revista-500 pb-6">

      <!-- logo-->
      <aside >

        <NuxtLink to="/" class="w-full  bg-azzurro-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
          <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

          <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
        </NuxtLink>

        <div class="px-8 mt-8 lg:mt-20 italic text-gray-100">
         
         <ContentRenderer v-if="sideText" :value="sideText" class="mdtxt mdtxt_side mt-8" />

          <div class="mt-6 pointer-events-auto border-t border-gray-400 pt-6">
            <a 
              href="#"
              target="_blank"
              class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto"
              rel="noopener noreferrer"
            >
            <UIcon name="lucide:app-window-mac" style="color: white" size="24"/>
            <span class="ml-2 text-xs italic text-white/70 group-hover:text-white transition-colors duration-300">{{shortenUrl('https://polipapers.upv.es/index.php/HC/index', 30)}}</span>
            </a>
          </div>
       
        </div>

      </aside>

    </div>

    <div class="main_content bg-white">
      <GlobalHeaderAlt/>

      <section id="intro" class="mt-32 mb-16">
        <ContentRenderer v-if="introText" :value="introText" class="mdtxt mdtxt_intro mt-8" />
      </section>

      <section id="volumenes" class="mb-16">
        <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mb-8">Volúmenes publicados:</p>

        <revistas/>
      </section>

      <section  class="mb-16">
        <ContentRenderer v-if="mainText" :value="mainText" class="mdtxt mdtxt_main mt-8" />
      </section>

      <section class="mb-16">
        <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mb-8">Redacción:</p>

        <ContentRenderer v-if="cargosText" :value="cargosText" class="mdtxt mdtxt_lista mt-8" />
      </section>

      
      <GlobalFooter/>

    </div>

    <div></div>
    
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  const { data: introText } = await useAsyncData('revista_intro', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'revista')
      .where('section', '=', 'intro')
      .first()
  });

  const { data: sideText } = await useAsyncData('revista_side', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'revista')
      .where('section', '=', 'lateral')
      .first()
  });

  const { data: mainText } = await useAsyncData('revista_main', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'revista')
      .where('section', '=', 'texto')
      .first()
  });

  const { data: cargosText } = await useAsyncData('revista_cargos', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'revista')
      .where('section', '=', 'cargos')
      .first()
  });



  onMounted(() => {
    
  });

  onBeforeUnmount(() => {
    
  });
</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .step {
    @apply scroll-mt-24;
  }

  .quote p{
    @apply mb-2 text-gray-600
  }

  .mdtxt :deep(a) {
    @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
  }
  
  .mdtxt_main :deep(p) {
    @apply leading-6 -indent-3 ml-3;
  }

  .mdtxt :deep(p) {
    @apply text-pretty;
  }

  .mdtxt_intro :deep(p) {
    @apply ml-3 -indent-3 mt-6 text-base/6 lg:text-lg/7;
  }

  .mdtxt_side :deep(p) {
    @apply text-base/6 mb-4;
  }

  .mdtxt_intro :deep(p:first-of-type) {
    @apply first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-revista-500 mt-6 ml-3 first-letter:-ml-3;
  }

  .mdtxt_lista :deep(h5) {
    @apply font-bold text-sm mb-1 text-gray-900 p-0;
  }

  .mdtxt_lista :deep(ul) {
    @apply m-0 text-sm text-gray-800 mb-4 p-0;
  }

  .mdtxt_lista :deep(ul li) {
    @apply list-none text-gray-800 m-0 pl-2;
  }

</style>
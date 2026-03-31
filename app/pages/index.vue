<template>
  <div class="sedhc_grid">
    
    <div class="bg-chiaro-50 flex flex-col pb-6">
       <aside class="py-6 px-8 lg:aspect-square  text-2xl transition-colors duration-300 border-b border-white">
        <div class="h-full w-full block">
            <img src="/img/sedhc_logo_ilustracion.png" alt="sedhc" class="h-30 w-auto mt-2 mix-blend-multiply bg-white">

            <p class="pt-4 tracking-tight">Sociedad Española de Historia de la Construcción<span class="text-giallo-500 font-bold">.</span></p>
        </div>
      </aside>

      <section class="p-8 pt-10 text-sm text-gray-600">
       <ContentRenderer v-if="sideText" :value="sideText" class="mdtxt mdtxt_side" />
      </section>

      <!-- RRSS -->
      <rrss/>

    </div>

   
    <!-- main content -->
    <div class="main_content">
      <GlobalHeaderAlt/>

      <ClientOnly>
        <HomeNewsCarousel/>
      </ClientOnly>

      <ContentRenderer v-if="introText" :value="introText" class="mdtxt mdtxt_intro mt-8" />

      <img src="/img/ilustraciones/gotico.jpg" alt="Gótico" class="my-12">


      <!-- sociedad intro -->
      <div class="md:columns-2 gap-x-8 mt-6">
          <ContentRenderer v-if="sociedadText" :value="sociedadText" class="mdtxt mdtxt_two_c" />
      </div>

     
       <!-- block separator: revista -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">la revista</p>

        <a href="https://polipapers.upv.es/index.php/HC/" class=" text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300" rel="noopener noreferrer" target="_blank">
        consultar 
        <UIcon name="lucide:external-link" class="size-4 ml-2 text-rosso-500" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-sm">

        <div class=" aspect-square">
          <img src="/img/revista/RevistaHC.jpg" alt="revista" class="w-full h-auto">
        </div>

        <div class="md:col-span-2 ">
          <ContentRenderer v-if="revistaText" :value="revistaText" class="mdtxt mdtxt_two_c" />
        </div>

      </div>

       <!-- block separator: congresos -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">los congresos de historia de la construcción</p>

        <NuxtLink to="/congresos" class=" text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300">
        consultar 
        <UIcon name="lucide:arrow-right" class="size-4 ml-2 text-rosso-500" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm ">

        <div class="">
         <h3 class="font-bold text-center text-6xl py-4">XIV</h3>
         <p class="text-xs  text-center text-gray-500">Nacional</p>
         <p class=" mt-4 text-xs py-2 italic text-center bg-blu-500 text-white">Cartagena 2026</p>
        </div>

        <div class="">
         <h3 class="font-bold text-center text-6xl py-4">VI</h3>
         <p class="text-xs  text-center text-gray-500">Hispanoamericano</p>
          <p class=" mt-4 text-xs py-2 italic text-center bg-azzurro-500 text-white">Cartagena 2026</p>
        </div>
        <div class=" ">
         <h3 class="font-bold text-center text-6xl py-4">VIII</h3>
          <p class="text-xs  text-center text-gray-500">Internacional</p>
           <p class=" mt-4 text-xs py-2 italic text-center bg-rosso-500 text-white">Zurich 2026</p>
        </div>
      </div>

      <!-- block separator: tratados -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm font-semibold pb-1">biblioteca digital: tratados</p>

        <NuxtLink to="/tratados" class=" text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300">
        consultar 
        <UIcon name="lucide:arrow-right" class="size-4 ml-2 text-rosso-500" />
        </NuxtLink>
      </div>
      

      <!-- tratados intro -->
      <div class="md:columns-2 gap-8 mt-6">
        <ContentRenderer v-if="tratadosText" :value="tratadosText" class="mdtxt mdtxt_two_c" />
      </div>

      <TratadosHome/>

      <globalFooter/>
    </div>

    <!-- sidebar -->
    <div></div>

    
  </div>
</template>

<script lang="ts" setup>

  const { data: textos } = await useAsyncData('textos_home', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'home')
      .all()
  });

  const sideText = computed(() => textos.value?.find(t => t.section === 'side'));
  const introText = computed(() => textos.value?.find(t => t.section === 'intro'));
  const sociedadText = computed(() => textos.value?.find(t => t.section === 'sociedad'));
  const tratadosText = computed(() => textos.value?.find(t => t.section === 'tratados'));
  const revistaText = computed(() => textos.value?.find(t => t.section === 'revista'));
  
  onMounted(() => {
    // console.log('textos home', textos.value);
  })


</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .mdtxt :deep(p, div) {
    @apply text-wrap my-0;
  }

  .mdtxt :deep(a) {
    @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
  }

  /* side */
  .mdtxt_side :deep(p) {
    @apply text-sm/6 text-gray-600 mb-4;
  }

  /* intro */
  .mdtxt_intro :deep(p) {
    @apply ml-3 -indent-3 mt-6 text-base/6 md:text-lg/7;
  }

  .mdtxt_intro :deep(p:first-of-type) {
    @apply first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-rosso-500 mt-6 ml-3 first-letter:-ml-3;
  }

  .mdtxt_two_c :deep(p) {
    @apply text-sm/6 mb-6;
  }

  .mdtxt_two_c :deep(hr) {
    @apply border-0 break-after-column my-0;
  }




 
  /*
  .mdtxt .enlaces_externos{
    @apply border-t border-gray-300 mt-4 pt-4 mb-4;
  }

  .mdtxt .enlaces_externos :deep(a) {
    @apply no-underline w-full text-xs font-mono uppercase after:content-['→'] after:text-gray-400 after:float-right after:text-sm after:font-mono;
  }
    */

</style>
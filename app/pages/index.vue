<template>
  <div class="grid grid-cols-[300px_720px_1fr] ">
    
    <div class="bg-chiaro-50 flex flex-col ">
       <aside class="py-6 px-8 aspect-square  text-2xl transition-colors duration-300 border-b border-white">
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
    <div class="p-12 px-18 bg-white shadow-2xl">
      <GlobalHeaderAlt/>

      <!-- news carousel 
      <div class="bg-gray-50 mt-4 p-4">
        <div class="pseudo_slide w-10/12 mx-auto flex gap-6 ">

          <div class="aspect-square bg-gray-100">
            <img src="/img//noticias/24649.jpg" alt="noticia" class=" w-full h-auto">
          </div>

          <div>
            <p class="text-xs italic pb-2">14 de marzo de 2024</p>
              <p class="text-xs font-bold">V Congreso Internacional Hispano-Americano y XIII Congreso Nacional de Historia de la Construcción</p>
          </div>

          <div>
            <p class="text-xs italic">Este miércoles 20 de marzo se da inicio a nuestro congreso internacional y nacional en la ciudad de Santo Domingo</p>
          </div>
        </div>
      </div>
      -->
      
      <ClientOnly>
        <HomeNewsCarousel/>
      </ClientOnly>

      <ContentRenderer v-if="introText" :value="introText" class="mdtxt mdtxt_intro mt-8" />

      <img src="/img/ilustraciones/gotico.jpg" alt="Gótico" class="my-12">


      <div class="md:columns-2 gap-8 mt-6 text-sm">
       
          <p>La sociedad tiene entre sus fines: editar una Revista de Historia de la Construcción anual, celebrar un Congreso bienal, fomentar y difundir cursos y seminarios sobre la materia ademas de establecer contactos con instituciones análogas en diferentes países.</p>
       
          <p>En cualquier caso, y una vez puesta en marcha la Sociedad Española de Historia de la Construcción, ésta se manifiesta explícitamente abierta a cualquier iniciativa tendente a potenciar y difundir por los medios legales a su alcance los trabajos relativos a esta actividad</p>
       

      </div>

     

       <!-- block separator: revista -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">la revista</p>

        <a href="https://polipapers.upv.es/index.php/HC/" class=" text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300" rel="noopener noreferrer" target="_blank">
        consultar 
        <UIcon name="lucide:external-link" class="size-4 ml-2 text-rosso-500" />
        </a>
      </div>

      <div class="grid grid-cols-3 gap-8 mt-6 text-sm mdtxt">

        <div class=" aspect-square">
          <img src="/img/revista/RevistaHC.jpg" alt="revista" class="w-full h-auto">
        </div>

        <div class="md:col-span-2 ">
          <p class="mb-2">La Revista de Historia de la Construcción es editada por la <strong>Universitat Politècnica de València</strong> y fue fundada en el año 2020 por la SEdHC.</p>
          
          <p>La <a href="https://gdocu.upv.es/alfresco/service/api/node/content/workspace/SpacesStore/5b1e2dfb-f464-484a-a700-bd7f764c2a03/BOLET%c3%8dN%20DE%20SUSCRIPCI%c3%93N_HdC_2024.doc" target="_blank" rel="noopener noreferrer">suscripción</a> a la revista, da derecho a adquirir o mantener la condición de <strong>socio</strong> de la SEdHC y a recibir un ejemplar en papel del volumen correspondiente a ese año natural.</p>

          
          


        </div>

      </div>

       <!-- block separator: congresos -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">los congresos de historia de la construcción</p>

        <NuxtLink to="/eventos" class=" text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300">
        consultar 
        <UIcon name="lucide:arrow-right" class="size-4 ml-2 text-rosso-500" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-3 gap-6 mt-6 text-sm ">

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
      

      <div class="grid grid-cols-2 gap-8 my-6 text-sm">
        <div>
          <p>Los tratados de Arquitectura, Construcción e Ingeniería son una de las fuentes fundamentales para el estudio de la Historia de la Construcción.</p>

          <p>Los más importantes están publicados en ediciones facsímiles; el resto, se encuentra en distintas bibliotecas especializadas.</p>
        </div>

        <div>
          <p>En colaboración con el Instituto Juan de Herrera, hemos creado esta <strong>Biblioteca Digital</strong> con el objetivo de poner al alcance de cualquier interesado en la Historia de la Construcción una selección de tratados que, al estar libres de derechos de autor por su antigüedad, pueden difundirse libremente.</p>
        </div>

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

  .mdtxt_side :deep(p) {
    @apply text-sm/6 text-gray-600 mb-4;
  }

  .mdtxt_intro :deep(p) {
    @apply ml-3 -indent-3 mt-6 text-lg/7;
  }

  .mdtxt_intro :deep(p:first-of-type) {
    @apply first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-rosso-500 mt-6 ml-3 first-letter:-ml-3;
  }


  /*
  first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-rosso-500 mt-6 ml-3 first-letter:-ml-6
  */ 

  .mdtxt :deep(a) {
        @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
    }
  
  .mdtxt .enlaces_externos{
    @apply border-t border-gray-300 mt-4 pt-4 mb-4;
  }

  .mdtxt .enlaces_externos :deep(a) {
    @apply no-underline w-full text-xs font-mono uppercase after:content-['→'] after:text-gray-400 after:float-right after:text-sm after:font-mono;
  }

</style>
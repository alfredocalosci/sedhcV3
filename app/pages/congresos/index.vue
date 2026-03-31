<template>
  <CustomUISidePanel 
    :isOpen="isOpen"
    @toggle="togglePannel"
  >

    <p class="font-semibold text-lg/6">{{ selectedTitle }}</p>
    <p class="italic text-gray-300 pt-4 text-base">{{ selectedCongreso?.lugar }}</p>
    <p class="italic text-gray-300 pt-1 text-xs">{{ selectedCongreso?.sede }}</p>

    <p v-if="selectedCongreso?.dateFrom" class="italic text-gray-300 pt-4 text-sm">
      {{ formatDayMonth(selectedCongreso.dateFrom) }}<span v-if="selectedCongreso?.dateTo"> - {{ formatDayMonthYear(selectedCongreso.dateTo) }}</span>
    </p>

    <div class="mt-6 pointer-events-auto border-t border-gray-400 pt-6">
      <!-- web -->
      <a 
          v-if="selectedCongreso?.url"
          :href="selectedCongreso?.url"
          target="_blank"
          class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto"
          rel="noopener noreferrer"
        >
          <UIcon name="lucide:app-window-mac" style="color: white" size="24"/>
          <span class="ml-2 text-xs italic text-white/70 group-hover:text-white transition-colors duration-300">{{shortenUrl(selectedCongreso?.url, 30)}}</span>
      </a>


     <!-- actas on archive org -->
      <div v-if="selectedCongreso?.actas" class="pt-6">
        <p class="font-mono text-xs mb-4 text-gray-400">actas en archive.org:</p>

        <a 
            v-for="acta in selectedCongreso.actas"
            :key="acta.identifier"
            :href="'https://archive.org/details/' + acta.identifier"
            target="_blank"
            class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto"
            rel="noopener noreferrer"
        >
          <UIcon name="lucide:book-open" style="color: white" size="24"/>
          <span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300">{{ acta.title }}</span>
      </a>

      </div>
      
    </div>
    
    <div 
      v-if="selectedCongreso?.image?.src"
      class="mt-12 hidden lg:block"
    >
      <img 
        :src="selectedCongreso.image.src" 
        :alt="selectedCongreso.image.alt" 
        class="w-full h-auto border border-gray-300 grayscale"
      />
    </div>

  </CustomUISidePanel>


  <div class="sedhc_grid">
    
    <!-- bg-blu-500/70 -->
    <aside class="w-full h-full bg-revista-500  flex flex-col  pb-8">

      <NuxtLink to="/" class="w-full  bg-blu-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>

      <article class="px-8 mt-2 lg:mt-12 italic text-gray-100">
         <ContentRenderer v-if="sideText" :value="sideText" class="mdtxt mdtxt_side mt-8" />
      </article>

    </aside>

    <div class="main_content bg-white">
      <GlobalHeaderAlt/>

      <section class="mt-32">
        <ContentRenderer v-if="introText" :value="introText" class="mdtxt mdtxt_intro mt-8" />
      </section>

      <section>
        <!-- congresos -->
        <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mt-18 mb-8">Congresos de Historia de la construcción:</p>

        <!-- congresos compact list -->
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-4  text-sm">

          <div
            v-for="congreso in congresos"
            :key="congreso.slug"
            class="pb-2 cursor-pointer group"
            @click="selectItem(congreso.slug, congreso.title)"
          >
            <p 
              class="font-bold pb-1  group-hover:text-rosso-500 transitions-colors duration-300"
              :class="{
                'text-gray-400': selectedItem !== congreso.slug && selectedItem !== undefined,
                'text-gray-900 ': selectedItem === congreso.slug,
                'text-gray-900': selectedItem === undefined
              }"
            >{{ congreso.title }}</p>
            <p class="text-xs italic text-gray-600 ">{{ congreso.lugar }} - {{ congreso.year }}</p>
          </div>

        </div>
      </section>

      <globalFooter/>

    </div>

    <div></div>

    
  </div>
</template>

<script lang="ts" setup>

function formatDayMonth(date: Date | string | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '';
  const day = d.getDate();
  const month = d.toLocaleString('es-ES', { month: 'long' });
  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
}

function formatDayMonthYear(date: Date | string | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '';
  const day = d.getDate();
  const month = d.toLocaleString('es-ES', { month: 'long' });
  const year = d.getFullYear();
  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
}

    // UI elements
  const isOpen = ref(false);
  const selectedItem = ref<string | undefined>(undefined);
  const selectedTitle = ref<string | undefined>(undefined);

  const selectItem = (identifier:string, title:string) => {
    selectedItem.value = identifier;
    selectedTitle.value = title;
    isOpen.value = true;
  }

  const togglePannel = () => {
    isOpen.value = !isOpen.value
    if (!isOpen.value) {
      selectedItem.value = undefined;
      selectedTitle.value = undefined;
    }
  }

  const { data: congresos } = await useAsyncData('congresos_list', () => {
    return queryCollection('congresos')
      .order('year', 'DESC')
      .all()
  });

  const { data: introText } = await useAsyncData('congresos_intro', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'congresos')
      .where('section', '=', 'intro')
      .first()
  });

  const { data: sideText } = await useAsyncData('congresos_side', () => {
    return queryCollection('textos')
      .where('webpage', '=', 'congresos')
      .where('section', '=', 'lateral')
      .first()
  });

  const selectedCongreso = computed(() => {
    return congresos.value?.find(c => c.slug === selectedItem.value);
  })

  onMounted(() => {
    // console.log('congresos', congresos.value)
  })

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .mdtxt_intro :deep(p) {
    @apply ml-3 -indent-3 mt-6 text-base/6 lg:text-lg/7 text-wrap;
  }

  .mdtxt_intro :deep(p:first-of-type) {
    @apply first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-cyan-500 mt-6 ml-3 first-letter:-ml-3;
  }

  .mdtxt_side :deep(p) {
    @apply text-sm/5 mb-4;
  }

</style>
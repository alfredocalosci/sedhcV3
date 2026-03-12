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
    
    <div v-if="selectedCongreso?.image.src" class="mt-12">
      <img 
        :src="selectedCongreso.image.src" 
        :alt="selectedCongreso.image.alt" 
        class="w-full h-auto border border-gray-300 grayscale"
      />
    </div>

  </CustomUISidePanel>


  <div class="grid grid-cols-[300px_720px_1fr]">
    
    <aside class="w-full h-full bg-blu-500/70 flex flex-col min-h-screen ">

      <NuxtLink to="/" class="w-full  bg-blu-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 px-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>

      <article class="px-8 py-8 text-white italic">
        <p>below</p>
      </article>

    </aside>

    <div class="p-12 px-18 bg-white shadow-2xl min-h-screen ">
      <GlobalHeaderAlt/>

      <div class="pt-36 mb-12">
      <p class="first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-sky-500 mt-6 ml-3 first-letter:-ml-6 ">Aquí contamos los Congresos: ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum vehicula nulla, vel rhoncus nisi porttitor et. Integer eget pharetra erat, id aliquet est. Praesent sed odio gravida, dignissim mi sit amet, vehicula neque. Mauris sollicitudin, risus ac imperdiet tempor, ligula enim ultricies odio, et lobortis lectus tellus sed orci.</p>

      <p class="ml-3 -indent-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum vehicula nulla, vel rhoncus nisi porttitor et. Integer eget pharetra erat, id aliquet est. Praesent sed odio gravida, dignissim mi sit amet, vehicula neque.</p>
        
        <p class="ml-3 -indent-3 mt-3">Nunc eget augue non odio luctus elementum. In magna neque, semper convallis lectus sed, malesuada venenatis enim. Aenean quis mattis leo. Curabitur scelerisque eros ut sem pellentesque semper. Aenean et scelerisque velit, varius semper massa. Aenean vitae elementum turpis.</p>

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

      </div>

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

function shortenUrl(url: string | undefined, maxChars: number = 30): string {
  if (!url) return '';
  const clean = url.replace(/^https?:\/\//, '');
  return clean.length > maxChars ? clean.slice(0, maxChars) + '…' : clean;
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

  const selectedCongreso = computed(() => {
    return congresos.value?.find(c => c.slug === selectedItem.value);
  })

  interface Congreso {
    title: string;
    slug: string;
    year: number;
    dateFrom: Date;
    dateTo?: Date;
    url?: string;
    lugar: string;
    sede?: string;
    image?: {
      src: string;
      alt: string;
    };
    actas?: {
      title: string;
      identifier: string;
    }[];
  }

  const { data: congresos } = await useAsyncData<Congreso[]>('congresos_list', () => {
    return queryCollection('congresos')
      .order('year', 'DESC')
      .all()
  });

  onMounted(() => {
    // console.log('congresos', congresos.value)
  })

</script>

<style>

</style>
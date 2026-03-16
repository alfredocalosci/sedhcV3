<template>

  <div class="grid grid-cols-[300px_720px_1fr]">

    <!-- bg-azzurro-500/70 ? -->
    <aside class="w-full h-full bg-neutro-500 flex flex-col ">

      <NuxtLink to="/" class="w-full  bg-azzurro-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>

      <article class="px-8 py-12  italic">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>

      <rrss/>

    </aside>

    <div class="p-12 px-18 bg-white shadow-2xl min-h-screen">
      <GlobalHeaderAlt/>

      <!-- categorias -->
      <div class="grid grid-cols-3 gap-x-7 gap-y-4 text-xs mt-6 border-b border-gray-400 border-dashed pb-6 ml-1">

        <div 
          v-for="(cat,index) in categorias"
          :key="cat.id" @click="selectSubject(cat.slug)" 
          class="cursor-pointer"
        >
            <p>
              <strong 
                class="font-bold text-xs -ml-1 transition-colors duration-300"
                :class="{
                  'text-gray-400': selectedSubject !== cat.slug && selectedSubject !== null,
                  'text-rosso-500 ': selectedSubject === cat.slug,
                  'text-gray-900': selectedSubject === null
                  }"
              >{{ cat.nombre }}: </strong><br/>
              <span 
                class="italic  transition-colors duration-300"
                :class="{
                  'text-gray-400': selectedSubject !== cat.slug && selectedSubject !== null,
                  'text-gray-600 ': selectedSubject === cat.slug,
                  'text-gray-600': selectedSubject === null
                  }"
              >{{ cat.desc }}</span></p>
            </div>
        </div>

        <!-- pager -->
      <div class="flex items-center justify-between gap-4 mb-16 z-5 md:sticky top-0 bg-white py-3 ">

           <p class="font-mono text-xs text-gray-500">mostrando <span class="text-scuro-900 font-semibold">{{  filteredNoticias.length }}</span> noticias de <span class="text-scuro-900 font-semibold">{{ noticias?.length }}</span>
          </p>

           <!-- search input -->
          <div class="relative ">
              <input 
                type="search"
                id="site-search"
                name="q"
                v-model="searchString"
                ref="searchInput"
                placeholder="Buscar …"
                class="font-mono text-xs border-b border-gray-300 focus:border-rosso-500 focus:ring-0 focus:outline-none transition-colors duration-200 w-full mb-4 md:mb-0 pl-6 pb-1.5"
              />

              <Icon
                name="lucide:search"
                style="color: black"
                size="18"
                class="absolute top-3 left-0 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
        </div>
       </div>

      
      <!-- noticias -->
      <div class="mt-8 max-w-5/6">
        <!-- destacadas-->
        <div v-for="noticia in noticiasDestacadas" :key="noticia.slug" class="mb-4  pb-4">
          <NuxtLink :to="`/noticias/${noticia.slug}`" class="group">
              <p class="text-sm italic text-gray-500">
                {{ formatSpanishDate(noticia.date) }}
              </p>
              <h2 class="text-2xl/7 my-3 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300">{{ noticia.title }}</h2>
              <p class="pl-3 text-base/6 italic text-gray-600">{{ noticia.description }}</p>
          </NuxtLink>
        </div> 
      </div>

      <div class="mt-12 ">

          <!-- compactas agrupadas por año -->
          <div v-for="year in Object.keys(noticiasCompactasByYears).sort((a, b) => Number(b) - Number(a))" :key="year" class="mb-12">

            <h4 class="text-xs font-mono w-full border-b border-dashed border-gray-300 text-gray-500 pb-2 text-right mb-6 ">{{ year }}</h4>

            <div v-for="noticia in noticiasCompactasByYears[year]" :key="noticia.slug" class="mb-3 pb-3">
              <NuxtLink :to="`/noticias/${noticia.slug}`" class="group">
                <p class="text-xs italic text-gray-500">
                  {{ formatSpanishDate(noticia.date) }}
                </p>
                <h3 class="text-sm/5 pl-3 my-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300">{{ noticia.title }}</h3>
              </NuxtLink>
            </div>
          </div>
      </div>
      
      <globalFooter/>

    </div>

    <div></div>

    
    
  </div>
</template>

<script lang="ts" setup>

  const { data: noticias } = await useAsyncData('noticias_list', () => {
    return queryCollection('noticias')
      .select('path', 'title', 'slug', 'description', 'date', 'category')
      .order('date', 'DESC')
      .all()
  });

  const { data: categorias } = await useAsyncData('categorias_list', () => {
    return queryCollection('temas')
      .order('rank', 'ASC')
      .all();
  });

  const selectedSubject = ref<string | null>(null);
  const selectSubject = (subject: string) => {
    selectedSubject.value = subject === selectedSubject.value ? null : subject
  }

  const searchString = ref('');

  const filteredNoticias = computed(() => {
    if (!noticias.value) return [];

    let filterOutput = noticias.value;
    // if (!selectedSubject.value) return noticias.value;

    if(selectedSubject.value) {
      filterOutput = filterOutput.filter((noticia) => Array.isArray(noticia.category) && noticia.category.includes(selectedSubject.value!));
    }

     // apply search filter here
    if (searchString.value && searchString.value.trim() !== '' && searchString.value.length > 2) {
       filterOutput = filterOutput.filter((item) => {
        return item.title.toLowerCase().includes(searchString.value.toLowerCase())
      })
    }   
    return filterOutput;
  });

  // First 3 noticias
  const noticiasDestacadas = computed(() => filteredNoticias.value.slice(0, 3));
  // All others
  const noticiasCompactas = computed(() => filteredNoticias.value.slice(3));

  // Group compactas by year
  const noticiasCompactasByYears = computed(() => {
    return noticiasCompactas.value.reduce((acc, noticia) => {
      const year = String(new Date(noticia.date).getFullYear());
      if (!acc[year]) acc[year] = [];
      acc[year].push(noticia);
      return acc;
    }, {} as Record<string, typeof noticiasCompactas.value>);
  });

  onMounted(() => {
    // console.log('Noticias:', noticias.value);
    // console.log('Categorias:', categorias.value);
  });

</script>

<style>

</style>
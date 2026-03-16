<template>
  <!-- side panel test   -->
  <CustomUISidePanel 
    :isOpen="isOpen"
    @toggle="togglePannel"
  >
    <div class="flex items-center justify-between pb-2 mb-8 ">       
      <img src="https://archive.org/download/ia-logo-white-transparent/ia-logo-white-transparent.png" alt="internet archive" class="max-w-3/4 h-auto my-2 ">
    </div>

    <p class="font-semibold text-lg/6">{{ selectedTitle }}</p>

    <div class="mt-8 mb-8 pointer-events-auto">
        <a 
          :href="'https://archive.org/details/' + selectedItem"
          target="_blank"
          class="flex items-center gap-x-2 mb-2 group"
          rel="noopener noreferrer"
        >
          <UIcon name="lucide:book-open" style="color: white" size="24"/>
          <span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300">consultar en archive.org</span>
        </a>
  
        <a 
           v-if="selectedPdfUrl"
          :href="selectedPdfUrl ? selectedPdfUrl : '#'"
          target="_blank"
          class="flex items-center gap-x-2 group"
          rel="noopener noreferrer"
        >
          <UIcon name="lucide:hard-drive-download" style="color: white" size="24"/>
          <span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300">descargar pdf</span>
        </a>

    </div>

  </CustomUISidePanel>

  <div class="grid grid-cols-[300px_720px_1fr]">

    <aside class="w-full h-full bg-neutro-500 flex flex-col ">

      <NuxtLink to="/" class="w-full  bg-rosso-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8  pl-6 pr-5 border-b border-white">

       <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">
        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>

      <article class="px-8 py-8  ">
        <p class="italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <hr class="styled after:bg-neutro-500"/>

        <div class="mt-12">

        <div v-for="subject in topSubjects" :key="subject[0]" >
          <p
            class="flex justify-between pb-1 group text-gray-800 cursor-pointer"
            @click="selectSubject(subject[0])"
          >
            <strong 
              class="font-bold text-xs -ml-1 transition-colors duration-100"
              :class="selectedSubject === subject[0] ? 'text-rosso-500 font-bold' : '  group-hover:text-gray-500 '"
            >{{ subject[0] }}: </strong>
            <span class="italic text-gray-600 text-xs">{{ subject[1] }}</span>
          </p>   
        </div>
      </div>

      </article>

    </aside>

    <div class="p-12 px-18 bg-white shadow-2xl min-h-screen">
      <GlobalHeaderAlt/>

      <!-- UI elements -->
       <div class="mb-2 grid md:grid-cols-3 gap-8 border-b border-dashed border-gray-400 py-6">

          <selectSort
            :model-value="sortBy"
            :sort-order="sortOrder"
            @update:sortBy="sortBy = $event"
            @update:sortOrder="sortOrder = $event"
          />

          <selectView
            :model-value="showAs"
            @update:modelValue="showAs = $event" 
          />

          <!-- search input -->
          <div class="relative ">
              <input 
                type="search"
                id="site-search"
                name="q"
                v-model="searchString"
                ref="searchInput"
                placeholder="Buscar …"
                class="font-mono text-xs border-b border-gray-400 focus:border-rosso-500 focus:ring-0 focus:outline-none transition-colors duration-200 w-full mb-4 md:mb-0 pl-6 pb-1.5"
              />

              <Icon
                name="lucide:search"
                style="color: black"
                size="18"
                class="absolute top-3 left-0 -translate-y-1/2 text-gray-400 pointer-events-none"
              />

          </div>

        </div>

      <!-- pagination-->
      <div class="flex items-center justify-between gap-4 mb-16 z-5 md:sticky top-0 bg-white pb-3 ">
        <p class="font-mono text-xs text-gray-500">mostrando tratados de <span class="text-scuro-900 font-semibold">
          {{ (currentPage - 1) * maxOnPage + 1 }}
         </span> a <span class="text-scuro-900 font-semibold">
          {{ Math.min(currentPage * maxOnPage, filteredItems.length) }}
         </span> de <span class="text-scuro-900 font-semibold">{{ filteredItems.length }}</span>
        </p>
        
        <div class="font-mono">
          <ul class="inline-flex gap-1 text-xs">

            <li
              v-if="currentPage > 1"
              class="cursor-pointer px-1 py-1 rounded hover:bg-gray-200"
              @click="currentPage = currentPage - 1"
            ><Icon name="lucide:arrow-left" style="color: #333" size="16"/></li>

            <li
              v-for="page in totalPages"
              :key="page"
              class="cursor-pointer px-1 py-1 "
              :class="page === currentPage ? 'text-black  font-bold' : 'hover:bg-gray-200 font-normal text-gray-500'"
              @click="currentPage = page"
            >{{ page }}</li>

            <li
              v-if="currentPage < totalPages"
              class="cursor-pointer px-1 py-1 rounded hover:bg-gray-200"
              @click="currentPage = currentPage + 1"
            ><Icon name="lucide:arrow-right" style="color: #333" size="16" /></li>

          </ul>
          
        </div>
      </div>

      <!-- list view -->
     <section 
      class="mt-8 "
      v-if="showAs === 'list'"
     >
        <div
          v-for="item in pagedItems"
          :key="item.identifier"
          class="mb-6 pb-4 grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-12 items-start cursor-pointer group"
          @click="selectItem(item.identifier, item.shortTitle)"
        >
            <div>
              <img :src="`https://archive.org/services/img/${item.identifier}`" alt="item.shortTitle" class="pt-6 group-hover:scale-105 transition-transform duration-300">
            </div>

            <div>
              <p class="text-sm italic text-gray-500 ">
                {{ item.year }} - {{ item.author }}
              </p>
              <h2 
                class="text-xl/7 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"
                :class="selectedItem === item.identifier ? 'text-rosso-500' : ''"
              >{{ item.shortTitle }}</h2>
              <p class="pl-3 text-base/6 italic text-gray-600">{{ item.description }}</p>

              <p class="font-mono text-xs pl-3 pt-2 text-gray-500">
                <Icon name="lucide:cloud-download" style="color: #6b7280" size="14" class="inline-block mr-1 "/>
                {{ item.downloads}}</p>
            </div>
  
        </div>
     </section>

     <!-- grid view -->
      <section 
      class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 items-start "
      v-if="showAs === 'grid'"
     >
        <div
          v-for="item in pagedItems"
          :key="item.identifier"
          class="mb-4 cursor-pointer group"
          @click="selectItem(item.identifier, item.shortTitle)"
        >
            <div class="border-t border-gray-200 aspect-2/3 flex flex-col  justify-center mb-2">
              <img :src="`https://archive.org/services/img/${item.identifier}`" alt="item.shortTitle" class="p-3  w-full h-auto group-hover:scale-105 transition-transform duration-300">
            </div>  

            <div>
              <p class="text-xs italic text-gray-500 ">
                {{ item.year }} - {{ item.author }}
              </p>
              <h2 
                class="text-sm/5 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"
                :class="selectedItem === item.identifier ? 'text-rosso-500' : ''"
              >{{ item.shortTitle }}</h2>
            </div>
        </div>
     </section>

     <!-- compact view -->
      <section 
      class="mt-8 "
      v-if="showAs === 'compact'"
     >
        <div
          v-for="item in pagedItems"
          :key="item.identifier"
          class=" pb-4  cursor-pointer group"
          @click="selectItem(item.identifier, item.shortTitle)"
        >

            <p class="text-xs italic text-gray-500 ">
              {{ item.year }} - {{ item.author }}
            </p>
            <h2 
              class="text-sm/5 pl-2 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"
              :class="selectedItem === item.identifier ? 'text-rosso-500' : ''"
            >{{ item.shortTitle }}</h2>

        </div>
      </section>
      
      <globalFooter/>
     
    </div>

    <div></div>
    
  </div>


</template>

<script lang="ts" setup>
  // UI elements
  const isOpen = ref(false);
  const selectedItem = ref<string | undefined>(undefined);
  const selectedTitle = ref<string | undefined>(undefined);

  interface ArchiveFile {
    metadata: any[];
    files: any[];
  }

  const selectedPdfUrl = computed(() => {
    if (archiveMetadata.value && archiveMetadata.value.files) {
      const pdfFile = archiveMetadata.value.files.find((file: any) => file.format === 'Text PDF');
      return pdfFile ? `https://archive.org/download/${selectedItem.value}/${pdfFile.name}` : null;
    }
    return null;
  })

  const selectItem = (identifier:string, title:string) => {
    selectedItem.value = identifier;
    selectedTitle.value = title;
    isOpen.value = true;
  }

  // call metadata API when selected item change
  const { data: archiveMetadata } = useAsyncData<ArchiveFile | null>(
    'archive-metadata',
    () => selectedItem.value
      ? $fetch(`https://archive.org/metadata/${selectedItem.value}`)
      : Promise.resolve(null),
    { watch: [selectedItem] }
  );

  const togglePannel = () => {
    isOpen.value = !isOpen.value
    if (!isOpen.value) {
      selectedItem.value = undefined;
      selectedTitle.value = undefined;
    }
  }

  interface ArchiveDoc {
    identifier: string;
    title: string;
    shortTitle?: string;
    creator: string;
    date: string;
    description: string;
    downloads?: number;
    subject?: string[];
  }

  interface ArchiveResults {
    response?: {
      docs?: ArchiveDoc[];
    };
  }

  // all archive results
  const { data: archiveResults, error: archiveError } = await useAsyncData<ArchiveResults>('archive', () =>
    $fetch('https://archive.org/advancedsearch.php?q=uploader:*sedhc*&fl[]=uploader&rows=200&output=json')
  )

  // a computed function for processed archiveResults
  const archiveItems = computed(() => {
    if (archiveResults.value && archiveResults.value.response && archiveResults.value.response.docs) {
      return archiveResults.value.response.docs.map((doc: any) => {
        // Extract shortTitle: everything after the first dot (if present)
        let shortTitle = doc.title
        if (typeof shortTitle === 'string') {
          const dotIdx = shortTitle.indexOf('.')
          if (dotIdx !== -1) {
            shortTitle = shortTitle.slice(dotIdx + 1).trim()
          }
        }
        let description = doc.description
        if (typeof description === 'string') {
          description = description.replace(/\[Biblioteca digital SEdHC\]/gi, '').trim()
        }
        return {
          identifier: doc.identifier,
          title: doc.title,
          shortTitle,
          author: doc.creator,
          // year: new Date(doc.date).getFullYear(),
          year: doc.year || (new Date(doc.date).getFullYear() || 's.f.'),
          description,
          downloads: doc.downloads,
          subject: doc.subject,
          files: doc.files
        }
      })
    }
    return []
  }) // sort by year descending

  // page variables
  const maxOnPage = 20;
  const currentPage = ref(1);

  // filter archiveItems by subject and search query
  const filteredItems = computed(() => {

    let filterOutput = archiveItems.value;
    // apply subject filter here
    if (!selectedSubject.value) {
       // filterOutput = archiveItems.value
    } else {
       filterOutput = archiveItems.value.filter((item) => {
        if (item.subject) {
          if (Array.isArray(item.subject)) {
            return item.subject.includes(selectedSubject.value!)
          }
        }
        return false
      })
    }

    // apply search filter here
    if (searchString.value && searchString.value.trim() !== '' && searchString.value.length > 2) {
       filterOutput = filterOutput.filter((item) => {
        return item.title.toLowerCase().includes(searchString.value.toLowerCase())
      })
    }   

    // apply sort here
    if (sortBy.value === 'year') {
      filterOutput = [...filterOutput].sort((a, b) => {
        const yearA = a.year === 's.f.' ? 0 : a.year;
        const yearB = b.year === 's.f.' ? 0 : b.year;
        return sortOrder.value === 'asc' 
          ? yearA - yearB : yearB - yearA
      });
    } else if (sortBy.value === 'downloads') {
      filterOutput = [...filterOutput].sort((a, b) => {
        const downloadsA = a.downloads || 0;
        const downloadsB = b.downloads || 0;
        return sortOrder.value === 'asc' ? downloadsA - downloadsB : downloadsB - downloadsA;
      });
    }

    // apply paging here
    return filterOutput;
  });

  const pagedItems = computed(() => {
    const startIdx = (currentPage.value - 1) * maxOnPage;
    return filteredItems.value.slice(startIdx, startIdx + maxOnPage);
  });

  // total pages for pagination
  const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.value.length / maxOnPage)));

  // count items per subject
  const subjectCounts = computed(() => {
    const counts: Record<string, number> = {}
    archiveItems.value.forEach((item) => {
      if (item.subject) {
        if (Array.isArray(item.subject)) {
          item.subject.forEach((sub: string) => {
            counts[sub] = (counts[sub] || 0) + 1
          })
        }
      }
    })
    return counts
  })

  // set filter and sort options
  const topSubjects = computed(() => {
    const sortedSubjects = Object.entries(subjectCounts.value).sort((a, b) => b[1] - a[1])
    return sortedSubjects.filter(([sub, count]) => count >= archiveItems.value.length / 10)
  });

  const selectedSubject = ref<string | null>(null);
  const selectSubject = (subject: string) => {
    selectedSubject.value = subject === selectedSubject.value ? null : subject
  }

  const sortBy = ref<'year' | 'downloads'>('downloads');
  const sortOrder = ref<'asc' | 'desc'>('desc');
  const searchString = ref('');
  const showAs = ref<'list' | 'grid' | 'compact'>('list');

  watch(filteredItems, () => {
    currentPage.value = 1;
  });

  onMounted(() => {
    // console.log('Archive items:', archiveItems.value)
    // console.log('Top subjects:', topSubjects.value)
  })

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .hr-tailwind {
    @apply relative border-0 border-t-4 border-double border-neutral-800 text-neutral-800 text-center my-6  ;
  }

  hr.styled {
    overflow: visible; /* For IE */
    /*padding: 0;*/
    border: none;
    border-top: medium double #333;

    color: #333;
    /*text-align: center;*/
    @apply text-center my-6 p-0;
}

hr.styled:after {
    content: "§";
    display: inline-block;
    /*position: relative;*/
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;

    @apply relative
    /*background: white;*/
}

/*

after:content-['§'] after:inline-block after:relative after:-top-3 after:text-2xl after:px-1 after:bg-white after:text-neutral-800


.hr-tailwind:after {
  content: '§';
  @apply inline-block relative -top-3 text-2xl px-1 bg-white after:content-['§'];
}
  */

</style>
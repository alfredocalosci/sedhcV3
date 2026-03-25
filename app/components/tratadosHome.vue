<template>
  <div>
    <NuxtLink to="/tratados" class="w-full group">
     
    <div v-if="randomItems.length" class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 items-start">
      <div
        v-for="item in randomItems"
        :key="item.identifier"
       
      >
       
          <div class="aspect-2/3 flex flex-col justify-center mb-4">
            <div class="border-0 border-gray-200 shadow-md aspect-2/3 mt-6">
              <img
                :src="`https://archive.org/services/img/${item.identifier}`"
                :alt="item.shortTitle"
                class="p-5 w-full h-auto "
              />
            </div>
          </div>
          <p class="text-xs italic text-gray-500">{{ item.year }} - {{ item.author }}</p>
          <h2 class="text-sm/5 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300">
            {{ item.shortTitle }}
          </h2>
        
      </div>
       
    </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

  interface ArchiveResults {
    response?: {
      docs?: any[];
    };
  }

  const { data: archiveResults } = await useAsyncData<ArchiveResults>('archive-random', () =>
    $fetch('https://archive.org/advancedsearch.php?q=uploader:*sedhc*&fl[]=identifier&fl[]=title&fl[]=creator&fl[]=date&fl[]=description&fl[]=downloads&rows=24&page=1&output=json')
  );

  const allItems = computed(() => {
    if (archiveResults.value?.response?.docs) {
      return archiveResults.value.response.docs.map((doc: any) => {
        let shortTitle = doc.title;
        if (typeof shortTitle === 'string') {
          const dotIdx = shortTitle.indexOf('.');
          if (dotIdx !== -1) {
            shortTitle = shortTitle.slice(dotIdx + 1).trim();
          }
        }
        return {
          identifier: doc.identifier,
          title: doc.title,
          shortTitle,
          author: doc.creator,
          year: doc.date ? new Date(doc.date).getFullYear() : 's.f.',
          description: doc.description,
          downloads: doc.downloads,
        };
      });
    }
    return [];
  });

  const randomItems = ref<typeof allItems.value>([]);

  onMounted(() => {
    const shuffled = [...allItems.value].sort(() => Math.random() - 0.5);
    randomItems.value = shuffled.slice(0, 3);
  });

</script>
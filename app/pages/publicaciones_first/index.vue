<template>
  <div>
    <GlobalHeader/>

    <div class="container mx-auto mt-12 mb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_4fr]  gap-6 max-w-5xl">
      <aside class="">
        <p class="text-4xl ">publicaciones<span class="text-azzurro-500">:</span></p>

        <div class="border-b-4 border-double py-6 ">
          <div v-for="cat in categorias" :key="cat.id" class=" py-2">
            <p class="text-base font-semibold ">{{ cat.nombre }}</p>
            <p class="text-xs italic pl-2 text-gray-700">{{ cat.desc }}</p>
          </div>
        </div>
      </aside>

      <div></div>

      <article class=" ">
        <div v-for="item in archiveItems.sort((a:number, b:number) => b.year - a.year)" :key="item.identifier" class="mb-6   pb-4">
          <p class="text-sm italic text-gray-500">
            {{ item.year }} - {{ item.author }}
          </p>
          <h2 class="text-xl/7 my-3 text-gray-900">{{ item.shortTitle }}</h2>
          <p class="pl-3 text-base/6 italic text-gray-600">{{ item.description }}</p>

        </div>
      </article>

    </div>
    
    <GlobalFooter/>
  </div>
</template>

<script lang="ts" setup>
  // all archive results
const { data: archiveResults, error: archiveError } = await useAsyncData<ArchiveResults>('publications', () =>
  $fetch('https://archive.org/advancedsearch.php?q=Textos+sobre+Teoría+e+Historia+de+las+Construcciones&fl[]=uploader&rows=200&output=json')
)

  interface ArchiveDoc {
    identifier: string;
    title: string;
    creator: string;
    date: string;
    description: string;
    downloads?: number;
    subject?: string[];
    year?: number;
  }
  interface ArchiveResults {
    response?: {
      docs?: ArchiveDoc[];
    };
  }

  // a computed function for processed archiveResults
  const archiveItems = computed(() => {
    if (archiveResults.value && archiveResults.value.response && archiveResults.value.response.docs) {
      return archiveResults.value.response.docs.map((doc: ArchiveDoc) => {
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
          description = description.replace(/\[Textos sobre Teoría e Historia de las Construcciones\]/gi, '').trim()
        }
        return {
          identifier: doc.identifier,
          title: doc.title,
          shortTitle,
          author: doc.creator,
          year: new Date(doc.date).getFullYear(),
          description,
          downloads: doc.downloads,
          subject: doc.subject,
        }
      })
    }
    return []
  }) // sort by year descending

  // get unique subject items from archiveItems
  const archiveSubjects = computed(() => {
    const subjectsSet = new Set<string>()
    archiveItems.value.forEach((item: any) => {
      if (item.subject) {
        if (Array.isArray(item.subject)) {
          item.subject.forEach((sub: string) => subjectsSet.add(sub))
        }
      }
    })
    return Array.from(subjectsSet)
  })

  // count items per subject
  const subjectCounts = computed(() => {
    const counts: Record<string, number> = {}
    archiveItems.value.forEach((item:any) => {
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

  const topSubjects = computed(() => {
    const sortedSubjects = Object.entries(subjectCounts.value).sort((a, b) => b[1] - a[1])
    return sortedSubjects.filter(([sub, count]) => count >= archiveItems.value.length / 10)
  })

  onMounted(() => {
    // console.log(archiveResults.value.response.docs)
    // console.log(archiveError.value)
    console.log(archiveItems.value)
    console.log(archiveSubjects.value)
    console.log(subjectCounts.value)
    console.log(topSubjects.value)
  })
</script>

<style>

</style>
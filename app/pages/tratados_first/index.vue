<template>
  <div>
    <GlobalHeader/>

    <div class="container mx-auto  mb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_4fr]  gap-6 max-w-5xl">
      <aside class="mt-18">
        <p class="text-4xl ">tratados<span class="text-rosso-500">:</span></p>

        <div class="border-t-4 border-double border-gray-300  py-6 mt-4">

          <div v-for="sub in topSubjects" :key="sub[0]" class="border-b border-dashed border-gray-300 py-2 flex justify-between">
            <p class="text-base font-semibold text-azzurro-500">{{ sub[0] }}</p>
            <p class="text-xs italic text-gray-600 pt-1">{{ sub[1] }}</p>
          </div>

          
        </div>

        <p class="italic">Total count: {{ archiveItems.length }}</p>
      </aside>

      <div></div>

      <article class="mt-18">

        <div class="mb-12 flex items-center justify-between gap-8 border-b border-dashed border-gray-400 pb-6">

          <div class="flex gap-1 items-center"  >
            <p class="text-xs/3 font-mono text-gray-500 pr-2 ">ordenar por:</p>
            <Icon name="lucide:calendar" style="color: black" size="24"/>
            <Icon name="lucide:bookmark" style="color: black" size="24"/>
             <Icon name="lucide:arrow-down-up" style="color: black" size="16" class="ml-1"/>
          </div>

         <div class="flex items-center gap-1"  >
            <p class="text-xs/3 font-mono pr-2  text-gray-500">mostrar como:</p>
            <Icon name="lucide:grid-3x3" style="color: black" size="24"/>
            <Icon name="lucide:layout-list" style="color: black" size="24"/>
         </div>

          <UInput trailing-icon="i-lucide-search" size="sm" variant="subtle" placeholder="Buscar..." class="font-mono" color="primary"/>

        </div>


        <div v-for="item in archiveItems.sort((a, b) => a.year - b.year)" :key="item.identifier" class="mb-6   pb-4">
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
  const { data: archiveResults, error: archiveError } = await useAsyncData('archive', () =>
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
    archiveItems.value.forEach((item) => {
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
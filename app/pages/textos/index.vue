<template>
  <div class="sedhc_grid">

    <aside class="w-full h-full bg-mist-500 flex flex-col pb-8">
      <NuxtLink to="/" class="w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">
        <p class="text-sm/5 pt-2">Sociedad Española de Historia de la Construcción</p>
      </NuxtLink>
    </aside>

    <div class="main_content bg-white min-h-screen">
     
      <h2 class="text-4xl font-bold mb-4 mt-3">textos</h2>

      <div v-for="(items, webpage) in grouped" :key="webpage" class="mt-9 border-t border-dashed pt-4 mb-6">
        <h3 class="font-mono uppercase text-xs text-gray-400 mb-3">{{ webpage }}</h3>
        <NuxtLink
          v-for="t in items"
          :key="t.path"
          :to="t.path"
          class="mb-1 block hover:text-rosso-500 transition-colors duration-300"
        >
          {{ t.section }}
        </NuxtLink>
      </div>

      <GlobalHeaderAlt/>
      <GlobalFooter/>
    </div>

    <div></div>

  </div>
</template>

<script lang="ts" setup>
  const { data: textos } = await useAsyncData('textos_list', () =>
    queryCollection('textos').order('webpage', 'ASC').all()
  )

  const grouped = computed(() => {
    const groups: Record<string, NonNullable<typeof textos.value>> = {}
    for (const t of textos.value ?? []) {
      if (!groups[t.webpage]) groups[t.webpage] = []
      groups[t.webpage]!.push(t)
    }
    return groups
  })
</script>

<style>
</style>

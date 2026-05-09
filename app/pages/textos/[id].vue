<template>
  <div class="sedhc_grid">

    <aside class="w-full h-full bg-mist-500 flex flex-col pb-8">
      <NuxtLink to="/" class="w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">
        <p class="text-sm/5 pt-2">Sociedad Española de Historia de la Construcción</p>
      </NuxtLink>
    </aside>

    <div class="main_content bg-white">

      <!-- breadcrumbs -->
      <div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3">
        <p class="font-mono uppercase text-[10px] text-azzurro-500">
          <NuxtLink to="/" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">inicio</NuxtLink> /
          <NuxtLink to="/textos" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">textos</NuxtLink> /
        </p>
      </div>

      <!-- meta -->
      <div v-if="texto" class="flex gap-3 mb-6">
        <span class="font-mono uppercase text-xs text-white bg-mist-600 px-2 py-1">{{ texto.webpage }}</span>
        <span class="font-mono uppercase text-xs text-mist-600 border border-mist-600 px-2 py-1">{{ texto.section }}</span>
      </div>

      <!-- content -->
      <article v-if="texto" class="md:ml-4 mb-12">
        <ContentRenderer :value="texto" class="mdtxt"/>
      </article>

      <!-- index nav -->
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
  const route = useRoute()

  const { data: texto } = await useAsyncData(route.path, () =>
    queryCollection('textos').where('path', '=', route.path).first()
  )

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

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .mdtxt :deep(p), .mdtxt :deep(li), .mdtxt :deep(blockquote p) {
    @apply text-sm md:text-base/6;
  }

  .mdtxt :deep(p) {
    @apply md:-indent-3;
  }

  .mdtxt :deep(blockquote) {
    @apply md:-ml-6;
  }

  .mdtxt :deep(blockquote p) {
    @apply md:indent-0 md:pl-9 md:text-2xl/8 md:my-9;
  }

  .mdtxt :deep(a) {
    @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
  }
</style>

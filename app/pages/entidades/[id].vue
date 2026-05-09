<template>
  <div class="sedhc_grid">

    <aside class="w-full h-full bg-mist-500 flex flex-col pb-8">
      <NuxtLink to="/" class="w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">
        <p class="text-sm/5 pt-2">Sociedad Española de Historia de la Construcción</p>
      </NuxtLink>

      <div v-if="entidad?.image">
        <img
          :src="entidad.image.src"
          :alt="entidad.image.alt"
          class="mx-auto max-w-5/6 mt-12 shadow-lg/40 mb-12"
        />
      </div>
    </aside>

    <div class="main_content bg-white">
     

      <!-- breadcrumbs -->
      <div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3">
        <p class="font-mono uppercase text-[10px] text-azzurro-500">
          <NuxtLink to="/" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">inicio</NuxtLink> /
          <NuxtLink to="/entidades" class="text-gray-700 hover:text-azzurro-500 transition-colors duration-300">entidades</NuxtLink> /
        </p>
      </div>

      <!-- head -->
      <div v-if="entidad" class="mt-6 pb-2">
        <h2 class="text-lg/6 md:text-4xl/10 my-6 text-gray-900 mr-6">{{ entidad.title }}</h2>
        <p v-if="entidad.acronym" class="font-mono uppercase text-xs text-mist-600 mb-4">{{ entidad.acronym }}</p>
      </div>

      <!-- content -->
      <article v-if="entidad" class="md:ml-9 mb-12">
        <ContentRenderer :value="entidad" class="mdtxt"/>
      </article>

      <!-- external link -->
      <div v-if="entidad?.url" class="pt-6 mb-12 border-t border-dashed">
        <p class="font-mono text-xs pb-0 text-gray-600">más información en:</p>
        <a :href="entidad.url" target="_blank" class="text-gray-700 decoration-cyan-500 underline underline-offset-6 text-sm pl-2">
          {{ shortenUrl(entidad.url, 50) }}
        </a>
      </div>

      <!-- index nav -->
      <div class="mt-9 border-t border-dashed pt-6 mb-12">
        <NuxtLink
          v-for="e in entidades"
          :key="e.acronym"
          :to="e.path"
          class="mb-1 block hover:text-rosso-500 transition-colors duration-300"
        >
          <h3>{{ e.title }}</h3>
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

  const { data: entidad } = await useAsyncData(route.path, () =>
    queryCollection('entidades').where('path', '=', route.path).first()
  )

  const { data: entidades } = await useAsyncData('entidades_list', () =>
    queryCollection('entidades').order('rank', 'ASC').all()
  )
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

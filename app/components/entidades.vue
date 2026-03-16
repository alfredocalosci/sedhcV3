<template>
  <div>
    <!-- block separator: otras sociedades -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">otras sociedades</p>
      </div>

      <div class=" mt-6 text-sm">
        <div 
          v-for="entidad in entidades"
          :key="entidad.acronym"
          class="grid md:grid-cols-[1fr_4fr] gap-12 mb-12"
        >
            <img
              :src="`${config.public.siteUrl}${entidad.image?.src}`"
              :alt="entidad.image?.alt"
              class="w-full h-auto"
            />

            <div>
              <h3 class="font-bold text-xl/6 pb-4 -ml-3">{{ entidad.title }}</h3>
              <ContentRenderer v-if="entidad" :value="entidad" class="md_entidad" />
              
              <p class="font-mono text-xs pt-2">
                <a :href="entidad.url" target="_blank" class="flex items-center hover:text-rosso-500 transition-colors duration-300" rel="noopener noreferrer">
                  <Icon 
                    name="lucide:link"
                    class="size-4 inline-block mr-3 text-gray-400"
                  />
                  {{ shortenUrl(entidad.url, 50) }}
                </a>
              </p>
            </div>
        </div>
      </div>
    
  </div>
</template>

<script lang="ts" setup>
  const { data: entidades } = await useAsyncData('entidades_list', () => {
    return queryCollection('entidades')
      .order('rank', 'ASC')
      .all()
  });

  const config = useRuntimeConfig()

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .md_entidad {
    @apply pt-0;
  }

  .md_entidad :deep(a) {
    @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
  }

  .md_entidad :deep(p){
    @apply leading-6 my-0 mb-2 text-gray-600;
  }
  

</style>
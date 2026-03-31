<template>
  <div>
    <!-- block separator: otras sociedades -->
      <div class="border-b border-dashed flex items-center justify-between mt-12">
        <p class=" font-mono uppercase text-sm  font-semibold pb-1">otras sociedades</p>
      </div>

      <div class=" mt-6 ">

        <!-- grid settings: grid md:grid-cols-[4fr_1fr] gap-12 mb-12 -->
        <div 
          v-for="entidad in entidades"
          :key="entidad.acronym"
          class="flex flex-col gap-2 mb-12 border-b border-gray-200 pb-4"
        >
           <img
              :src="`${entidad.image?.src}`"
              :alt="entidad.image?.alt"
              class="w-3/4 lg:w-1/4 h-auto mb-4"
            />
           
            <div class="ml-3">
              <h3 class="font-bold text-xl/6 pb-4 lg:-ml-3">{{ entidad.title }}</h3>
              <ContentRenderer v-if="entidad" :value="entidad" class="md_entidad " />
              
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
    @apply text-sm/5 my-0 mb-2 text-gray-600;
  }
  

</style>
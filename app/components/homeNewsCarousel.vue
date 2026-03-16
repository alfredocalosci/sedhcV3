<script setup lang="ts">

// embla carousel
import useEmblaCarousel from 'embla-carousel-vue'
import type { EmblaCarouselType } from 'embla-carousel'

const config = useRuntimeConfig()

// const [emblaRef] = useEmblaCarousel()
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

const scrollSnaps = ref<number[]>([])
const setupSnaps = (emblaApi: EmblaCarouselType) => (scrollSnaps.value = emblaApi.scrollSnapList())

const goToPrev = () => emblaApi.value?.scrollPrev()
const goToNext = () => emblaApi.value?.scrollNext()
const goTo = (index: number) => emblaApi.value?.scrollTo(index)

const selectedIndex = ref(0)

watch(
  emblaApi,
  (api) => {
    if (!api) return

    setupSnaps(api)
    selectedIndex.value = api.selectedScrollSnap()
    api.on('reInit', setupSnaps)
    api.on('select', () => {
      selectedIndex.value = api.selectedScrollSnap()
    })
  },
  { immediate: true }
)

// data management

 const { data: noticias } = await useAsyncData('noticias_home', () => {
    return queryCollection('noticias')
      .select('path', 'title', 'slug', 'description', 'date', 'image')
      .where('featured', '=', true)
      .order('date', 'DESC')
      .limit(3)
      .all()
  });

  onMounted(() => {
   // console.log('noticias home', noticias.value);
  });
</script>

<template>
  <div class="embla mb-4 mt-6">
    <div ref="emblaRef" class="embla__viewport" >

      <div class="embla__container">
        <div v-for="(noticia, index) in noticias" :key="index" class="embla__slide">

          <div class="w-full h-full grid md:grid-cols-[1fr_5fr] gap-8">

            <!-- Placeholder for image -->
            <div class="mt-0 ">  
              <img :src="`${config.public.siteUrl}${noticia.image?.src}`" alt="Imagen de noticia" class="w-full h-auto ">
            </div>

            <!-- title and text --> 
            <div class="h-full flex flex-col justify-between">
              <div>
                <p class="text-xs text-gray-500 mb-1 italic">{{ formatSpanishDate(noticia.date) }}</p>
                <h3 class="text-base/5 font-bold mb-2">{{ noticia.title }}</h3>
                <p class="text-xs text-gray-600 ml-3">{{ noticia.description }}</p>
              </div>

              <NuxtLink :to="`/noticias/${noticia.slug}`" class="mt-4 inline-flex justify-end items-center text-rosso-500 hover:underline font-mono text-xs uppercase">
                Leer más
                <UIcon name="lucide:arrow-right" class="size-4 ml-1" />
              </NuxtLink>
            </div>

          </div>
        </div>
        
      </div>
    </div>

    <!-- Optional: Add navigation controls here -->
    <div class="flex justify-between mt-4 border-t border-dashed pt-2 ">
      <div class="embla__buttons mt-0.5">
        <button class="embla__prev mr-2 cursor-pointer" @click="goToPrev">
          <UIcon name="lucide:arrow-left" class="size-6" />
        </button>
        <button class="embla__next cursor-pointer" @click="goToNext">
          <UIcon name="lucide:arrow-right" class="size-6" />
        </button>
      </div>

      <!-- dots -->
      <div class="embla__dots">
        <button
          class="embla__dot cursor-pointer"
          :class="index === selectedIndex ? 'active' : ''"
          :key="index"
          v-for="(_, index) in scrollSnaps"
          @click="goTo(index)"
        >
         <!--<UIcon :name="index === selectedIndex ? 'lucide:disc' : 'lucide:circle'" class="size-5" />--> 
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
 @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .embla__dot{
    @apply w-4 h-4 rounded-full border-3 mr-1 border-gray-300 hover:border-rosso-500 transition-colors duration-300;
  }

  .embla__dot.active {
    @apply border-gray-900;
  }
</style>
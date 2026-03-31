<template>
  <div class="sedhc_grid">
    
    <div class="bg-chiaro-50 ">

      <!-- logo-->
      <aside class=" bg-amber-400 hover:bg-chiaro-50 transition-colors duration-300 border-b border-white ">

        <NuxtLink to="/" class="w-full hover:bg-chiaro-50 transition-colors duration-300 text-black flex items-center gap-5 py-8 pl-6 pr-5  border-b border-white">
          <img src="/img/sedhc_logo_ilustracion.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-multiply bg-white">

          <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
        </NuxtLink>

      </aside>

      <article class="mt-10 px-10  text-xs italic quote pb-8">
        <p>Los hombres … teniendo por naturaleza, a diferencia de los otros animales, el no caminar inclinados a la tierra, sino rectos y elevados para ver la magnificencia del cielo y astros; como también, hallándose aptos con sus manos y articulaciones para tratar fácilmente cuanto querían, empezaron unos a disponer sus techados de ramas.
          </p>

      <p>Otros a cavar cuevas a la raíz de los montes. Algunos imitando los nidos de las golondrinas y su estructura, con barro y lodo hicieron donde guarecerse.</p>

      <p>Otros finalmente, que observaban estos abrigos, adelantando un poco mas sus invenciones, iban de día en día erigiendo menos mal arregladas chozas: así, que siendo aquellos hombres de imitadora y dócil naturaleza, gloriándose cada día de sus invenciones, se enseñaban unos a otros las nuevas formas de las casas que levantaban; y ejercitándose los ingenios en estas emulaciones, las iban de grado en grado mejorando de gusto.</p>

    <p class="mt-6 pl-4">Vitruvio II, I,<br/>“Del principio de los edificios”<br/>
      (Texto: Ortiz y Sanz 1787)</p>
    
      </article>

    </div>

    <div class="main_content">
      <GlobalHeaderAlt/>
      

      <nav class="hidden md:block mb-16 z-5 md:sticky top-0 bg-white pb-3 pt-2 ">
        <ul class="flex items-center justify-end gap-3 font-mono uppercase text-xs text-gray-500">
          <li :class="{ 'text-black font-bold': activeSection === 'finalidades' }">
            <a href="#finalidades">finalidades</a>
          </li>
          <li :class="{ 'text-black  font-bold': activeSection === 'junta_directiva' }">
            <a href="#junta_directiva">junta directiva</a>
          </li>
          <li :class="{ 'text-black  font-bold': activeSection === 'miembros' }">
            <a href="#miembros">miembros</a>
          </li>
          <li :class="{ 'text-black  font-bold': activeSection === 'estatutos' }">
            <a href="#estatutos">estatutos</a>
          </li>
          <li :class="{ 'text-black  font-bold': activeSection === 'entidades' }">
            <a href="#entidades">otras sociedades</a>
          </li>
        </ul>
      </nav>

      <section id="finalidades" class="mt-32 mb-16 step">
        <ContentRenderer v-if="introText" :value="introText" class="mdtxt mdtxt_intro mt-8" />

         <img src="/img/ilustraciones/eswn.png" alt="eswn" class="my-6">
      </section>

      <section id="junta_directiva" class="step mb-16">
        <div class="border-b border-dashed flex items-center justify-between mt-12">
          <p class=" font-mono uppercase text-sm  font-semibold pb-1">junta directiva</p>
        </div>

        <div class="colums-1 md:columns-2 gap-x-8 mt-6">
          <ContentRenderer v-if="cargosText" :value="cargosText" class="mdtxt mdtxt_two_c mdtxt_lista " />
        </div>

      </section>

      <section id="miembros" class="step mb-16">
        <div class="border-b border-dashed flex items-center justify-between mt-12">
          <p class=" font-mono uppercase text-sm font-semibold pb-1">miembros</p>
        </div>
        <ContentRenderer v-if="miembrosText" :value="miembrosText" class="mdtxt mdtxt_sociedad mt-4" />
      </section>

      <section id="estatutos" class="step mb-16">
        <div class="border-b border-dashed flex items-center justify-between mt-12">
          <p class=" font-mono uppercase text-sm  font-semibold pb-1">estatutos</p>
        </div>
        <ContentRenderer v-if="estatutosText" :value="estatutosText" class="mdtxt mdtxt_sociedad mt-4" />
      </section>

      <section id="entidades" class="step">
        <entidades/>
      </section>

      <GlobalFooter/>

    </div>

    <div></div>


    
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const { data: textos } = await useAsyncData('textos_sociedad', () => {
  return queryCollection('textos')
    .where('webpage', '=', 'sociedad')
    .all()
});

const introText = computed(() => textos.value?.find(t => t.section === 'intro'));
const cargosText = computed(() => textos.value?.find(t => t.section === 'cargos'));
const miembrosText = computed(() => textos.value?.find(t => t.section === 'miembros'));
const estatutosText = computed(() => textos.value?.find(t => t.section === 'estatutos'));

const activeSection = ref('finalidades');

const sectionIds = ['finalidades', 'junta_directiva', 'miembros', 'estatutos', 'entidades'];
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  observer = new window.IntersectionObserver(
    (entries) => {
      // Find the section most in view
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        // Sort by topmost (closest to top)
        visible.sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top));
        const topSection = visible[0];
        if (topSection && topSection.target && (topSection.target as HTMLElement).id) {
          activeSection.value = (topSection.target as HTMLElement).id;
        }
      } else {
        // fallback: if none visible, keep previous
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -60% 0px', // triggers when section top is 40% from top
      threshold: 0.1,
    }
  );
  sections.forEach(section => observer!.observe(section));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .step {
    @apply scroll-mt-24;
  }

  .quote p{
    @apply mb-2 text-gray-600
  }

  .mdtxt_sociedad :deep(p) {
    @apply  -indent-3 ml-3 text-pretty text-sm/5 lg:text-base/6;
  }

  .mdtxt_sociedad :deep(h6) {
    @apply  font-bold  mb-0 text-gray-900 p-0;
  }

   .mdtxt_sociedad :deep(h6 em) {
    @apply   text-gray-500 ml-4;
  }

  .mdtxt :deep(a) {
    @apply text-gray-700 decoration-cyan-500 underline underline-offset-6;
  }

  .mdtxt_intro :deep(p) {
    @apply ml-3 -indent-3 mt-6 text-lg/6 lg:text-lg/7;
  }

  .mdtxt_intro :deep(p:first-of-type) {
    @apply first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-yellow-500 mt-6 ml-3 first-letter:-ml-3;
  }

  .mdtxt_lista :deep(h5) {
    @apply font-bold text-sm/5 mb-0 text-gray-900 p-0;
  }

  .mdtxt_lista :deep(ul) {
    @apply m-0 text-sm/5 text-gray-800 mb-5 p-0;
  }

  .mdtxt_lista :deep(ul li) {
    @apply list-none text-gray-800 m-0 pl-2;
  }

  .mdtxt_two_c :deep(ul li) {
    @apply leading-5;
  }

  .mdtxt_two_c :deep(p) {
    @apply text-sm/6 mb-6;
  }

  .mdtxt_two_c :deep(hr) {
    @apply border-0 break-after-column my-0;
  }

  /* break-inside-avoid-column */
  .mdtxt_two_c :deep(h5 + ul), .mdtxt_two_c :deep(h5) {
    @apply  break-inside-avoid-column;
  }

  .mdtwocol :deep(br) {
    @apply break-after-column;
  }

</style>
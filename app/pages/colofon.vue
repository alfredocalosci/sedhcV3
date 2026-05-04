<template>
    <div class="sedhc_grid">

      <aside class="w-full h-full bg-verdechiaro-500  flex flex-col  pb-8">

        <NuxtLink to="/" class="w-full  bg-verde-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
          <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

          <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
          
        </NuxtLink>

        <article class="px-8 mt-2 lg:mt-12 italic text-gray-100">
        
        </article>

    </aside>

     <div class="main_content bg-white min-h-screen ">

      <h2 class="text-4xl font-bold mb-4 mt-3 ">colofón<span class="text-verdechiaro-500">:</span></h2>
      
      
      <div class=" mt-12 colofon mr-24 mb-24">
        <p>Este <em>sitio web</em> ha sido renovado en <strong>Abril de 2026</strong> en ocasión del XIV Congreso Nacional de Historia de la Construcción - celebrado en Cartagena.</p>

        <p>En su versión actual, los <em>Tratados de Historia de la Arquitectura</em>, las <em>Actas de Congresos</em> y los Libros de la colección de <em>Textos sobre Teoría e Historia de las Construcciones</em>, se publican a través de la plataforma <a href="https://archive.org" target="_blank" rel="noopener noreferrer">archive.org</a>.</p>

        <a href="https://archive.org" target="_blank" rel="noopener noreferrer" class="w-full flex justify-start">
          <img src="/img/internet_archive.png" alt="internet archive" class="mt-2 h-24 w-auto">
        </a>


        <hr/>

        <p>Se han utilizado las <em>fuentes tipográficas</em> de código abierto <strong>Libre Baskerville</strong>, diseñada por Impallari Type, e <span class="font-mono">Inconsolata</span>, creada por Raph Levien. Ambas fuentes están disponibles bajo licencias abiertas.</p>

        <hr/>

        <p>Este sitio web ha sido desarrollado con <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> (versión 4), un framework de <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a> que permite la generación de sitios estáticos.</p>
        <p>La gestión de contenidos se realiza mediante <a href="https://content.nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt Content</a>, un CMS basado en archivos Markdown con validación de esquemas a través de <a href="https://zod.dev" target="_blank" rel="noopener noreferrer">Zod</a>.</p>
        <p>El diseño visual utiliza <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> y el módulo <a href="https://ui.nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt UI</a>. Las visualizaciones cartográficas incorporan las bibliotecas <a href="https://d3js.org" target="_blank" rel="noopener noreferrer">D3-geo</a>. El sitio se publica como un sitio estático alojado en <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>

        

   
      </div>

      <div class="mb-6">
        <hr class="border-gray-700"/>

        <div class="flex justify-between items-center">
<p class="text-sm italic mt-4">Diseño y realización: <a href="https://studio.negot.net" target="_blank" rel="noopener noreferrer">studio.negot.net</a></p>

         <a href="https://studio.negot.net" target="_blank" rel="noopener noreferrer" >
            <img src="/img/negot_footer.png" alt="studio.negot.net" class="mt-4 ">
          </a>
        </div>
        
      </div>

      <globalFooter/>

    </div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@reference "tailwindcss";
  @reference "~/assets/css/main.css";

.colofon p{
 @apply mb-3 -indent-2 ml-2 text-lg/7;
}

.colofon p a{
  @apply text-gray-900 decoration-cyan-500 underline underline-offset-4;
}

.colofon hr{
  @apply border-gray-300 mb-8 mt-16 border-dashed;
}

</style>
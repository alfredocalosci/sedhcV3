<template>
  <div class="grid grid-cols-[300px_720px_1fr]">
    
    <div class="bg-chiaro-50 ">
      <!-- logo-->
      <aside class=" py-6 px-8 aspect-square  text-2xl hover:bg-neutro-500 transition-colors duration-300 border-b border-white">
        <NuxtLink to="/" class="h-full w-full block ">
          <img src="/img/sedhc_logo_ilustracion.png" alt="sedhc" class="h-30 w-auto mt-2 mix-blend-multiply bg-white">
          <p class="pt-4">Sociedad Española de Historia de la Construcción<span class="text-giallo-500 font-bold">.</span></p>
        </NuxtLink>
      </aside>

      <article class=" py-8 px-10 text-xs italic quote">
        <p>Los hombres … teniendo por naturaleza, a diferencia de los otros animales, el no caminar inclinados a la tierra, sino rectos y elevados para ver la magnificencia del cielo y astros; como también, hallándose aptos con sus manos y articulaciones para tratar fácilmente cuanto querían, empezaron unos a disponer sus techados de ramas.
          </p>

      <p>Otros a cavar cuevas a la raíz de los montes. Algunos imitando los nidos de las golondrinas y su estructura, con barro y lodo hicieron donde guarecerse.</p>

      <p>Otros finalmente, que observaban estos abrigos, adelantando un poco mas sus invenciones, iban de día en día erigiendo menos mal arregladas chozas: así, que siendo aquellos hombres de imitadora y dócil naturaleza, gloriándose cada día de sus invenciones, se enseñaban unos a otros las nuevas formas de las casas que levantaban; y ejercitándose los ingenios en estas emulaciones, las iban de grado en grado mejorando de gusto.</p>

    <p class="mt-6 pl-4">Vitruvio II, I,<br/>“Del principio de los edificios”<br/>
      (Texto: Ortiz y Sanz 1787)</p>
    
  </article>

    </div>

    <div class="p-12 px-18 min-h-screen bg-white shadow-2xl">
      <GlobalHeaderAlt/>

      <div class="pt-36 mb-12">
      <p class="first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-yellow-500 mt-6 ml-3 first-letter:-ml-6 ">Aquí contamos la sociedad: ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum vehicula nulla, vel rhoncus nisi porttitor et. Integer eget pharetra erat, id aliquet est. Praesent sed odio gravida, dignissim mi sit amet, vehicula neque. Mauris sollicitudin, risus ac imperdiet tempor, ligula enim ultricies odio, et lobortis lectus tellus sed orci.</p>

      <p class="ml-3 -indent-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum vehicula nulla, vel rhoncus nisi porttitor et. Integer eget pharetra erat, id aliquet est. Praesent sed odio gravida, dignissim mi sit amet, vehicula neque. Mauris sollicitudin, risus ac imperdiet tempor, ligula enim ultricies odio, et lobortis lectus tellus sed orci. </p>
        
        <p class="ml-3 -indent-3 mt-3">Nunc eget augue non odio luctus elementum. In magna neque, semper convallis lectus sed, malesuada venenatis enim. Aenean quis mattis leo. Curabitur scelerisque eros ut sem pellentesque semper. Aenean et scelerisque velit, varius semper massa. Aenean vitae elementum turpis. Morbi vestibulum nisl rhoncus ligula posuere bibendum eu nec ligula. Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
      </div>

      

    </div>

    <div></div>


    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  .quote p{
    @apply mb-2 text-gray-600
  }
</style>
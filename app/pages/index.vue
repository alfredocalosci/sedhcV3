<template>
  <div class="grid grid-cols-[300px_720px_1fr] ">
    
    <div class="bg-chiaro-50 flex flex-col ">
       <aside class="py-6 px-8 aspect-square  text-2xl transition-colors duration-300 border-b border-white">

        <NuxtLink to="/" class="h-full w-full block">
            <img src="/img/sedhc_logo_ilustracion.png" alt="sedhc" class="h-30 w-auto mt-2 mix-blend-multiply bg-white">

          <p class="pt-4">Sociedad Española de Historia de la Construcción<span class="text-giallo-500 font-bold">.</span></p>
         
        </NuxtLink>
      </aside>

      <section class="p-8 text-sm text-gray-600">
        <p>La Sociedad se propone facilitar los contactos entre las personas que se interesen por este ámbito del conocimiento en España, tanto desde el punto de vista académico como profesional, o, simplemente como resultado de un interés personal.</p>
      </section>

    </div>

   
    <!-- main content -->
    <div class="p-12 px-18 bg-white shadow-2xl">
      <GlobalHeaderAlt/>

      <!-- news carousel -->
      <div class="bg-gray-50 mt-4 p-4">
        <div class="pseudo_slide w-10/12 mx-auto flex gap-6 ">

          <div class="aspect-square bg-gray-100">
            <img src="/img//noticias/24649.jpg" alt="noticia" class=" w-full h-auto">
          </div>

          <div>
            <p class="text-xs italic pb-2">14 de marzo de 2024</p>
              <p class="text-xs font-bold">V Congreso Internacional Hispano-Americano y XIII Congreso Nacional de Historia de la Construcción</p>
          </div>

          <div>
            <p class="text-xs italic">Este miércoles 20 de marzo se da inicio a nuestro congreso internacional y nacional en la ciudad de Santo Domingo</p>
          </div>
        </div>
      </div>

      <img src="/img/ilustraciones/gotico.jpg" alt="Gótico" class="pt-2">

      <p class="first-letter:float-left first-letter:mr-5 first-letter:text-7xl first-letter:uppercase first-letter:font-bold first-letter:text-rosso-500 mt-6 ml-3 first-letter:-ml-6 ">Abate ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum vehicula nulla, vel rhoncus nisi porttitor et. Integer eget pharetra erat, id aliquet est. Praesent sed odio gravida, dignissim mi sit amet, vehicula neque. Mauris sollicitudin, risus ac imperdiet tempor, ligula enim ultricies odio, et lobortis lectus tellus sed orci.</p>
        
      <p class="ml-3 -indent-3 mt-3">Nunc eget augue non odio luctus elementum. In magna neque, semper convallis lectus sed, malesuada venenatis enim. Aenean quis mattis leo. Curabitur scelerisque eros ut sem pellentesque semper. Aenean et scelerisque velit, varius semper massa. Aenean vitae elementum turpis. Morbi vestibulum nisl rhoncus ligula posuere bibendum eu nec ligula. Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>

      <div class="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div><p>Morbi vestibulum nisl rhoncus ligula posuere bibendum eu nec ligula. Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit.</p></div>
        <div>
          <p>Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
        </div>

      </div>

      <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 ">Noticias</p>

      <div class="grid grid-cols-3 gap-4 mt-4 text-xs">
        <div>
          <p >Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
        </div>
        <div><p>Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p></div>
        <div><p>Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p></div>
      </div>

       <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1">la revista y las publicaciones</p>
       <div class="grid grid-cols-3 gap-4 mt-6 text-sm">
        <div class="bg-gray-100 aspect-square">
          
        </div>
        <div class="md:col-span-2">
          <p class="mb-2">Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
         <p>Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
        </div>

      </div>

      <p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1">biblioteca digital: tratados</p>

      <div class="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div><p>Morbi vestibulum nisl rhoncus ligula posuere bibendum eu nec ligula. Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit.</p></div>
        <div>
          <p>Etiam auctor tincidunt massa aliquet mattis. Phasellus nec risus quis mauris lobortis sollicitudin a a elit. Vestibulum ut vehicula erat, quis elementum urna.</p>
        </div>

      </div>

      <globalFooter/>
    </div>

    <!-- sidebar -->
    <div></div>

    
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
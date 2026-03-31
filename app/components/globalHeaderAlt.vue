<template>
  <header class="border-b border-gray-300 pb-0.5 max-w-5xl">
      <nav class="border-b-2 border-gray-400 pb-4 ">
        
        <ul class="flex flex-col md:flex-row space-x-3 space-y-2 md:space-y-0 font-mono uppercase justify-end text-xs font-light">
         
          <li><NuxtLink to="/noticias">Noticias</NuxtLink></li>
          <li><NuxtLink to="/revista">Revista</NuxtLink></li>
          <li><NuxtLink to="/congresos">Congresos</NuxtLink></li>
          <li><NuxtLink to="/libros">Libros</NuxtLink></li>
          <li><NuxtLink to="/tratados">Tratados</NuxtLink></li>
          <li><NuxtLink to="/sociedad">La Sociedad</NuxtLink></li>
        </ul>

      </nav>
    </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  nav li a {
    @apply text-gray-600 hover:underline decoration-rosso-500 transition-colors duration-300 underline-offset-4;
  }

  nav li a.router-link-active, nav li a.router-link-exact-active{
    @apply text-black font-bold;
  }

</style>
<template>
  <footer class="container mx-auto my-6 border-t  pt-0.5 max-w-5xl">
    <div class="border-t-3 flex items-center justify-between pt-6 italic">
      <p class=" text-sm text-gray-800  ">©© {{ new Date().getFullYear() }} – SEdHC – <a href="mailto:sedhc.es@gmail.com">sedhc.es@gmail.com</a> </p>
      <NuxtLink to="/colofon" class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300 ">colofón</NuxtLink>
    </div>
   </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  a {
    @apply text-gray-700 hover:text-gray-900 transition-colors duration-300 decoration-cyan-500 underline underline-offset-6;
  }
</style>
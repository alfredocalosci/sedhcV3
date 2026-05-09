<template>
   <div class="sedhc_grid">

     <aside class="w-full h-full bg-mist-500  flex flex-col  pb-8">
      <NuxtLink to="/" class="w-full  bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white">
        <img src="/img/sedhc_logo_ilustracion_inv.png" alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black">

        <p class="text-sm/5  pt-2">Sociedad Española de Historia de la Construcción</p>
         
      </NuxtLink>
     </aside>

     <div class="main_content bg-white min-h-screen">
      <h2 class="text-4xl font-bold mb-4 mt-3" >gestion<span class="text-orange-500">:</span></h2>
      

      <!-- index -->
      <div class="mt-9 border-t border-dashed pt-6 mb-12">
       
        <NuxtLink external :to="`${siteUrl}/_studio`" class="flex items-center gap-x-4 my-4 group">
          <UIcon 
            name="mdi:application-edit-outline"
            class="text-lg  group-hover:text-orange-500 transition-colors duration-300"
          />
          <p class="text-lg font-semibold ">acceso al gestor de contenidos</p>
        </NuxtLink>
        
         <div class="mt-6 mb-12 text-lg">
          <p>El gestor de contenidos es <em>contextual</em> y está alojado en un panel lateral a la izquierda de la pantalla principal.</p>
          <p>El panel lateral puede abrirse desde un icono colocado abajo a la izquierda o pulsando la teclas "<strong>CMD</strong>" + "<strong>.</strong>" (<em>Command + punto</em>).</p>
        </div>

         <NuxtLink external to="https://github.com" class="flex items-center gap-x-4 my-4 group">
          <UIcon 
            name="mdi:github"
            class="text-lg group-hover:text-orange-500 transition-colors duration-300"
          />
          <p class="text-lg font-semibold ">GitHub</p>
        </NuxtLink>

        <p>El acceso al gestor está reservado a usuarios de <strong>GitHub</strong> expresamente autorizados.</p>
        <p>El control de acceso se realiza mediante la autenticación de GitHub y la asignación de permisos específicos a cada usuario.</p>
      </div>

      <GlobalFooter/>
     </div>

     <div></div>
    
  </div>
</template>

<script lang="ts" setup>
  const siteUrl = useRuntimeConfig().public.siteUrl
</script>

<style>

</style>
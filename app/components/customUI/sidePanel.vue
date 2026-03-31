<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-[300px_720px_1fr] top-0 z-10 fixed w-full min-h-screen bg-linear-to-r  from-black/40 to-transparent from-10% to-60% transition-all duration-500 ease-in-out pointer-events-none"
    :class="isOpen ? 'left-0' : '-left-[200%]'"
  >

    <aside class="w-full h-full bg-scuro-900 text-white p-6 ">

      <div 
        class="flex items-center justify-between pb-6 mb-6 border-b border-white/50 cursor-pointer group pointer-events-auto" 
        @click="togglePannel"
      >       
        <p class="font-mono font-light text-xs text-white/50 group-hover:text-white transition-colors duration-300">cerrar</p>
        <UIcon name="lucide:square-arrow-left" style="color: white" size="36"/>
      </div>

      <slot></slot>

      
    </aside>

  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    }
  });

  // emits
    const emit = defineEmits(['toggle']);

    const togglePannel = () => {
        emit('toggle');
    };

</script>

<style>

</style>
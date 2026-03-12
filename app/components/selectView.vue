<template>
  <div class="flex items-center justify-between gap-2"  >
    <p class="text-xs/3 font-mono pr-2 text-gray-500">mostrar como:</p>
      <div class="flex gap-1.5">
        <Icon
          name="lucide:layout-list"
          style="color: black"
          size="24"
          class="cursor-pointer"
          :class="props.modelValue == 'list' ? 'opacity-100' : 'opacity-20'"
          @click="setView('list')"/>
        <Icon
          name="lucide:grid-3x3"
          style="color: black"
          size="24"
          class="cursor-pointer"
          :class="props.modelValue == 'grid' ? 'opacity-100' : 'opacity-20'"
          @click="setView('grid')"/>
        <Icon
          name="lucide:list-ordered"
          style="color: black"
          size="24"
          class="cursor-pointer"
          :class="props.modelValue == 'compact' ? 'opacity-100' : 'opacity-20'"
          @click="setView('compact')"/>
      </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    modelValue: {
      type: String,
      default: 'list'
    }
  })

  const emit = defineEmits(['update:modelValue']);

  const setView = (view: 'list' | 'grid' | 'compact') => {
    emit('update:modelValue', view);
  }
</script>

<style>

</style>
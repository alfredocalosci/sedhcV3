<template>
  <div class="flex gap-2 items-center justify-between"  >
    <p class="text-xs/3 font-mono text-gray-500 pr-2 ">ordenar por:</p>

      <div class="flex items-center gap-1.5">
        <Icon 
          name="lucide:cloud-download"
          style="color: black"
          size="24"
           class="cursor-pointer"
          @click="toggleSortBy('downloads')"
          :class="props.modelValue === 'downloads' ? 'opacity-100' : 'opacity-20'"
          />

        <Icon 
          name="lucide:calendar"
          style="color: black"
          @click="toggleSortBy('year')"
          class="cursor-pointer"
          :class="props.modelValue === 'year' ? 'opacity-100' : 'opacity-20'"
          size="24"/>
                
        <Icon 
          :name="props.sortOrder === 'asc' ? 'lucide:sort-asc' : 'lucide:sort-desc'"
          style="color: black"
          size="18"
          @click="toggleSort"
          class="ml-1 cursor-pointer"/>
      </div>
    </div>
</template>

<script lang="ts" setup>


  const props = defineProps({
    modelValue: {
      type: String,
      default: 'download'
    },
    sortOrder: {
      type: String,
      default: 'asc'
    }
  })

  const emit = defineEmits(['update:sortBy', 'update:sortOrder']);

  const toggleSort = () => {
      emit('update:sortOrder', props.sortOrder === 'asc' ? 'desc' : 'asc');
  }

  const toggleSortBy = (field: 'year' | 'downloads') => {
    if(props.modelValue === field) {
    } else {
      emit('update:sortBy', field);
    }
  }

</script>

<style>

</style>
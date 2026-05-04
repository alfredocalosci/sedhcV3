<template>
  <div>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">

        <!-- nacionales -->
        <div>
         <h3 class="font-bold text-center text-6xl py-4">
          {{ romanize(firstNacionalNum) }}
         </h3>
         <p class="text-xs  text-center text-gray-500">Nacional</p>
         <p class=" mt-4 text-xs py-2 italic text-center bg-blu-500 text-white">
          {{ firstNacionalString }}
         </p>

        </div>

        <!-- hispanoamericano -->
        <div>
         <h3 class="font-bold text-center text-6xl py-4">
          {{ romanize(firstHispanoamericanoNum) }}
         </h3>
         <p class="text-xs  text-center text-gray-500">Hispanoamericano</p>
          <p class=" mt-4 text-xs py-2 italic text-center bg-azzurro-500 text-white">
          {{ firstHispanoamericanoString }}
          </p>

         
        </div>

        <!-- internacionales -->
        <div v-if="congresosInternacionales.length > 0">
         <h3 class="font-bold text-center text-6xl py-4">
          {{ romanize(firstInternacionalNum) }}
         </h3>
          <p class="text-xs  text-center text-gray-500">Internacional</p>
           <p class=" mt-4 text-xs py-2 italic text-center bg-rosso-500 text-white">
          {{ firstInternacionalString }}
           </p>
   
        </div>
      </div>

  </div>
</template>

<script lang="ts" setup>
  import type { CongresosCollectionItem } from '@nuxt/content'
  type Congreso = CongresosCollectionItem

  const props = defineProps<{
    congresos: Congreso[],
    selectedItem?: string,
    selectedTitle?: string
  }>();

  /*
  const emit = defineEmits<{
    (e: 'select', identifier: string | undefined, title: string | undefined): void
  }>();
  */

  /*
  function handleSelect(slug: string, title: string) {
    if (props.selectedItem === slug) {
      emit('select', undefined, undefined);
    } else {
      emit('select', slug, title);
    }
  }
    */

  const allList = computed<Congreso[]>(() => props.congresos);

  const congresosNacionales = computed<Congreso[]>(() =>
    allList.value.filter(c => (c.nacional_num ?? 0) > 0)
  );

  const congresosHispanoamericanos = computed<Congreso[]>(() =>
    allList.value.filter(c => (c.hispano_num ?? 0) > 0)
  );

  const congresosInternacionales = computed<Congreso[]>(() =>
    allList.value.filter(c => (c.internacional_num ?? 0) > 0)
  );

  const firstNacionalNum = computed<number>(() =>
    Number(congresosNacionales.value[0]?.nacional_num ?? 0)
  );

  const firstHispanoamericanoNum = computed<number>(() =>
    Number(congresosHispanoamericanos.value[0]?.hispano_num ?? 0)
  );

  const firstInternacionalNum = computed<number>(() =>
    Number(congresosInternacionales.value[0]?.internacional_num ?? 0)
  );

  const firstNacionalString = computed(() =>
`${congresosNacionales.value[0]?.lugar ?? ''} ${congresosNacionales.value[0]?.year ?? ''}`.trim()
);

const firstHispanoamericanoString = computed(() =>
`${congresosHispanoamericanos.value[0]?.lugar ?? ''} ${congresosHispanoamericanos.value[0]?.year ?? ''}`.trim()
);

const firstInternacionalString = computed(() =>
`${congresosInternacionales.value[0]?.lugar ?? ''} ${congresosInternacionales.value[0]?.year ?? ''}`.trim()
);

  const romanize = (num: number): string => {
  const lookup: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (const [key, value] of Object.entries(lookup)) {
    while (num >= value) {
      roman += key;
      num -= value;
    }
  }
  return roman;
};


</script>

<style>

</style>
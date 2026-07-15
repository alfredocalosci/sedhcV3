import { i as injectConfigProviderContext } from './useId-BteK1XEy.mjs';
import { ref, computed } from 'vue';

function useDirection(dir) {
  const context = injectConfigProviderContext({ dir: ref("ltr") });
  return computed(() => dir?.value || context.dir?.value || "ltr");
}

export { useDirection as u };
//# sourceMappingURL=useDirection-DZcdoQiV.mjs.map

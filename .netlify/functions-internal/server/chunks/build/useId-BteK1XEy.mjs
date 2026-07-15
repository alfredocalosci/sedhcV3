import { c as createContext } from './tv-j94pkw7g.mjs';
import * as vue from 'vue';

const [injectConfigProviderContext] = /* @__PURE__ */ createContext("ConfigProvider");
let count = 0;
function useId(deterministicId, prefix = "reka") {
  let id;
  const configProviderContext = injectConfigProviderContext({ useId: void 0 });
  if (configProviderContext.useId) id = configProviderContext.useId();
  else if ("useId" in vue) id = vue.useId?.();
  else id = `${++count}`;
  return prefix ? `${prefix}-${id}` : id;
}

export { injectConfigProviderContext as i, useId as u };
//# sourceMappingURL=useId-BteK1XEy.mjs.map

import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useComponentProps, t as tv } from './tv-j94pkw7g.mjs';
import { _ as _sfc_main$1 } from './Icon-DsBGEmrB.mjs';
import { j as useAppConfig } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'consola';
import 'minimatch';
import 'node:fs/promises';
import '@iconify/utils';
import 'better-sqlite3';
import 'tailwind-variants';
import './useForwardProps-C7rTJt5P.mjs';
import '@vueuse/core';
import './index-CFcRQXtI.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-CJgDaN-V.mjs';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme = {
  "base": "size-4 shrink-0 align-sub"
};
const _sfc_main = {
  __name: "ProseIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.icon", _props);
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.icon || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        name: unref(props).name,
        class: ui.value({ class: [unref(props).ui?.base, unref(props).class] })
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Icon-DcUx_Q-O.mjs.map

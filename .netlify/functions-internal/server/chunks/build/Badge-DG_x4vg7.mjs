import { computed, mergeProps, unref, withCtx, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-CPI316Ci.mjs';
import { r as renderSlot } from './slot-7UlrbIuG.mjs';
import { u as useComponentUI, t as tv } from './tv-BpNzT_zm.mjs';
import { _ as _sfc_main$1 } from './Badge-j1v36oHW.mjs';
import { j as useAppConfig } from './server.mjs';
import './node-CIB8iVlG.mjs';
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
import 'reka-ui';
import 'tailwind-variants';
import './Avatar-s0LjLTGR.mjs';
import './virtual_nuxt__Users_alfredoc_Sites_sedhcV3_node_modules_.cache_nuxt_.nuxt_ui-image-component-CX5_T5UE.mjs';
import './Icon-CKWyHDbt.mjs';
import './index-B5zsnP7H.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BICxzpjz.mjs';
import 'perfect-debounce';
import '@vueuse/core';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme = {
  "base": "rounded-full"
};
const _sfc_main = {
  __name: "ProseBadge",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.badge", props);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.badge || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        color: "primary",
        variant: "subtle",
        class: ui.value({ class: [unref(uiProp)?.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Badge-DG_x4vg7.mjs.map

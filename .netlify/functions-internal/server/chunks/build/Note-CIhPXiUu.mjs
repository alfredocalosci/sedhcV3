import { mergeProps, unref, withCtx, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-CPI316Ci.mjs';
import { r as renderSlot } from './slot-7UlrbIuG.mjs';
import _sfc_main$1 from './Callout-9lTYIsqG.mjs';
import { j as useAppConfig } from './server.mjs';
import './node-CIB8iVlG.mjs';
import './tv-BpNzT_zm.mjs';
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
import './Link-BBmTp5pn.mjs';
import './nuxt-link-Co3vNW-s.mjs';
import '@vueuse/core';
import './Icon-CKWyHDbt.mjs';
import './index-B5zsnP7H.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BICxzpjz.mjs';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  __name: "ProseNote",
  __ssrInlineRender: true,
  setup(__props) {
    const appConfig = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        color: "info",
        icon: unref(appConfig).ui.icons.info
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Note.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Note-CIhPXiUu.mjs.map

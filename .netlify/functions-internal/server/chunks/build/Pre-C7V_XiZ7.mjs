import { useTemplateRef, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useClipboard } from '@vueuse/core';
import { u as useComponentProps, t as tv } from './tv-j94pkw7g.mjs';
import { u as useLocale } from './useLocale-DzFA2n12.mjs';
import _sfc_main$1 from './CodeIcon-BHl_fwqY.mjs';
import { _ as _sfc_main$2 } from './Button-C2SS1Eai.mjs';
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
import './Icon-DsBGEmrB.mjs';
import './useForwardProps-C7rTJt5P.mjs';
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
import './useForwardProps-D3lL2osj.mjs';
import './Avatar-CsbOpQ4H.mjs';
import './Primitive-CV1np00T.mjs';
import './virtual_nuxt__Users_alfredoc_Sites_sedhcV3_node_modules_.cache_nuxt_.nuxt_ui-image-component-CX5_T5UE.mjs';
import './Link-DAoPeLFD.mjs';
import './nuxt-link-Bjj7wIGt.mjs';

const theme = {
  "slots": {
    "root": "relative my-5 group",
    "header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-default text-sm/6",
    "icon": "size-4 shrink-0",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100 transition",
    "base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap wrap-break-word overflow-x-auto outline-primary/25 focus-visible:outline-3 focus-visible:border-primary **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-accented/50!"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProsePre",
  __ssrInlineRender: true,
  props: {
    icon: { type: null, required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.pre", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const baseRef = useTemplateRef("baseRef");
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.pre || {} })());
    function copyCode() {
      const code = props.code ?? baseRef.value?.textContent ?? "";
      copy(code);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [unref(props).ui?.root], filename: !!unref(props).filename })
      }, _attrs))}>`);
      if (unref(props).filename && !unref(props).hideHeader) {
        _push(`<div class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: unref(props).icon,
          filename: unref(props).filename,
          class: ui.value.icon({ class: unref(props).ui?.icon })
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(ui.value.filename({ class: unref(props).ui?.filename }))}">${ssrInterpolate(unref(props).filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, {
        icon: unref(copied) ? unref(appConfig).ui.icons.copyCheck : unref(appConfig).ui.icons.copy,
        color: "neutral",
        variant: "outline",
        size: "sm",
        "aria-label": unref(t)("prose.pre.copy"),
        class: ui.value.copy({ class: unref(props).ui?.copy }),
        onClick: copyCode
      }, null, _parent));
      _push(`<pre${ssrRenderAttrs(mergeProps({
        ref_key: "baseRef",
        ref: baseRef,
        class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] })
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pre-C7V_XiZ7.mjs.map

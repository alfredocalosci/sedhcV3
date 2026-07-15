import { useSlots, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useClipboard } from '@vueuse/core';
import { u as useComponentProps, t as tv, b as getSlotChildrenText } from './tv-j94pkw7g.mjs';
import { u as useLocale } from './useLocale-DzFA2n12.mjs';
import { _ as _sfc_main$1 } from './Icon-DsBGEmrB.mjs';
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
    "root": "relative flex flex-wrap items-center gap-2 border border-muted bg-muted rounded-md px-4 py-3 my-5 last:mb-0",
    "icon": "size-4 shrink-0 text-highlighted",
    "content": "min-w-0",
    "description": "text-sm/6 text-default font-medium",
    "actions": "flex flex-wrap items-center gap-1.5 ms-auto"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProsePrompt",
  __ssrInlineRender: true,
  props: {
    description: { type: String, required: false },
    icon: { type: null, required: false },
    actions: { type: Array, required: false, default: () => ["copy"] },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("prose.prompt", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.prompt || {} })());
    function getPromptText() {
      const children = slots.default?.();
      return children ? getSlotChildrenText(children).trim() : "";
    }
    function copyPrompt() {
      copy(getPromptText());
    }
    function openInCursor() {
      const url = new URL("cursor://anysphere.cursor-deeplink/prompt");
      url.searchParams.set("text", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    function openInWindsurf() {
      const url = new URL("windsurf://cascade/newChat");
      url.searchParams.set("prompt", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }, _ctx.$attrs, _attrs))}>`);
      if (unref(props).icon) {
        _push(ssrRenderComponent(_sfc_main$1, {
          name: unref(props).icon,
          class: ui.value.icon({ class: unref(props).ui?.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(ui.value.content({ class: unref(props).ui?.content }))}">`);
      if (unref(props).description) {
        _push(`<p class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}">${ssrInterpolate(unref(props).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}">`);
      if (unref(props).actions.includes("copy")) {
        _push(ssrRenderComponent(_sfc_main$2, {
          icon: unref(copied) ? unref(appConfig).ui.icons.copyCheck : unref(appConfig).ui.icons.copy,
          size: "sm",
          label: unref(t)("prose.prompt.copy"),
          onClick: copyPrompt
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(props).actions.includes("cursor")) {
        _push(ssrRenderComponent(_sfc_main$2, {
          icon: "i-simple-icons-cursor",
          color: "neutral",
          variant: "outline",
          size: "sm",
          label: unref(t)("prose.prompt.openIn", { name: "Cursor" }),
          onClick: openInCursor
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(props).actions.includes("windsurf")) {
        _push(ssrRenderComponent(_sfc_main$2, {
          icon: "i-simple-icons-windsurf",
          color: "neutral",
          variant: "outline",
          size: "sm",
          label: unref(t)("prose.prompt.openIn", { name: "Windsurf" }),
          onClick: openInWindsurf
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Prompt-D27j_p2l.mjs.map

import { _ as _sfc_main$1 } from './Icon-CKWyHDbt.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sidePanel",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["grid grid-cols-1 lg:grid-cols-[300px_720px_1fr] top-0 z-10 fixed w-full min-h-screen bg-linear-to-r from-black/40 to-transparent from-10% to-60% transition-all duration-500 ease-in-out pointer-events-none", __props.isOpen ? "left-0" : "-left-[200%]"]
      }, _attrs))}><aside class="w-full h-screen bg-scuro-900 text-white p-6"><div class="flex items-center justify-between pb-6 mb-6 border-b border-white/50 cursor-pointer group pointer-events-auto"><p class="font-mono font-light text-xs text-white/50 group-hover:text-white transition-colors duration-300">cerrar</p>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:square-arrow-left",
        style: { "color": "white" },
        size: "36"
      }, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</aside></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customUI/sidePanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CustomUISidePanel" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=sidePanel-DlTQLQGe.mjs.map

import { unref, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { u as useForwardProps } from './useForwardProps-C7rTJt5P.mjs';
import { reactivePick } from '@vueuse/core';
import __nuxt_component_7 from './index-CFcRQXtI.mjs';

const _sfc_main = {
  __name: "UIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: null, required: true },
    mode: { type: String, required: false },
    size: { type: [String, Number], required: false },
    customize: { type: [Function, Boolean, null], required: false }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      if (typeof __props.name === "string") {
        _push(ssrRenderComponent(unref(__nuxt_component_7), mergeProps({ name: __props.name }, unref(iconProps), _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.name), _attrs, null), _parent);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Icon-DsBGEmrB.mjs.map

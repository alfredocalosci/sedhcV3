import { _ as __nuxt_component_0 } from './nuxt-link-xTfsnHjX.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-6 border-t pt-0.5 max-w-5xl" }, _attrs))} data-v-2a35fa2c><div class="border-t-3 flex items-center justify-between pt-6 italic" data-v-2a35fa2c><p class="text-sm text-gray-800" data-v-2a35fa2c>©© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} – SEdHC – <a href="mailto:sedhc.es@gmail.com" data-v-2a35fa2c>sedhc.es@gmail.com</a></p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/colofon",
    class: "text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`colofón`);
      } else {
        return [
          createTextVNode("colofón")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/globalFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a35fa2c"]]), { __name: "GlobalFooter" });

export { __nuxt_component_9 as _ };
//# sourceMappingURL=globalFooter-DfeFPIeh.mjs.map

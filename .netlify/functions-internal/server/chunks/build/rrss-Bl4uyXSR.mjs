import { _ as _sfc_main$1 } from './Icon-D0CT7Pv4.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UIcon = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col px-8 gap-3 border-t border-white pt-8" }, _attrs))}><a href="https://www.facebook.com/sociedadespanola.historiaconstruccion/" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-800 transition-colors duration-300 flex items-center gap-2 hover:text-azzurro-500">`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "mdi:facebook",
    class: "size-5 mr-2"
  }, null, _parent));
  _push(` facebook </a><a href="https://www.twitter.com/sedhc1" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-800 hover:text-rosso-500 transition-colors duration-300 flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "prime:twitter",
    class: "size-5 mr-2"
  }, null, _parent));
  _push(` @sedhc1 </a><a href="mailto:sedhc.es@gmail.com" class="text-sm text-gray-800 hover:text-scuro-900 transition-colors duration-300 flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "lucide:mail",
    class: "size-5 mr-2"
  }, null, _parent));
  _push(` sedhc.es@gmail.com </a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rrss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "Rrss" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=rrss-Bl4uyXSR.mjs.map

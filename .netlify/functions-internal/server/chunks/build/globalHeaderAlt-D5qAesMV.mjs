import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-300 pb-0.5 max-w-5xl" }, _attrs))} data-v-b255fd59><nav class="border-b-2 border-gray-400 pb-4" data-v-b255fd59><ul class="flex flex-col md:flex-row space-x-3 space-y-2 md:space-y-0 font-mono uppercase justify-end text-xs font-light" data-v-b255fd59><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/noticias" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Noticias`);
      } else {
        return [
          createTextVNode("Noticias")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/revista" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Revista`);
      } else {
        return [
          createTextVNode("Revista")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/congresos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Congresos`);
      } else {
        return [
          createTextVNode("Congresos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/libros" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Libros`);
      } else {
        return [
          createTextVNode("Libros")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/tratados" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tratados`);
      } else {
        return [
          createTextVNode("Tratados")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b255fd59>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/sociedad" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`La Sociedad`);
      } else {
        return [
          createTextVNode("La Sociedad")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/globalHeaderAlt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b255fd59"]]), { __name: "GlobalHeaderAlt" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=globalHeaderAlt-D5qAesMV.mjs.map

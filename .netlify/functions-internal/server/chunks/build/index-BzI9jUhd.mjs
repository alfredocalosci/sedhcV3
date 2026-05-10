import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as _sfc_main$1 } from './Icon-CKWyHDbt.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { b as useRuntimeConfig } from './server.mjs';
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
import './index-B5zsnP7H.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BICxzpjz.mjs';
import 'perfect-debounce';
import 'reka-ui';
import '@vueuse/core';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const siteUrl = useRuntimeConfig().public.siteUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))}><aside class="w-full h-full bg-mist-500 flex flex-col pb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black"${_scopeId}><p class="text-sm/5 pt-2"${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "sedhc",
                class: "h-16 w-auto mt-2 mix-blend-screen bg-black"
              }),
              createVNode("p", { class: "text-sm/5 pt-2" }, "Sociedad Española de Historia de la Construcción")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside><div class="main_content bg-white min-h-screen"><h2 class="text-4xl font-bold mb-4 mt-3">gestion<span class="text-orange-500">:</span></h2><div class="mt-9 border-t border-dashed pt-6 mb-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        external: "",
        to: `${unref(siteUrl)}/_studio`,
        class: "flex items-center gap-x-4 my-4 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "mdi:application-edit-outline",
              class: "text-lg group-hover:text-orange-500 transition-colors duration-300"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-lg font-semibold"${_scopeId}>acceso al gestor de contenidos</p>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "mdi:application-edit-outline",
                class: "text-lg group-hover:text-orange-500 transition-colors duration-300"
              }),
              createVNode("p", { class: "text-lg font-semibold" }, "acceso al gestor de contenidos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6 mb-12 text-lg"><p>El gestor de contenidos es <em>contextual</em> y está alojado en un panel lateral a la izquierda de la pantalla principal.</p><p>El panel lateral puede abrirse desde un icono colocado abajo a la izquierda o pulsando la teclas &quot;<strong>CMD</strong>&quot; + &quot;<strong>.</strong>&quot; (<em>Command + punto</em>).</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        external: "",
        to: "https://github.com",
        class: "flex items-center gap-x-4 my-4 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "mdi:github",
              class: "text-lg group-hover:text-orange-500 transition-colors duration-300"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-lg font-semibold"${_scopeId}>GitHub</p>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "mdi:github",
                class: "text-lg group-hover:text-orange-500 transition-colors duration-300"
              }),
              createVNode("p", { class: "text-lg font-semibold" }, "GitHub")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>El acceso al gestor está reservado a usuarios de <strong>GitHub</strong> expresamente autorizados.</p><p>El control de acceso se realiza mediante la autenticación de GitHub y la asignación de permisos específicos a cada usuario.</p></div>`);
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gestion/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BzI9jUhd.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { s as shortenUrl } from './index-D1IrLfHv.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { _ as _export_sfc, a as useRoute } from './server.mjs';
import { u as useAsyncData } from './asyncData-BICxzpjz.mjs';
import { q as queryCollection } from './client-B23pzL1B.mjs';
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
import 'property-information';
import './node-CIB8iVlG.mjs';
import 'minimark/hast';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: entidad } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("entidades").where("path", "=", route.path).first(),
      "$n-PWPqsnCo"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: entidades } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "entidades_list",
      () => queryCollection("entidades").order("rank", "ASC").all()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-4a8ff046><aside class="w-full h-full bg-mist-500 flex flex-col pb-8" data-v-4a8ff046>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-4a8ff046${_scopeId}><p class="text-sm/5 pt-2" data-v-4a8ff046${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      if (unref(entidad)?.image) {
        _push(`<div data-v-4a8ff046><img${ssrRenderAttr("src", unref(entidad).image.src)}${ssrRenderAttr("alt", unref(entidad).image.alt)} class="mx-auto max-w-5/6 mt-12 shadow-lg/40 mb-12" data-v-4a8ff046></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside><div class="main_content bg-white" data-v-4a8ff046><div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3" data-v-4a8ff046><p class="font-mono uppercase text-[10px] text-azzurro-500" data-v-4a8ff046>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-700 hover:text-azzurro-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`inicio`);
          } else {
            return [
              createTextVNode("inicio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/entidades",
        class: "text-gray-700 hover:text-azzurro-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`entidades`);
          } else {
            return [
              createTextVNode("entidades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / </p></div>`);
      if (unref(entidad)) {
        _push(`<div class="mt-6 pb-2" data-v-4a8ff046><h2 class="text-lg/6 md:text-4xl/10 my-6 text-gray-900 mr-6" data-v-4a8ff046>${ssrInterpolate(unref(entidad).title)}</h2>`);
        if (unref(entidad).acronym) {
          _push(`<p class="font-mono uppercase text-xs text-mist-600 mb-4" data-v-4a8ff046>${ssrInterpolate(unref(entidad).acronym)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(entidad)) {
        _push(`<article class="md:ml-9 mb-12" data-v-4a8ff046>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(entidad),
          class: "mdtxt"
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(entidad)?.url) {
        _push(`<div class="pt-6 mb-12 border-t border-dashed" data-v-4a8ff046><p class="font-mono text-xs pb-0 text-gray-600" data-v-4a8ff046>más información en:</p><a${ssrRenderAttr("href", unref(entidad).url)} target="_blank" class="text-gray-700 decoration-cyan-500 underline underline-offset-6 text-sm pl-2" data-v-4a8ff046>${ssrInterpolate(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))(unref(entidad).url, 50))}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-9 border-t border-dashed pt-6 mb-12" data-v-4a8ff046><!--[-->`);
      ssrRenderList(unref(entidades), (e) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: e.acronym,
          to: e.path,
          class: "mb-1 block hover:text-rosso-500 transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 data-v-4a8ff046${_scopeId}>${ssrInterpolate(e.title)}</h3>`);
            } else {
              return [
                createVNode("h3", null, toDisplayString(e.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div data-v-4a8ff046></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/entidades/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a8ff046"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BJEZFJYD.mjs.map

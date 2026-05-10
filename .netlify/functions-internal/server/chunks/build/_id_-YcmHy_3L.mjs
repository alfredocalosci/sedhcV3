import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { f as formatSpanishDate } from './fechas-DABiPrFr.mjs';
import { s as shortenUrl } from './index-D1IrLfHv.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const { data: noticia } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => {
        return queryCollection("noticias").where("slug", "=", route.params.id).first();
      },
      "$Y4NZGJrMYn"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-fd5bd115><aside class="w-full bg-neutro-500 flex flex-col" data-v-fd5bd115>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-orange-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-fd5bd115${_scopeId}><p class="text-sm/5 pt-2" data-v-fd5bd115${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      if (unref(noticia)) {
        _push(`<div data-v-fd5bd115><img${ssrRenderAttr("src", unref(noticia).image?.src)}${ssrRenderAttr("alt", unref(noticia).image?.alt)} class="mx-auto max-w-5/6 mt-12 shadow-lg/40 mb-12" data-v-fd5bd115></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside><div class="main_content bg-white" data-v-fd5bd115>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3" data-v-fd5bd115><p class="font-mono uppercase text-[10px] text-azzurro-500" data-v-fd5bd115>`);
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
        to: "/noticias",
        class: "text-gray-700 hover:text-azzurro-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`noticias`);
          } else {
            return [
              createTextVNode("noticias")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / </p></div>`);
      if (unref(noticia)) {
        _push(`<div class="mt-6 pb-2" data-v-fd5bd115><p class="text-sm italic text-gray-500" data-v-fd5bd115>${ssrInterpolate(("formatSpanishDate" in _ctx ? _ctx.formatSpanishDate : unref(formatSpanishDate))(unref(noticia).date))}</p><h2 class="text-lg/6 md:text-4xl/10 my-6 text-gray-900 mr-6" data-v-fd5bd115>${ssrInterpolate(unref(noticia).title)}</h2><p class="md:pl-6 md:text-lg/7 italic text-gray-600" data-v-fd5bd115>${ssrInterpolate(unref(noticia).description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(noticia)) {
        _push(`<article class="md:ml-9 mb-12" data-v-fd5bd115>`);
        if (unref(noticia)) {
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: unref(noticia),
            class: "mdtxt"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(noticia)?.url) {
        _push(`<div class="pt-6 mb-12 border-t border-dashed" data-v-fd5bd115><p class="font-mono text-xs pb-0 text-gray-600" data-v-fd5bd115>mas información en:</p><a${ssrRenderAttr("href", unref(noticia).url)} target="_blank" class="text-gray-700 decoration-cyan-500 underline underline-offset-6 text-sm pl-2" data-v-fd5bd115>${ssrInterpolate(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))(unref(noticia).url, 50))}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div data-v-fd5bd115></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/noticias/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd5bd115"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-YcmHy_3L.mjs.map

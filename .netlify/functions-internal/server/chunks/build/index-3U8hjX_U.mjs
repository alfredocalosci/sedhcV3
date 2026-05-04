import { _ as __nuxt_component_0 } from './nuxt-link-xTfsnHjX.mjs';
import { q as queryCollection, _ as __nuxt_component_0$1, a as __nuxt_component_2 } from './client-C-dpBcZ8.mjs';
import { _ as __nuxt_component_1 } from './rrss-Bl4uyXSR.mjs';
import __nuxt_component_7 from './index-DSYAIBMp.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-DfeFPIeh.mjs';
import { f as formatSpanishDate } from './fechas-DABiPrFr.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { u as useAsyncData } from './asyncData-BbU2djNp.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './Icon-D0CT7Pv4.mjs';
import 'reka-ui';
import '@vueuse/core';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
  async setup(__props) {
    let __temp, __restore;
    const { data: noticias } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("noticias_list", () => {
      return queryCollection("noticias").select("path", "title", "slug", "description", "date", "category").order("date", "DESC").all();
    })), __temp = await __temp, __restore(), __temp);
    const { data: categorias } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("categorias_list", () => {
      return queryCollection("temas").order("rank", "ASC").all();
    })), __temp = await __temp, __restore(), __temp);
    const selectedSubject = ref(null);
    const searchString = ref("");
    const filteredNoticias = computed(() => {
      if (!noticias.value) return [];
      let filterOutput = noticias.value;
      if (selectedSubject.value) {
        filterOutput = filterOutput.filter((noticia) => Array.isArray(noticia.category) && noticia.category.includes(selectedSubject.value));
      }
      if (searchString.value && searchString.value.trim() !== "" && searchString.value.length > 2) {
        filterOutput = filterOutput.filter((item) => {
          return item.title.toLowerCase().includes(searchString.value.toLowerCase());
        });
      }
      return filterOutput;
    });
    const noticiasDestacadas = computed(() => filteredNoticias.value.slice(0, 3));
    const noticiasCompactas = computed(() => filteredNoticias.value.slice(3));
    const noticiasCompactasByYears = computed(() => {
      return noticiasCompactas.value.reduce((acc, noticia) => {
        const year = String(new Date(noticia.date).getFullYear());
        if (!acc[year]) acc[year] = [];
        acc[year].push(noticia);
        return acc;
      }, {});
    });
    const { data: sideText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("noticias_lateral", () => {
      return queryCollection("textos").where("webpage", "=", "noticias").where("section", "=", "lateral").first();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_rrss = __nuxt_component_1;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_Icon = __nuxt_component_7;
      const _component_globalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-1ea7e879><aside class="w-full bg-neutro-500 flex flex-col" data-v-1ea7e879>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-orange-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-1ea7e879${_scopeId}><p class="text-sm/5 pt-2" data-v-1ea7e879${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      _push(`<section class="p-8 text-sm text-gray-800 italic hidden lg:block" data-v-1ea7e879>`);
      if (unref(sideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sideText),
          class: "mdtxt mdtxt_side"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><div class="hidden lg:block" data-v-1ea7e879>`);
      _push(ssrRenderComponent(_component_rrss, null, null, _parent));
      _push(`</div></aside><div class="main_content bg-white" data-v-1ea7e879>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<div class="grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-4 text-xs mt-6 border-b border-gray-400 border-dashed pb-6 ml-1" data-v-1ea7e879><!--[-->`);
      ssrRenderList(unref(categorias), (cat, index2) => {
        _push(`<div class="cursor-pointer" data-v-1ea7e879><p class="group" data-v-1ea7e879><strong " class="${ssrRenderClass([{
          "text-gray-400": unref(selectedSubject) !== cat.slug && unref(selectedSubject) !== null,
          "text-orange-600 ": unref(selectedSubject) === cat.slug,
          "text-gray-900": unref(selectedSubject) === null
        }, "font-bold text-xs -ml-1 transition-colors duration-300 group-hover:text-orange-600"])}" data-v-1ea7e879>${ssrInterpolate(cat.nombre)}: </strong><br data-v-1ea7e879><span class="${ssrRenderClass([{
          "text-gray-400": unref(selectedSubject) !== cat.slug && unref(selectedSubject) !== null,
          "text-gray-600 ": unref(selectedSubject) === cat.slug,
          "text-gray-600": unref(selectedSubject) === null
        }, "italic transition-colors duration-300"])}" data-v-1ea7e879>${ssrInterpolate(cat.desc)}</span></p></div>`);
      });
      _push(`<!--]--></div><div class="flex items-center justify-between gap-4 mb-16 z-5 md:sticky top-0 bg-white py-3" data-v-1ea7e879><p class="font-mono text-xs text-gray-500" data-v-1ea7e879>mostrando <span class="text-scuro-900 font-semibold" data-v-1ea7e879>${ssrInterpolate(unref(filteredNoticias).length)}</span> noticias de <span class="text-scuro-900 font-semibold" data-v-1ea7e879>${ssrInterpolate(unref(noticias)?.length)}</span></p><div class="relative" data-v-1ea7e879><input type="search" id="site-search" name="q"${ssrRenderAttr("value", unref(searchString))} placeholder="Buscar …" class="font-mono text-xs border-b border-gray-300 focus:border-rosso-500 focus:ring-0 focus:outline-none transition-colors duration-200 w-full mb-4 md:mb-0 pl-6 pb-1.5" data-v-1ea7e879>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        style: { "color": "black" },
        size: "18",
        class: "absolute top-3 left-0 -translate-y-1/2 text-gray-400 pointer-events-none"
      }, null, _parent));
      _push(`</div></div><div class="mt-8 max-w-5/6" data-v-1ea7e879><!--[-->`);
      ssrRenderList(unref(noticiasDestacadas), (noticia) => {
        _push(`<div class="mb-4 pb-4" data-v-1ea7e879>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/noticias/${noticia.slug}`,
          class: "group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-sm italic text-gray-500" data-v-1ea7e879${_scopeId}>${ssrInterpolate(("formatSpanishDate" in _ctx ? _ctx.formatSpanishDate : unref(formatSpanishDate))(noticia.date))}</p><h2 class="text-2xl/7 my-3 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300" data-v-1ea7e879${_scopeId}>${ssrInterpolate(noticia.title)}</h2><p class="pl-3 text-base/6 italic text-gray-600" data-v-1ea7e879${_scopeId}>${ssrInterpolate(noticia.description)}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-sm italic text-gray-500" }, toDisplayString(("formatSpanishDate" in _ctx ? _ctx.formatSpanishDate : unref(formatSpanishDate))(noticia.date)), 1),
                createVNode("h2", { class: "text-2xl/7 my-3 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300" }, toDisplayString(noticia.title), 1),
                createVNode("p", { class: "pl-3 text-base/6 italic text-gray-600" }, toDisplayString(noticia.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mt-12" data-v-1ea7e879><!--[-->`);
      ssrRenderList(Object.keys(unref(noticiasCompactasByYears)).sort((a, b) => Number(b) - Number(a)), (year) => {
        _push(`<div class="mb-12" data-v-1ea7e879><h4 class="text-xs font-mono w-full border-b border-dashed border-gray-300 text-gray-500 pb-2 text-right mb-6" data-v-1ea7e879>${ssrInterpolate(year)}</h4><!--[-->`);
        ssrRenderList(unref(noticiasCompactasByYears)[year], (noticia) => {
          _push(`<div class="mb-3 pb-3" data-v-1ea7e879>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/noticias/${noticia.slug}`,
            class: "group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="text-xs italic text-gray-500" data-v-1ea7e879${_scopeId}>${ssrInterpolate(("formatSpanishDate" in _ctx ? _ctx.formatSpanishDate : unref(formatSpanishDate))(noticia.date))}</p><h3 class="text-sm/5 pl-3 my-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300" data-v-1ea7e879${_scopeId}>${ssrInterpolate(noticia.title)}</h3>`);
              } else {
                return [
                  createVNode("p", { class: "text-xs italic text-gray-500" }, toDisplayString(("formatSpanishDate" in _ctx ? _ctx.formatSpanishDate : unref(formatSpanishDate))(noticia.date)), 1),
                  createVNode("h3", { class: "text-sm/5 pl-3 my-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300" }, toDisplayString(noticia.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_globalFooter, null, null, _parent));
      _push(`</div><div data-v-1ea7e879></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/noticias/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ea7e879"]]);

export { index as default };
//# sourceMappingURL=index-3U8hjX_U.mjs.map

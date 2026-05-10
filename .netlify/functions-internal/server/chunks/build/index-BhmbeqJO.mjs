import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as _sfc_main$2 } from './Icon-CKWyHDbt.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-BICxzpjz.mjs';
import { q as queryCollection } from './client-B23pzL1B.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { s as shortenUrl } from './index-D1IrLfHv.mjs';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
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
import './index-B5zsnP7H.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
import '@vueuse/core';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "revistas",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: revistas } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("revistas_list", () => {
      return queryCollection("revista").order("volumen", "DESC").all();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="mt-6 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 items-start"><!--[-->`);
      ssrRenderList(unref(revistas), (revista) => {
        _push(`<a${ssrRenderAttr("href", revista.url)} target="_blank" rel="noopener noreferrer" class="mb-4 cursor-pointer group"><img${ssrRenderAttr("src", revista.image?.src)}${ssrRenderAttr("alt", revista.image?.alt)} class="p-3 w-full h-auto group-hover:scale-105 transition-transform duration-300 shadow-md mb-4"><div class="text-right pr-2"><p class="font-bold text-revista-500">Volumen ${ssrInterpolate(revista.volumen)}</p><p class="text-xs text-gray-500">${ssrInterpolate(revista.year)}</p></div></a>`);
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/revistas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "Revistas" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: introText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("revista_intro", () => {
      return queryCollection("textos").where("webpage", "=", "revista").where("section", "=", "intro").first();
    })), __temp = await __temp, __restore(), __temp);
    const { data: sideText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("revista_side", () => {
      return queryCollection("textos").where("webpage", "=", "revista").where("section", "=", "lateral").first();
    })), __temp = await __temp, __restore(), __temp);
    const { data: mainText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("revista_main", () => {
      return queryCollection("textos").where("webpage", "=", "revista").where("section", "=", "texto").first();
    })), __temp = await __temp, __restore(), __temp);
    const { data: cargosText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("revista_cargos", () => {
      return queryCollection("textos").where("webpage", "=", "revista").where("section", "=", "cargos").first();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$2;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_revistas = __nuxt_component_4;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-2668c809><div class="bg-revista-500 pb-6" data-v-2668c809><aside data-v-2668c809>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-azzurro-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-2668c809${_scopeId}><p class="text-sm/5 pt-2" data-v-2668c809${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      _push(`<div class="px-8 mt-8 lg:mt-20 italic text-gray-100" data-v-2668c809>`);
      if (unref(sideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sideText),
          class: "mdtxt mdtxt_side mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 pointer-events-auto border-t border-gray-400 pt-6" data-v-2668c809><a href="https://polipapers.upv.es/index.php/HC/" target="_blank" class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto" rel="noopener noreferrer" data-v-2668c809>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:app-window-mac",
        style: { "color": "white" },
        size: "24"
      }, null, _parent));
      _push(`<span class="ml-2 text-xs italic text-white/70 group-hover:text-white transition-colors duration-300" data-v-2668c809>${ssrInterpolate(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))("https://polipapers.upv.es/index.php/HC/index", 30))}</span></a></div></div></aside></div><div class="main_content bg-white" data-v-2668c809>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<section id="intro" class="mt-32 mb-16" data-v-2668c809>`);
      if (unref(introText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(introText),
          class: "mdtxt mdtxt_intro mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section id="volumenes" class="mb-16" data-v-2668c809><p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mb-8" data-v-2668c809>Volúmenes publicados:</p>`);
      _push(ssrRenderComponent(_component_revistas, null, null, _parent));
      _push(`</section><section class="mb-16" data-v-2668c809>`);
      if (unref(mainText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(mainText),
          class: "mdtxt mdtxt_main mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="mb-16" data-v-2668c809><p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mb-8" data-v-2668c809>Redacción:</p>`);
      if (unref(cargosText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(cargosText),
          class: "mdtxt mdtxt_lista mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div data-v-2668c809></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revista/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2668c809"]]);

export { index as default };
//# sourceMappingURL=index-BhmbeqJO.mjs.map

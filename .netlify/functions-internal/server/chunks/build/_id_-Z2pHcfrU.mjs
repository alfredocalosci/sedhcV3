import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
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
    const { data: texto } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("textos").where("path", "=", route.path).first(),
      "$39Ne4NcOx8"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: textos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "textos_list",
      () => queryCollection("textos").order("webpage", "ASC").all()
    )), __temp = await __temp, __restore(), __temp);
    const grouped = computed(() => {
      const groups = {};
      for (const t of textos.value ?? []) {
        if (!groups[t.webpage]) groups[t.webpage] = [];
        groups[t.webpage].push(t);
      }
      return groups;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-d6ca3a32><aside class="w-full h-full bg-mist-500 flex flex-col pb-8" data-v-d6ca3a32>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-mist-600 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-d6ca3a32${_scopeId}><p class="text-sm/5 pt-2" data-v-d6ca3a32${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      _push(`</aside><div class="main_content bg-white" data-v-d6ca3a32><div class="flex items-center mb-14 z-5 md:sticky top-0 bg-white py-3" data-v-d6ca3a32><p class="font-mono uppercase text-[10px] text-azzurro-500" data-v-d6ca3a32>`);
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
        to: "/textos",
        class: "text-gray-700 hover:text-azzurro-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`textos`);
          } else {
            return [
              createTextVNode("textos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / </p></div>`);
      if (unref(texto)) {
        _push(`<div class="flex gap-3 mb-6" data-v-d6ca3a32><span class="font-mono uppercase text-xs text-white bg-mist-600 px-2 py-1" data-v-d6ca3a32>${ssrInterpolate(unref(texto).webpage)}</span><span class="font-mono uppercase text-xs text-mist-600 border border-mist-600 px-2 py-1" data-v-d6ca3a32>${ssrInterpolate(unref(texto).section)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(texto)) {
        _push(`<article class="md:ml-4 mb-12" data-v-d6ca3a32>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(texto),
          class: "mdtxt"
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(grouped), (items, webpage) => {
        _push(`<div class="mt-9 border-t border-dashed pt-4 mb-6" data-v-d6ca3a32><h3 class="font-mono uppercase text-xs text-gray-400 mb-3" data-v-d6ca3a32>${ssrInterpolate(webpage)}</h3><!--[-->`);
        ssrRenderList(items, (t) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: t.path,
            to: t.path,
            class: "mb-1 block hover:text-rosso-500 transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(t.section)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(t.section), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div data-v-d6ca3a32></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/textos/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6ca3a32"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Z2pHcfrU.mjs.map

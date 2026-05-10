import { _ as __nuxt_component_0 } from './sidePanel-DlTQLQGe.mjs';
import { _ as _sfc_main$3 } from './Icon-CKWyHDbt.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_0$2 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { defineComponent, ref, withAsyncContext, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, useTemplateRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { u as useAsyncData, _ as __nuxt_component_3 } from './asyncData-BICxzpjz.mjs';
import { useElementSize } from '@vueuse/core';
import { geoPath, geoGraticule } from 'd3-geo';
import { geoNicolosi } from 'd3-geo-projection';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { s as shortenUrl } from './index-D1IrLfHv.mjs';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { q as queryCollection } from './client-B23pzL1B.mjs';
import { _ as _export_sfc } from './server.mjs';
import './index-B5zsnP7H.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
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
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "congresosBrowser",
  __ssrInlineRender: true,
  props: {
    congresos: {},
    selectedItem: {},
    selectedTitle: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const allList = computed(() => props.congresos);
    const congresosNacionales = computed(
      () => allList.value.filter((c) => (c.nacional_num ?? 0) > 0)
    );
    const congresosHispanoamericanos = computed(
      () => allList.value.filter((c) => (c.hispano_num ?? 0) > 0)
    );
    const congresosInternacionales = computed(
      () => allList.value.filter((c) => (c.internacional_num ?? 0) > 0)
    );
    const firstNacionalNum = computed(
      () => Number(congresosNacionales.value[0]?.nacional_num ?? 0)
    );
    const firstHispanoamericanoNum = computed(
      () => Number(congresosHispanoamericanos.value[0]?.hispano_num ?? 0)
    );
    const firstInternacionalNum = computed(
      () => Number(congresosInternacionales.value[0]?.internacional_num ?? 0)
    );
    const firstNacionalString = computed(
      () => `${congresosNacionales.value[0]?.lugar ?? ""} ${congresosNacionales.value[0]?.year ?? ""}`.trim()
    );
    const firstHispanoamericanoString = computed(
      () => `${congresosHispanoamericanos.value[0]?.lugar ?? ""} ${congresosHispanoamericanos.value[0]?.year ?? ""}`.trim()
    );
    const firstInternacionalString = computed(
      () => `${congresosInternacionales.value[0]?.lugar ?? ""} ${congresosInternacionales.value[0]?.year ?? ""}`.trim()
    );
    const romanize = (num) => {
      const lookup = {
        M: 1e3,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let roman = "";
      for (const [key, value] of Object.entries(lookup)) {
        while (num >= value) {
          roman += key;
          num -= value;
        }
      }
      return roman;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"><div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstNacionalNum)))}</h3><p class="text-xs text-center text-gray-500">Nacional</p><p class="mt-4 text-xs py-2 italic text-center bg-blu-500 text-white">${ssrInterpolate(unref(firstNacionalString))}</p><div class="mt-4"><!--[-->`);
      ssrRenderList(unref(congresosNacionales), (congreso) => {
        _push(`<button class="py-2 w-full border-b border-gray-200 cursor-pointer group"><div class="flex justify-between items-end text-[10px]"><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500 " : "text-gray-800", "font-bold group-hover:text-rosso-500"])}">${ssrInterpolate(romanize(Number(congreso.nacional_num)))}</p><p class="italic text-gray-500 text-right">${ssrInterpolate(congreso.year)}</p></div><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500" : "text-gray-500", "text-right text-xs text-gray-800"])}">${ssrInterpolate(congreso.lugar)}</p></button>`);
      });
      _push(`<!--]--></div></div><div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstHispanoamericanoNum)))}</h3><p class="text-xs text-center text-gray-500">Hispanoamericano</p><p class="mt-4 text-xs py-2 italic text-center bg-azzurro-500 text-white">${ssrInterpolate(unref(firstHispanoamericanoString))}</p><div class="mt-4"><!--[-->`);
      ssrRenderList(unref(congresosHispanoamericanos), (congreso) => {
        _push(`<button class="py-2 w-full border-b border-gray-200 cursor-pointer group"><div class="flex justify-between items-end text-[10px]"><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500 " : "text-gray-800", "font-bold group-hover:text-rosso-500"])}">${ssrInterpolate(romanize(Number(congreso.hispano_num)))}</p><p class="italic text-gray-500 text-right">${ssrInterpolate(congreso.year)}</p></div><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500" : "text-gray-500", "text-right text-xs text-gray-800"])}">${ssrInterpolate(congreso.lugar)}</p></button>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(congresosInternacionales).length > 0) {
        _push(`<div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstInternacionalNum)))}</h3><p class="text-xs text-center text-gray-500">Internacional</p><p class="mt-4 text-xs py-2 italic text-center bg-rosso-500 text-white">${ssrInterpolate(unref(firstInternacionalString))}</p><div class="mt-4"><!--[-->`);
        ssrRenderList(unref(congresosInternacionales), (congreso) => {
          _push(`<button class="py-2 w-full border-b border-gray-200 cursor-pointer group"><div class="flex justify-between items-end text-[10px]"><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500 " : "text-gray-800", "font-bold group-hover:text-rosso-500"])}">${ssrInterpolate(romanize(Number(congreso.internacional_num)))}</p><p class="italic text-gray-500 text-right">${ssrInterpolate(congreso.year)}</p></div><p class="${ssrRenderClass([congreso.slug == __props.selectedItem ? "text-rosso-500" : "text-gray-500", "text-right text-xs text-gray-800"])}">${ssrInterpolate(congreso.lugar)}</p></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/congresosBrowser.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "CongresosBrowser" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "worldMap",
  __ssrInlineRender: true,
  props: {
    lugares: { default: () => [] },
    selectedLugar: { default: void 0 }
  },
  setup(__props) {
    const svgContainer = useTemplateRef("svg-container");
    const { width, height } = useElementSize(svgContainer);
    const canvasSize = computed(() => ({ width: width.value, height: height.value }));
    computed(() => `0 0 ${canvasSize.value.width} ${canvasSize.value.height}`);
    const props = __props;
    const worldGeo = ref(null);
    const riversGeo = ref(null);
    const projection = computed(() => {
      if (!width.value || !height.value || !worldGeo.value) return null;
      return geoNicolosi().fitSize([width.value, height.value * 0.95], worldGeo.value);
    });
    const pathGen = computed(() => projection.value ? geoPath(projection.value) : null);
    computed(() => {
      if (!pathGen.value) return "";
      return pathGen.value({ type: "Sphere" }) ?? "";
    });
    computed(() => {
      if (!pathGen.value) return "";
      return pathGen.value(geoGraticule()()) ?? "";
    });
    computed(() => {
      if (!pathGen.value || !worldGeo.value) return [];
      return worldGeo.value.features.map((feature) => pathGen.value(feature) ?? "");
    });
    computed(() => {
      if (!pathGen.value || !riversGeo.value) return [];
      return riversGeo.value.features.map((feature) => pathGen.value(feature) ?? "");
    });
    computed(() => {
      if (!props.selectedLugar) return null;
      return props.lugares.find((l) => l.lugar === props.selectedLugar) || null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/worldMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "WorldMap" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    function formatDayMonth(date) {
      if (!date) return "";
      const d = typeof date === "string" ? new Date(date) : date;
      if (isNaN(d.getTime())) return "";
      const day = d.getDate();
      const month = d.toLocaleString("es-ES", { month: "long" });
      return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
    }
    function formatDayMonthYear(date) {
      if (!date) return "";
      const d = typeof date === "string" ? new Date(date) : date;
      if (isNaN(d.getTime())) return "";
      const day = d.getDate();
      const month = d.toLocaleString("es-ES", { month: "long" });
      const year = d.getFullYear();
      return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    }
    const isOpen = ref(false);
    const selectedItem = ref(void 0);
    const selectedTitle = ref(void 0);
    const selectItem = (identifier, title) => {
      selectedItem.value = identifier;
      selectedTitle.value = title;
      isOpen.value = !!identifier;
    };
    const togglePannel = () => {
      isOpen.value = !isOpen.value;
      if (!isOpen.value) {
        selectedItem.value = void 0;
        selectedTitle.value = void 0;
      }
    };
    const { data: congresos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("congresos_list", () => {
      return queryCollection("congresos").order("year", "DESC").all();
    })), __temp = await __temp, __restore(), __temp);
    const uniqueLugares = computed(() => {
      if (!congresos.value) return [];
      const lugares = congresos.value.map((c) => c.lugar).filter(Boolean);
      return Array.from(new Set(lugares));
    });
    const lugaresData = computed(() => {
      return uniqueLugares.value.map((lugar) => {
        const congreso = congresos.value?.find((c) => c.lugar === lugar);
        return {
          lugar,
          lat: congreso?.lat,
          lng: congreso?.lng,
          year: congreso?.year
        };
      }).filter((l) => l.lat && l.lng);
    });
    const { data: introText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("congresos_intro", () => {
      return queryCollection("textos").where("webpage", "=", "congresos").where("section", "=", "intro").first();
    })), __temp = await __temp, __restore(), __temp);
    const { data: sideText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("congresos_side", () => {
      return queryCollection("textos").where("webpage", "=", "congresos").where("section", "=", "lateral").first();
    })), __temp = await __temp, __restore(), __temp);
    const selectedCongreso = computed(() => {
      return congresos.value?.find((c) => c.slug === selectedItem.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomUISidePanel = __nuxt_component_0;
      const _component_UIcon = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ContentRenderer = __nuxt_component_0$2;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_congresosBrowser = __nuxt_component_5;
      const _component_WorldMap = __nuxt_component_6;
      const _component_globalFooter = __nuxt_component_9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CustomUISidePanel, {
        isOpen: unref(isOpen),
        onToggle: togglePannel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-semibold text-lg/6" data-v-94085365${_scopeId}>${ssrInterpolate(unref(selectedTitle))}</p><p class="italic text-gray-300 pt-4 text-base" data-v-94085365${_scopeId}>${ssrInterpolate(unref(selectedCongreso)?.lugar)}</p><p class="italic text-gray-300 pt-1 text-xs" data-v-94085365${_scopeId}>${ssrInterpolate(unref(selectedCongreso)?.sede)}</p>`);
            if (unref(selectedCongreso)?.dateFrom) {
              _push2(`<p class="italic text-gray-300 pt-4 text-sm" data-v-94085365${_scopeId}>${ssrInterpolate(formatDayMonth(unref(selectedCongreso).dateFrom))}`);
              if (unref(selectedCongreso)?.dateTo) {
                _push2(`<span data-v-94085365${_scopeId}> - ${ssrInterpolate(formatDayMonthYear(unref(selectedCongreso).dateTo))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-6 pointer-events-auto border-t border-gray-600 pt-4" data-v-94085365${_scopeId}>`);
            if (unref(selectedCongreso)?.url) {
              _push2(`<a${ssrRenderAttr("href", unref(selectedCongreso)?.url)} target="_blank" class="flex items-center gap-x-2 mb-4 group cursor-pointer pointer-events-auto" rel="noopener noreferrer" data-v-94085365${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "lucide:app-window-mac",
                style: { "color": "white" },
                size: "24"
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-xs italic text-white/70 group-hover:text-white transition-colors duration-300" data-v-94085365${_scopeId}>${ssrInterpolate(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))(unref(selectedCongreso)?.url, 30))}</span></a>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedCongreso)?.actas) {
              _push2(`<div class="pt-4 border-t border-gray-600" data-v-94085365${_scopeId}><p class="font-mono text-xs mb-4 text-gray-400" data-v-94085365${_scopeId}>actas en archive.org:</p><!--[-->`);
              ssrRenderList(unref(selectedCongreso).actas, (acta) => {
                _push2(`<a${ssrRenderAttr("href", "https://archive.org/details/" + acta.identifier)} target="_blank" class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto" rel="noopener noreferrer" data-v-94085365${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "lucide:book-open",
                  style: { "color": "white" },
                  size: "24"
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" data-v-94085365${_scopeId}>${ssrInterpolate(acta.title)}</span></a>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(selectedCongreso)?.image?.src && !unref(selectedCongreso)?.actas) {
              _push2(`<div class="mt-12 hidden lg:block" data-v-94085365${_scopeId}><img${ssrRenderAttr("src", unref(selectedCongreso).image.src)}${ssrRenderAttr("alt", unref(selectedCongreso).image.alt)} class="w-full h-auto border border-gray-300 grayscale" data-v-94085365${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedCongreso)?.actas) {
              _push2(`<div class="mt-6 hidden lg:block" data-v-94085365${_scopeId}><div class="grid grid-cols-3 gap-4" data-v-94085365${_scopeId}><!--[-->`);
              ssrRenderList(unref(selectedCongreso).actas, (acta) => {
                _push2(`<a${ssrRenderAttr("href", "https://archive.org/details/" + acta.identifier)} target="_blank" class="flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto" rel="noopener noreferrer" data-v-94085365${_scopeId}><img${ssrRenderAttr("src", "https://archive.org/services/img/" + acta.identifier)}${ssrRenderAttr("alt", acta.title)} class="w-full h-auto border border-gray-300 grayscale group-hover:grayscale-0 transition-all duration-300" data-v-94085365${_scopeId}></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("p", { class: "font-semibold text-lg/6" }, toDisplayString(unref(selectedTitle)), 1),
              createVNode("p", { class: "italic text-gray-300 pt-4 text-base" }, toDisplayString(unref(selectedCongreso)?.lugar), 1),
              createVNode("p", { class: "italic text-gray-300 pt-1 text-xs" }, toDisplayString(unref(selectedCongreso)?.sede), 1),
              unref(selectedCongreso)?.dateFrom ? (openBlock(), createBlock("p", {
                key: 0,
                class: "italic text-gray-300 pt-4 text-sm"
              }, [
                createTextVNode(toDisplayString(formatDayMonth(unref(selectedCongreso).dateFrom)), 1),
                unref(selectedCongreso)?.dateTo ? (openBlock(), createBlock("span", { key: 0 }, " - " + toDisplayString(formatDayMonthYear(unref(selectedCongreso).dateTo)), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-6 pointer-events-auto border-t border-gray-600 pt-4" }, [
                unref(selectedCongreso)?.url ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: unref(selectedCongreso)?.url,
                  target: "_blank",
                  class: "flex items-center gap-x-2 mb-4 group cursor-pointer pointer-events-auto",
                  rel: "noopener noreferrer"
                }, [
                  createVNode(_component_UIcon, {
                    name: "lucide:app-window-mac",
                    style: { "color": "white" },
                    size: "24"
                  }),
                  createVNode("span", { class: "ml-2 text-xs italic text-white/70 group-hover:text-white transition-colors duration-300" }, toDisplayString(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))(unref(selectedCongreso)?.url, 30)), 1)
                ], 8, ["href"])) : createCommentVNode("", true),
                unref(selectedCongreso)?.actas ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "pt-4 border-t border-gray-600"
                }, [
                  createVNode("p", { class: "font-mono text-xs mb-4 text-gray-400" }, "actas en archive.org:"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCongreso).actas, (acta) => {
                    return openBlock(), createBlock("a", {
                      key: acta.identifier,
                      href: "https://archive.org/details/" + acta.identifier,
                      target: "_blank",
                      class: "flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "lucide:book-open",
                        style: { "color": "white" },
                        size: "24"
                      }),
                      createVNode("span", { class: "ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" }, toDisplayString(acta.title), 1)
                    ], 8, ["href"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ]),
              unref(selectedCongreso)?.image?.src && !unref(selectedCongreso)?.actas ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-12 hidden lg:block"
              }, [
                createVNode("img", {
                  src: unref(selectedCongreso).image.src,
                  alt: unref(selectedCongreso).image.alt,
                  class: "w-full h-auto border border-gray-300 grayscale"
                }, null, 8, ["src", "alt"])
              ])) : createCommentVNode("", true),
              unref(selectedCongreso)?.actas ? (openBlock(), createBlock("div", {
                key: 2,
                class: "mt-6 hidden lg:block"
              }, [
                createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCongreso).actas, (acta) => {
                    return openBlock(), createBlock("a", {
                      key: acta.identifier,
                      href: "https://archive.org/details/" + acta.identifier,
                      target: "_blank",
                      class: "flex items-center gap-x-2 mb-2 group cursor-pointer pointer-events-auto",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode("img", {
                        src: "https://archive.org/services/img/" + acta.identifier,
                        alt: acta.title,
                        class: "w-full h-auto border border-gray-300 grayscale group-hover:grayscale-0 transition-all duration-300"
                      }, null, 8, ["src", "alt"])
                    ], 8, ["href"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="sedhc_grid" data-v-94085365><aside class="w-full h-full bg-revista-500 flex flex-col pb-8" data-v-94085365>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-blu-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-94085365${_scopeId}><p class="text-sm/5 pt-2" data-v-94085365${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      _push(`<article class="px-8 mt-2 lg:mt-12 italic text-gray-100" data-v-94085365>`);
      if (unref(sideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sideText),
          class: "mdtxt mdtxt_side mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article></aside><div class="main_content bg-white" data-v-94085365>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<section class="mt-32" data-v-94085365>`);
      if (unref(introText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(introText),
          class: "mdtxt mdtxt_intro mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="mt-24" data-v-94085365><p class="pt-6 font-mono uppercase text-sm border-b border-dashed font-semibold pb-1 mt-18 mb-8" data-v-94085365>Congresos de Historia de la construcción:</p>`);
      _push(ssrRenderComponent(_component_congresosBrowser, {
        congresos: unref(congresos) ?? [],
        selectedItem: unref(selectedItem),
        selectedTitle: unref(selectedTitle),
        onSelect: selectItem
      }, null, _parent));
      _push(`</section>`);
      if (unref(lugaresData).length) {
        _push(`<section class="mb-12 mt-24" data-v-94085365>`);
        _push(ssrRenderComponent(_component_WorldMap, {
          lugares: unref(lugaresData),
          selectedLugar: unref(selectedCongreso)?.lugar
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_globalFooter, null, null, _parent));
      _push(`</div><div data-v-94085365></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/congresos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94085365"]]);

export { index as default };
//# sourceMappingURL=index-BR3aSo7E.mjs.map

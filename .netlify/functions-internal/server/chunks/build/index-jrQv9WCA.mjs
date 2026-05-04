import { q as queryCollection, _ as __nuxt_component_0, a as __nuxt_component_2 } from './client-C-dpBcZ8.mjs';
import { _ as __nuxt_component_1 } from './rrss-Bl4uyXSR.mjs';
import { u as useAsyncData, _ as __nuxt_component_3 } from './asyncData-BbU2djNp.mjs';
import { _ as _sfc_main$4 } from './Icon-D0CT7Pv4.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-xTfsnHjX.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useTemplateRef, ref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useElementSize } from '@vueuse/core';
import { _ as __nuxt_component_9 } from './globalFooter-DfeFPIeh.mjs';
import { _ as _imports_0 } from './virtual_public-Bz1bRblL.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'property-information';
import './node-CIB8iVlG.mjs';
import 'minimark/hast';
import 'perfect-debounce';
import './index-DSYAIBMp.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
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
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "congresosHome",
  __ssrInlineRender: true,
  props: {
    congresos: {},
    selectedItem: {},
    selectedTitle: {}
  },
  setup(__props) {
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"><div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstNacionalNum)))}</h3><p class="text-xs text-center text-gray-500">Nacional</p><p class="mt-4 text-xs py-2 italic text-center bg-blu-500 text-white">${ssrInterpolate(unref(firstNacionalString))}</p></div><div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstHispanoamericanoNum)))}</h3><p class="text-xs text-center text-gray-500">Hispanoamericano</p><p class="mt-4 text-xs py-2 italic text-center bg-azzurro-500 text-white">${ssrInterpolate(unref(firstHispanoamericanoString))}</p></div>`);
      if (unref(congresosInternacionales).length > 0) {
        _push(`<div><h3 class="font-bold text-center text-6xl py-4">${ssrInterpolate(romanize(unref(firstInternacionalNum)))}</h3><p class="text-xs text-center text-gray-500">Internacional</p><p class="mt-4 text-xs py-2 italic text-center bg-rosso-500 text-white">${ssrInterpolate(unref(firstInternacionalString))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/congresosHome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$3, { __name: "CongresosHome" });
const padding = 80;
const charWidth = 12;
const lineHeight = 24;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "lugaresCartogram",
  __ssrInlineRender: true,
  props: {
    lugares: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const container = useTemplateRef("container");
    const { width, height } = useElementSize(container);
    const canvasSize = computed(() => ({ width: width.value, height: height.value }));
    const viewBox = computed(() => `0 0 ${canvasSize.value.width} ${canvasSize.value.height}`);
    const bounds = computed(() => {
      const validLugares = props.lugares.filter((l) => l.lat != null && l.lng != null);
      if (!validLugares.length) return null;
      const lngs = validLugares.map((l) => l.lng);
      const lats = validLugares.map((l) => l.lat);
      return {
        minLng: Math.min(...lngs),
        maxLng: Math.max(...lngs),
        minLat: Math.min(...lats),
        maxLat: Math.max(...lats)
      };
    });
    const project = (lng, lat) => {
      const b = bounds.value;
      if (!b) return [0, 0];
      const x = padding + (lng - b.minLng) / (b.maxLng - b.minLng) * (width.value - padding * 2);
      const y = padding + (b.maxLat - lat) / (b.maxLat - b.minLat) * (height.value - padding * 2);
      return [x, y];
    };
    const yearColor = (year, minYear, maxYear) => {
      if (!year) return "#999";
      const t = maxYear === minYear ? 1 : (year - minYear) / (maxYear - minYear);
      const v = Math.round(187 - t * 165);
      return `rgb(${v},${v},${v})`;
    };
    const resolveOverlaps = (labels, iterations = 80) => {
      const result = labels.map((l) => ({ ...l }));
      const clamp = (label) => {
        const scaledCharWidth = charWidth * (label.fontSize / 10);
        const hw = label.lugar.length * scaledCharWidth / 2;
        const hh = lineHeight / 2;
        label.x = Math.max(hw, Math.min(width.value - hw, label.x));
        label.y = Math.max(hh, Math.min(height.value - hh, label.y));
      };
      for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < result.length; i++) {
          for (let j = i + 1; j < result.length; j++) {
            const a = result[i];
            const b = result[j];
            const aw = a.lugar.length * charWidth / 2;
            const bw = b.lugar.length * charWidth / 2;
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const overlapX = aw + bw - Math.abs(dx);
            const overlapY = lineHeight - Math.abs(dy);
            if (overlapX > 0 && overlapY > 0) {
              const push = 1.2;
              const signX = dx === 0 ? 1 : Math.sign(dx);
              const signY = dy === 0 ? 1 : Math.sign(dy);
              a.x -= signX * push;
              b.x += signX * push;
              a.y -= signY * push;
              b.y += signY * push;
            }
          }
        }
        result.forEach(clamp);
      }
      return result;
    };
    const resolvedLabels = computed(() => {
      if (!width.value || !height.value || !props.lugares.length) return [];
      const validLugares = props.lugares.filter(
        (l) => l.lat != null && l.lng != null
      );
      const years = validLugares.map((l) => l.year ?? 0).filter(Boolean);
      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);
      const initial = validLugares.map((l) => {
        const [x, y] = project(l.lng, l.lat);
        const t = maxYear === minYear || !l.year ? 1 : (l.year - minYear) / (maxYear - minYear);
        const fontSize = Math.round(10 + t * 14);
        return { lugar: l.lugar, x, y, color: yearColor(l.year, minYear, maxYear), fontSize };
      });
      return resolveOverlaps(initial);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "h-72 w-full"
      }, _attrs))}><svg${ssrRenderAttr("viewBox", unref(viewBox))}${ssrRenderAttr("width", unref(canvasSize).width)}${ssrRenderAttr("height", unref(canvasSize).height)} class="w-full h-full" preserveAspectRatio="xMidYMid meet"><rect width="100%" height="100%" fill="#fff"></rect><!--[-->`);
      ssrRenderList(unref(resolvedLabels), (label) => {
        _push(`<text${ssrRenderAttr("x", label.x)}${ssrRenderAttr("y", label.y)}${ssrRenderAttr("fill", label.color)}${ssrRenderAttr("font-size", label.fontSize)} text-anchor="middle" dominant-baseline="middle" class="cursor-default select-none font-semibold">${ssrInterpolate(label.lugar)}</text>`);
      });
      _push(`<!--]--></svg></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lugaresCartogram.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "LugaresCartogram" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tratadosHome",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: archiveResults } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "archive-random",
      () => $fetch("https://archive.org/advancedsearch.php?q=uploader:*sedhc*&fl[]=identifier&fl[]=title&fl[]=creator&fl[]=date&fl[]=description&fl[]=downloads&rows=24&page=1&output=json")
    )), __temp = await __temp, __restore(), __temp);
    computed(() => {
      if (archiveResults.value?.response?.docs) {
        return archiveResults.value.response.docs.map((doc) => {
          let shortTitle = doc.title;
          if (typeof shortTitle === "string") {
            const dotIdx = shortTitle.indexOf(".");
            if (dotIdx !== -1) {
              shortTitle = shortTitle.slice(dotIdx + 1).trim();
            }
          }
          return {
            identifier: doc.identifier,
            title: doc.title,
            shortTitle,
            author: doc.creator,
            year: doc.date ? new Date(doc.date).getFullYear() : "s.f.",
            description: doc.description,
            downloads: doc.downloads
          };
        });
      }
      return [];
    });
    const randomItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tratados",
        class: "w-full group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(randomItems).length) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 items-start"${_scopeId}><!--[-->`);
              ssrRenderList(unref(randomItems), (item) => {
                _push2(`<div${_scopeId}><div class="aspect-2/3 flex flex-col justify-center mb-4"${_scopeId}><div class="border-0 border-gray-200 shadow-md aspect-2/3 mt-6"${_scopeId}><img${ssrRenderAttr("src", `https://archive.org/services/img/${item.identifier}`)}${ssrRenderAttr("alt", item.shortTitle)} class="p-5 w-full h-auto"${_scopeId}></div></div><p class="text-xs italic text-gray-500"${_scopeId}>${ssrInterpolate(item.year)} - ${ssrInterpolate(item.author)}</p><h2 class="text-sm/5 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"${_scopeId}>${ssrInterpolate(item.shortTitle)}</h2></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(randomItems).length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 items-start"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(randomItems), (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.identifier
                  }, [
                    createVNode("div", { class: "aspect-2/3 flex flex-col justify-center mb-4" }, [
                      createVNode("div", { class: "border-0 border-gray-200 shadow-md aspect-2/3 mt-6" }, [
                        createVNode("img", {
                          src: `https://archive.org/services/img/${item.identifier}`,
                          alt: item.shortTitle,
                          class: "p-5 w-full h-auto"
                        }, null, 8, ["src", "alt"])
                      ])
                    ]),
                    createVNode("p", { class: "text-xs italic text-gray-500" }, toDisplayString(item.year) + " - " + toDisplayString(item.author), 1),
                    createVNode("h2", { class: "text-sm/5 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300" }, toDisplayString(item.shortTitle), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tratadosHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "TratadosHome" });
const _imports_1 = publicAssetsURL("/img/ilustraciones/gotico.jpg");
const _imports_2 = publicAssetsURL("/img/revista/RevistaHC.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: textos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("textos_home", () => {
      return queryCollection("textos").where("webpage", "=", "home").all();
    })), __temp = await __temp, __restore(), __temp);
    const sideText = computed(() => textos.value?.find((t) => t.section === "side"));
    const introText = computed(() => textos.value?.find((t) => t.section === "intro"));
    const sociedadText = computed(() => textos.value?.find((t) => t.section === "sociedad"));
    const tratadosText = computed(() => textos.value?.find((t) => t.section === "tratados"));
    const revistaText = computed(() => textos.value?.find((t) => t.section === "revista"));
    const { data: congresosSideText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("congresos_side", () => {
      return queryCollection("textos").where("webpage", "=", "congresos").where("section", "=", "lateral").first();
    })), __temp = await __temp, __restore(), __temp);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0;
      const _component_rrss = __nuxt_component_1;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_UIcon = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CongresosHome = __nuxt_component_6;
      const _component_LugaresCartogram = __nuxt_component_7;
      const _component_TratadosHome = __nuxt_component_8;
      const _component_globalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-3cd1e1fc><div class="bg-chiaro-50 flex flex-col pb-6" data-v-3cd1e1fc><aside class="py-6 px-8 lg:aspect-square text-2xl transition-colors duration-300 border-b border-white" data-v-3cd1e1fc><div class="h-full w-full block" data-v-3cd1e1fc><img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-30 w-auto mt-2 mix-blend-multiply bg-white" data-v-3cd1e1fc><p class="pt-4 tracking-tight" data-v-3cd1e1fc>Sociedad Española de Historia de la Construcción<span class="text-giallo-500 font-bold" data-v-3cd1e1fc>.</span></p></div></aside><section class="p-8 pt-10 text-sm text-gray-600" data-v-3cd1e1fc>`);
      if (unref(sideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sideText),
          class: "mdtxt mdtxt_side"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_rrss, null, null, _parent));
      _push(`</div><div class="main_content" data-v-3cd1e1fc>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(introText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(introText),
          class: "mdtxt mdtxt_intro mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", _imports_1)} alt="Gótico" class="my-12" data-v-3cd1e1fc><div class="md:columns-2 gap-x-8 mt-6" data-v-3cd1e1fc>`);
      if (unref(sociedadText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sociedadText),
          class: "mdtxt mdtxt_two_c"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-3cd1e1fc><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-3cd1e1fc>la revista</p><a href="https://polipapers.upv.es/index.php/HC/" class="text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300" rel="noopener noreferrer" target="_blank" data-v-3cd1e1fc> consultar `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:external-link",
        class: "size-4 ml-2 text-rosso-500"
      }, null, _parent));
      _push(`</a></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-sm" data-v-3cd1e1fc><div class="aspect-square" data-v-3cd1e1fc><img${ssrRenderAttr("src", _imports_2)} alt="revista" class="w-full h-auto" data-v-3cd1e1fc></div><div class="md:col-span-2" data-v-3cd1e1fc>`);
      if (unref(revistaText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(revistaText),
          class: "mdtxt mdtxt_two_c"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-3cd1e1fc><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-3cd1e1fc>los congresos de historia de la construcción</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/congresos",
        class: "text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` consultar `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:arrow-right",
              class: "size-4 ml-2 text-rosso-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" consultar "),
              createVNode(_component_UIcon, {
                name: "lucide:arrow-right",
                class: "size-4 ml-2 text-rosso-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CongresosHome, {
        congresos: unref(congresos) ?? []
      }, null, _parent));
      _push(`<section data-v-3cd1e1fc>`);
      if (unref(congresosSideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(congresosSideText),
          class: "mdtxt mdtxt_one_c mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="mt-12 mb-0" data-v-3cd1e1fc>`);
      _push(ssrRenderComponent(_component_LugaresCartogram, { lugares: unref(lugaresData) }, null, _parent));
      _push(`</section><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-3cd1e1fc><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-3cd1e1fc>biblioteca digital: tratados</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tratados",
        class: "text-gray-500 hover:text-rosso-500 font-mono text-xs uppercase flex items-center mb-1 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` consultar `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:arrow-right",
              class: "size-4 ml-2 text-rosso-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" consultar "),
              createVNode(_component_UIcon, {
                name: "lucide:arrow-right",
                class: "size-4 ml-2 text-rosso-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:columns-2 gap-8 mt-6" data-v-3cd1e1fc>`);
      if (unref(tratadosText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(tratadosText),
          class: "mdtxt mdtxt_two_c"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TratadosHome, null, null, _parent));
      _push(ssrRenderComponent(_component_globalFooter, null, null, _parent));
      _push(`</div><div data-v-3cd1e1fc></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3cd1e1fc"]]);

export { index as default };
//# sourceMappingURL=index-jrQv9WCA.mjs.map

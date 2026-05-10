import { _ as __nuxt_component_0 } from './sidePanel-DlTQLQGe.mjs';
import { _ as _sfc_main$1 } from './Icon-CKWyHDbt.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_0$2 } from './ContentRenderer-DW1XsLUr.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_6 } from './selectView-OpQGQiPf.mjs';
import __nuxt_component_7 from './index-B5zsnP7H.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { defineComponent, ref, computed, withAsyncContext, watch, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { u as useAsyncData } from './asyncData-BICxzpjz.mjs';
import { q as queryCollection } from './client-B23pzL1B.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
import '@vueuse/core';
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

const maxOnPage = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const isOpen = ref(false);
    const selectedItem = ref(void 0);
    const selectedTitle = ref(void 0);
    const selectedPdfUrl = computed(() => {
      if (archiveMetadata.value && archiveMetadata.value.files) {
        const pdfFile = archiveMetadata.value.files.find((file) => file.format === "Text PDF");
        return pdfFile ? `https://archive.org/download/${selectedItem.value}/${pdfFile.name}` : null;
      }
      return null;
    });
    const { data: archiveMetadata } = useAsyncData(
      "archive-metadata",
      () => selectedItem.value ? $fetch(`https://archive.org/metadata/${selectedItem.value}`) : Promise.resolve(null),
      { watch: [selectedItem] }
    );
    const { data: sideText } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("libros_lateral", () => {
      return queryCollection("textos").where("webpage", "=", "libros").where("section", "=", "lateral").first();
    })), __temp = await __temp, __restore(), __temp);
    const togglePannel = () => {
      isOpen.value = !isOpen.value;
      if (!isOpen.value) {
        selectedItem.value = void 0;
        selectedTitle.value = void 0;
      }
    };
    const { data: archiveResults, error: archiveError } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "publications",
      () => $fetch("https://archive.org/advancedsearch.php?q=Textos+sobre+Teoría+e+Historia+de+las+Construcciones&fl[]=uploader&rows=200&output=json")
    )), __temp = await __temp, __restore(), __temp);
    const archiveItems = computed(() => {
      if (archiveResults.value && archiveResults.value.response && archiveResults.value.response.docs) {
        return archiveResults.value.response.docs.map((doc) => {
          let shortTitle = doc.title;
          if (typeof shortTitle === "string") {
            const dotIdx = shortTitle.indexOf(".");
            if (dotIdx !== -1) {
              shortTitle = shortTitle.slice(dotIdx + 1).trim();
            }
          }
          let description = doc.description;
          if (typeof description === "string") {
            description = description.replace(/\[Textos sobre Teoría e Historia de las Construcciones\]/gi, "").trim();
          }
          return {
            identifier: doc.identifier,
            title: doc.title,
            shortTitle,
            author: Array.isArray(doc.creator) ? doc.creator.length <= 4 ? doc.creator.join(", ") : "VV.AA." : doc.creator,
            year: doc.year || (new Date(doc.date).getFullYear() || "s.f."),
            description,
            downloads: doc.downloads,
            subject: doc.subject
          };
        });
      }
      return [];
    });
    const currentPage = ref(1);
    const filteredItems = computed(() => {
      let filterOutput = archiveItems.value;
      if (!selectedSubject.value) ;
      else {
        filterOutput = archiveItems.value.filter((item) => {
          if (item.subject) {
            if (Array.isArray(item.subject)) {
              return item.subject.includes(selectedSubject.value);
            }
          }
          return false;
        });
      }
      if (searchString.value && searchString.value.trim() !== "" && searchString.value.length > 2) {
        filterOutput = filterOutput.filter((item) => {
          return item.title.toLowerCase().includes(searchString.value.toLowerCase());
        });
      }
      if (sortBy.value === "year") {
        filterOutput = [...filterOutput].sort((a, b) => {
          const yearA = a.year === "s.f." ? 0 : Number(a.year);
          const yearB = b.year === "s.f." ? 0 : Number(b.year);
          return sortOrder.value === "asc" ? yearA - yearB : yearB - yearA;
        });
      } else if (sortBy.value === "downloads") {
        filterOutput = [...filterOutput].sort((a, b) => {
          const downloadsA = a.downloads || 0;
          const downloadsB = b.downloads || 0;
          return sortOrder.value === "asc" ? downloadsA - downloadsB : downloadsB - downloadsA;
        });
      }
      return filterOutput;
    });
    const pagedItems = computed(() => {
      const startIdx = (currentPage.value - 1) * maxOnPage;
      return filteredItems.value.slice(startIdx, startIdx + maxOnPage);
    });
    const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.value.length / maxOnPage)));
    const subjectCounts = computed(() => {
      const counts = {};
      archiveItems.value.forEach((item) => {
        if (item.subject) {
          if (Array.isArray(item.subject)) {
            item.subject.forEach((sub) => {
              counts[sub] = (counts[sub] || 0) + 1;
            });
          }
        }
      });
      return counts;
    });
    const topSubjects = computed(() => {
      const sortedSubjects = Object.entries(subjectCounts.value).sort((a, b) => b[1] - a[1]);
      return sortedSubjects.filter(([sub, count]) => count >= archiveItems.value.length / 10);
    });
    const selectedSubject = ref(null);
    const sortBy = ref("downloads");
    const sortOrder = ref("desc");
    const searchString = ref("");
    const showAs = ref("list");
    watch(filteredItems, () => {
      currentPage.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomUISidePanel = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ContentRenderer = __nuxt_component_0$2;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_selectSort = __nuxt_component_5;
      const _component_selectView = __nuxt_component_6;
      const _component_Icon = __nuxt_component_7;
      const _component_globalFooter = __nuxt_component_9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CustomUISidePanel, {
        isOpen: unref(isOpen),
        onToggle: togglePannel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between pb-2 mb-8" data-v-80568e1f${_scopeId}><img src="https://archive.org/download/ia-logo-white-transparent/ia-logo-white-transparent.png" alt="internet archive" class="max-w-1/2 lg:max-w-3/4 h-auto my-2" data-v-80568e1f${_scopeId}></div><p class="font-semibold text-lg/6" data-v-80568e1f${_scopeId}>${ssrInterpolate(unref(selectedTitle))}</p><div class="mt-8 mb-8 pointer-events-auto" data-v-80568e1f${_scopeId}><a${ssrRenderAttr("href", "https://archive.org/details/" + unref(selectedItem))} target="_blank" class="flex items-center gap-x-2 mb-2 group" rel="noopener noreferrer" data-v-80568e1f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:book-open",
              style: { "color": "white" },
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" data-v-80568e1f${_scopeId}>consultar en archive.org</span></a>`);
            if (unref(selectedPdfUrl)) {
              _push2(`<a${ssrRenderAttr("href", unref(selectedPdfUrl) ? unref(selectedPdfUrl) : "#")} target="_blank" class="flex items-center gap-x-2 group" rel="noopener noreferrer" data-v-80568e1f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "lucide:hard-drive-download",
                style: { "color": "white" },
                size: "24"
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" data-v-80568e1f${_scopeId}>descargar pdf</span></a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between pb-2 mb-8" }, [
                createVNode("img", {
                  src: "https://archive.org/download/ia-logo-white-transparent/ia-logo-white-transparent.png",
                  alt: "internet archive",
                  class: "max-w-1/2 lg:max-w-3/4 h-auto my-2"
                })
              ]),
              createVNode("p", { class: "font-semibold text-lg/6" }, toDisplayString(unref(selectedTitle)), 1),
              createVNode("div", { class: "mt-8 mb-8 pointer-events-auto" }, [
                createVNode("a", {
                  href: "https://archive.org/details/" + unref(selectedItem),
                  target: "_blank",
                  class: "flex items-center gap-x-2 mb-2 group",
                  rel: "noopener noreferrer"
                }, [
                  createVNode(_component_UIcon, {
                    name: "lucide:book-open",
                    style: { "color": "white" },
                    size: "24"
                  }),
                  createVNode("span", { class: "ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" }, "consultar en archive.org")
                ], 8, ["href"]),
                unref(selectedPdfUrl) ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: unref(selectedPdfUrl) ? unref(selectedPdfUrl) : "#",
                  target: "_blank",
                  class: "flex items-center gap-x-2 group",
                  rel: "noopener noreferrer"
                }, [
                  createVNode(_component_UIcon, {
                    name: "lucide:hard-drive-download",
                    style: { "color": "white" },
                    size: "24"
                  }),
                  createVNode("span", { class: "ml-2 text-sm italic text-white/70 group-hover:text-white transition-colors duration-300" }, "descargar pdf")
                ], 8, ["href"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="sedhc_grid" data-v-80568e1f><aside class="w-full h-full bg-neutro-500 flex flex-col" data-v-80568e1f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full bg-verde-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-80568e1f${_scopeId}><p class="text-sm/5 pt-2" data-v-80568e1f${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
      _push(`<article class="px-8 py-8" data-v-80568e1f><div class="mb-10" data-v-80568e1f>`);
      if (unref(sideText)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(sideText),
          class: "mdtxt mdtxt_side"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><hr class="styled after:bg-neutro-500" data-v-80568e1f><div class="mt-12" data-v-80568e1f><!--[-->`);
      ssrRenderList(unref(topSubjects), (subject) => {
        _push(`<div data-v-80568e1f><p class="flex justify-between pb-1 group text-gray-800 cursor-pointer" data-v-80568e1f><strong class="${ssrRenderClass([unref(selectedSubject) === subject[0] || !unref(selectedSubject) ? "text-mist-800 font-semibold" : "  group-hover:text-gray-500 text-mist-500", "font-bold text-xs -ml-1 transition-colors duration-100"])}" data-v-80568e1f>${ssrInterpolate(subject[0])}: </strong><span class="${ssrRenderClass([unref(selectedSubject) === subject[0] || !unref(selectedSubject) ? "text-mist-800" : "text-mist-500", "italic text-gray-600 text-xs"])}" data-v-80568e1f>${ssrInterpolate(subject[1])}</span></p></div>`);
      });
      _push(`<!--]--></div></article></aside><div class="main_content bg-white" data-v-80568e1f>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<div class="mb-2 grid md:grid-cols-3 gap-2 md:gap-8 border-b border-dashed border-gray-400 py-6" data-v-80568e1f>`);
      _push(ssrRenderComponent(_component_selectSort, {
        "model-value": unref(sortBy),
        "sort-order": unref(sortOrder),
        "onUpdate:sortBy": ($event) => sortBy.value = $event,
        "onUpdate:sortOrder": ($event) => sortOrder.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_selectView, {
        "model-value": unref(showAs),
        "onUpdate:modelValue": ($event) => showAs.value = $event
      }, null, _parent));
      _push(`<div class="relative" data-v-80568e1f><input type="search" id="site-search" name="q"${ssrRenderAttr("value", unref(searchString))} placeholder="Buscar …" class="font-mono text-xs border-b border-gray-400 focus:border-rosso-500 focus:ring-0 focus:outline-none transition-colors duration-200 w-full mb-0 md:mb-0 pl-6 pb-1.5" data-v-80568e1f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        style: { "color": "black" },
        size: "18",
        class: "absolute top-3 left-0 -translate-y-1/2 text-gray-400 pointer-events-none"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col md:flex-row md:items-center justify-between gap-y-2 md:gap-4 mb-16 z-5 md:sticky top-0 bg-white pb-3" data-v-80568e1f><p class="font-mono text-xs text-gray-500 pt-2 md:pt-0" data-v-80568e1f>mostrando publicaciones de <span class="text-scuro-900 font-semibold" data-v-80568e1f>${ssrInterpolate((unref(currentPage) - 1) * maxOnPage + 1)}</span> a <span class="text-scuro-900 font-semibold" data-v-80568e1f>${ssrInterpolate(Math.min(unref(currentPage) * maxOnPage, unref(filteredItems).length))}</span> de <span class="text-scuro-900 font-semibold" data-v-80568e1f>${ssrInterpolate(unref(filteredItems).length)}</span></p><div class="font-mono" data-v-80568e1f><ul class="inline-flex gap-1 text-xs" data-v-80568e1f>`);
      if (unref(currentPage) > 1) {
        _push(`<li class="cursor-pointer px-1 py-1 rounded hover:bg-gray-200" data-v-80568e1f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-left",
          style: { "color": "#333" },
          size: "16"
        }, null, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(totalPages), (page) => {
        _push(`<li class="${ssrRenderClass([page === unref(currentPage) ? "text-black  font-bold" : "hover:bg-gray-200 font-normal text-gray-500", "cursor-pointer px-1 py-1"])}" data-v-80568e1f>${ssrInterpolate(page)}</li>`);
      });
      _push(`<!--]-->`);
      if (unref(currentPage) < unref(totalPages)) {
        _push(`<li class="cursor-pointer px-1 py-1 rounded hover:bg-gray-200" data-v-80568e1f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-right",
          style: { "color": "#333" },
          size: "16"
        }, null, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div>`);
      if (unref(showAs) === "list") {
        _push(`<section class="mt-8" data-v-80568e1f><!--[-->`);
        ssrRenderList(unref(pagedItems), (item) => {
          _push(`<div class="mb-6 pb-4 grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-12 items-start cursor-pointer group" data-v-80568e1f><div data-v-80568e1f><img${ssrRenderAttr("src", `https://archive.org/services/img/${item.identifier}`)} alt="item.shortTitle" class="pt-6 group-hover:scale-105 transition-transform duration-300" data-v-80568e1f></div><div data-v-80568e1f><p class="text-sm italic text-gray-500" data-v-80568e1f>${ssrInterpolate(item.year)} - ${ssrInterpolate(item.author)}</p><h2 class="${ssrRenderClass([unref(selectedItem) === item.identifier ? "text-rosso-500" : "", "text-xl/7 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"])}" data-v-80568e1f>${ssrInterpolate(item.shortTitle)}</h2><p class="pl-3 text-base/6 italic text-gray-600" data-v-80568e1f>${ssrInterpolate(item.description)}</p><p class="font-mono text-xs pl-3 pt-2 text-gray-500" data-v-80568e1f>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:cloud-download",
            style: { "color": "#6b7280" },
            size: "14",
            class: "inline-block mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(item.downloads)}</p></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showAs) === "grid") {
        _push(`<section class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 items-start" data-v-80568e1f><!--[-->`);
        ssrRenderList(unref(pagedItems), (item) => {
          _push(`<div class="mb-4 cursor-pointer group" data-v-80568e1f><div class="border-t border-gray-200 aspect-2/3 flex flex-col justify-center mb-2" data-v-80568e1f><img${ssrRenderAttr("src", `https://archive.org/services/img/${item.identifier}`)} alt="item.shortTitle" class="p-3 w-full h-auto group-hover:scale-105 transition-transform duration-300" data-v-80568e1f></div><div data-v-80568e1f><p class="text-xs italic text-gray-500" data-v-80568e1f>${ssrInterpolate(item.year)} - ${ssrInterpolate(item.author)}</p><h2 class="${ssrRenderClass([unref(selectedItem) === item.identifier ? "text-rosso-500" : "", "text-sm/5 mb-2 mt-1 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"])}" data-v-80568e1f>${ssrInterpolate(item.shortTitle)}</h2></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showAs) === "compact") {
        _push(`<section class="mt-8" data-v-80568e1f><!--[-->`);
        ssrRenderList(unref(pagedItems), (item) => {
          _push(`<div class="pb-4 cursor-pointer group" data-v-80568e1f><p class="text-xs italic text-gray-500" data-v-80568e1f>${ssrInterpolate(item.year)} - ${ssrInterpolate(item.author)}</p><h2 class="${ssrRenderClass([unref(selectedItem) === item.identifier ? "text-rosso-500" : "", "text-sm/5 pl-2 text-gray-900 font-semibold group-hover:text-rosso-500 transition-colors duration-300"])}" data-v-80568e1f>${ssrInterpolate(item.shortTitle)}</h2></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_globalFooter, null, null, _parent));
      _push(`</div><div data-v-80568e1f></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/libros/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80568e1f"]]);

export { index as default };
//# sourceMappingURL=index-BRNrEFTA.mjs.map

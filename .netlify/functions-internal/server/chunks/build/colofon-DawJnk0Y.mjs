import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DuCtqGFj.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_1 = publicAssetsURL("/img/internet_archive.png");
const _imports_2 = publicAssetsURL("/img/negot_footer.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_globalFooter = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-9b443965><aside class="w-full h-full bg-verdechiaro-500 flex flex-col pb-8" data-v-9b443965>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "w-full bg-verde-500 hover:bg-scuro-900 transition-colors duration-300 text-white flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-screen bg-black" data-v-9b443965${_scopeId}><p class="text-sm/5 pt-2" data-v-9b443965${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
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
  _push(`<article class="px-8 mt-2 lg:mt-12 italic text-gray-100" data-v-9b443965></article></aside><div class="main_content bg-white min-h-screen" data-v-9b443965><h2 class="text-4xl font-bold mb-4 mt-3" data-v-9b443965>colofón<span class="text-verdechiaro-500" data-v-9b443965>:</span></h2><div class="mt-12 colofon mr-24 mb-24" data-v-9b443965><p data-v-9b443965>Este <em data-v-9b443965>sitio web</em> ha sido renovado en <strong data-v-9b443965>Abril de 2026</strong> en ocasión del XIV Congreso Nacional de Historia de la Construcción - celebrado en Cartagena.</p><p data-v-9b443965>En su versión actual, los <em data-v-9b443965>Tratados de Historia de la Arquitectura</em>, las <em data-v-9b443965>Actas de Congresos</em> y los Libros de la colección de <em data-v-9b443965>Textos sobre Teoría e Historia de las Construcciones</em>, se publican a través de la plataforma <a href="https://archive.org" target="_blank" rel="noopener noreferrer" data-v-9b443965>archive.org</a>.</p><a href="https://archive.org" target="_blank" rel="noopener noreferrer" class="w-full flex justify-start" data-v-9b443965><img${ssrRenderAttr("src", _imports_1)} alt="internet archive" class="mt-2 h-24 w-auto" data-v-9b443965></a><hr data-v-9b443965><p data-v-9b443965>Se han utilizado las <em data-v-9b443965>fuentes tipográficas</em> de código abierto <strong data-v-9b443965>Libre Baskerville</strong>, diseñada por Impallari Type, e <span class="font-mono" data-v-9b443965>Inconsolata</span>, creada por Raph Levien. Ambas fuentes están disponibles bajo licencias abiertas.</p><hr data-v-9b443965><p data-v-9b443965>Este sitio web ha sido desarrollado con <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer" data-v-9b443965>Nuxt</a> (versión 4), un framework de <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" data-v-9b443965>Vue.js</a> que permite la generación de sitios estáticos.</p><p data-v-9b443965>La gestión de contenidos se realiza mediante <a href="https://content.nuxt.com" target="_blank" rel="noopener noreferrer" data-v-9b443965>Nuxt Content</a>, un CMS basado en archivos Markdown con validación de esquemas a través de <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" data-v-9b443965>Zod</a>.</p><p data-v-9b443965>El diseño visual utiliza <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" data-v-9b443965>Tailwind CSS</a> y el módulo <a href="https://ui.nuxt.com" target="_blank" rel="noopener noreferrer" data-v-9b443965>Nuxt UI</a>. Las visualizaciones cartográficas incorporan las bibliotecas <a href="https://d3js.org" target="_blank" rel="noopener noreferrer" data-v-9b443965>D3-geo</a>. El sitio se publica como un sitio estático alojado en <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" data-v-9b443965>Netlify</a>.</p></div><div class="mb-6" data-v-9b443965><hr class="border-gray-700" data-v-9b443965><div class="flex justify-between items-center" data-v-9b443965><p class="text-sm italic mt-4" data-v-9b443965>Diseño y realización: <a href="https://studio.negot.net" target="_blank" rel="noopener noreferrer" data-v-9b443965>studio.negot.net</a></p><a href="https://studio.negot.net" target="_blank" rel="noopener noreferrer" data-v-9b443965><img${ssrRenderAttr("src", _imports_2)} alt="studio.negot.net" class="mt-4" data-v-9b443965></a></div></div>`);
  _push(ssrRenderComponent(_component_globalFooter, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/colofon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const colofon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b443965"]]);

export { colofon as default };
//# sourceMappingURL=colofon-DawJnk0Y.mjs.map

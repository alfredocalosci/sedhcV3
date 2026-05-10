import { _ as __nuxt_component_0 } from './nuxt-link-Co3vNW-s.mjs';
import { _ as __nuxt_component_2 } from './globalHeaderAlt-D5qAesMV.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-DW1XsLUr.mjs';
import __nuxt_component_7 from './index-B5zsnP7H.mjs';
import { s as shortenUrl } from './index-D1IrLfHv.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-BICxzpjz.mjs';
import { q as queryCollection } from './client-B23pzL1B.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_9 } from './globalFooter-CiOSDy7J.mjs';
import { _ as _imports_0 } from './virtual_public-Bz1bRblL.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "entidades",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: entidades } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("entidades_list", () => {
      return queryCollection("entidades").order("rank", "ASC").all();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3a338f6e><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-3a338f6e><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-3a338f6e>otras sociedades</p></div><div class="mt-6" data-v-3a338f6e><!--[-->`);
      ssrRenderList(unref(entidades), (entidad) => {
        _push(`<div class="flex flex-col gap-2 mb-12 border-b border-gray-200 pb-4" data-v-3a338f6e><img${ssrRenderAttr("src", `${entidad.image?.src}`)}${ssrRenderAttr("alt", entidad.image?.alt)} class="w-3/4 lg:w-1/4 h-auto mb-4" data-v-3a338f6e><div class="ml-3" data-v-3a338f6e><h3 class="font-bold text-xl/6 pb-4 lg:-ml-3" data-v-3a338f6e>${ssrInterpolate(entidad.title)}</h3>`);
        if (entidad) {
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: entidad,
            class: "md_entidad"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="font-mono text-xs pt-2" data-v-3a338f6e><a${ssrRenderAttr("href", entidad.url)} target="_blank" class="flex items-center hover:text-rosso-500 transition-colors duration-300" rel="noopener noreferrer" data-v-3a338f6e>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:link",
          class: "size-4 inline-block mr-3 text-gray-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(("shortenUrl" in _ctx ? _ctx.shortenUrl : unref(shortenUrl))(entidad.url, 50))}</a></p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/entidades.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a338f6e"]]), { __name: "Entidades" });
const _imports_1 = publicAssetsURL("/img/ilustraciones/eswn.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: textos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("textos_sociedad", () => {
      return queryCollection("textos").where("webpage", "=", "sociedad").all();
    })), __temp = await __temp, __restore(), __temp);
    const introText = computed(() => textos.value?.find((t) => t.section === "intro"));
    const cargosText = computed(() => textos.value?.find((t) => t.section === "cargos"));
    const miembrosText = computed(() => textos.value?.find((t) => t.section === "miembros"));
    const estatutosText = computed(() => textos.value?.find((t) => t.section === "estatutos"));
    const activeSection = ref("finalidades");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_GlobalHeaderAlt = __nuxt_component_2;
      const _component_ContentRenderer = __nuxt_component_0$1;
      const _component_entidades = __nuxt_component_3;
      const _component_GlobalFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sedhc_grid" }, _attrs))} data-v-e62ddac5><div class="bg-chiaro-50" data-v-e62ddac5><aside class="bg-amber-400 hover:bg-chiaro-50 transition-colors duration-300 border-b border-white" data-v-e62ddac5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "w-full hover:bg-chiaro-50 transition-colors duration-300 text-black flex items-center gap-5 py-8 pl-6 pr-5 border-b border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="sedhc" class="h-16 w-auto mt-2 mix-blend-multiply bg-white" data-v-e62ddac5${_scopeId}><p class="text-sm/5 pt-2" data-v-e62ddac5${_scopeId}>Sociedad Española de Historia de la Construcción</p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "sedhc",
                class: "h-16 w-auto mt-2 mix-blend-multiply bg-white"
              }),
              createVNode("p", { class: "text-sm/5 pt-2" }, "Sociedad Española de Historia de la Construcción")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside><article class="mt-10 px-10 text-xs italic quote pb-8" data-v-e62ddac5><p data-v-e62ddac5>Los hombres … teniendo por naturaleza, a diferencia de los otros animales, el no caminar inclinados a la tierra, sino rectos y elevados para ver la magnificencia del cielo y astros; como también, hallándose aptos con sus manos y articulaciones para tratar fácilmente cuanto querían, empezaron unos a disponer sus techados de ramas. </p><p data-v-e62ddac5>Otros a cavar cuevas a la raíz de los montes. Algunos imitando los nidos de las golondrinas y su estructura, con barro y lodo hicieron donde guarecerse.</p><p data-v-e62ddac5>Otros finalmente, que observaban estos abrigos, adelantando un poco mas sus invenciones, iban de día en día erigiendo menos mal arregladas chozas: así, que siendo aquellos hombres de imitadora y dócil naturaleza, gloriándose cada día de sus invenciones, se enseñaban unos a otros las nuevas formas de las casas que levantaban; y ejercitándose los ingenios en estas emulaciones, las iban de grado en grado mejorando de gusto.</p><p class="mt-6 pl-4" data-v-e62ddac5>Vitruvio II, I,<br data-v-e62ddac5>“Del principio de los edificios”<br data-v-e62ddac5> (Texto: Ortiz y Sanz 1787)</p></article></div><div class="main_content" data-v-e62ddac5>`);
      _push(ssrRenderComponent(_component_GlobalHeaderAlt, null, null, _parent));
      _push(`<nav class="hidden md:block mb-16 z-5 md:sticky top-0 bg-white pb-3 pt-2" data-v-e62ddac5><ul class="flex items-center justify-end gap-3 font-mono uppercase text-xs text-gray-500" data-v-e62ddac5><li class="${ssrRenderClass({ "text-black font-bold": activeSection.value === "finalidades" })}" data-v-e62ddac5><a href="#finalidades" data-v-e62ddac5>finalidades</a></li><li class="${ssrRenderClass({ "text-black  font-bold": activeSection.value === "junta_directiva" })}" data-v-e62ddac5><a href="#junta_directiva" data-v-e62ddac5>junta directiva</a></li><li class="${ssrRenderClass({ "text-black  font-bold": activeSection.value === "miembros" })}" data-v-e62ddac5><a href="#miembros" data-v-e62ddac5>miembros</a></li><li class="${ssrRenderClass({ "text-black  font-bold": activeSection.value === "estatutos" })}" data-v-e62ddac5><a href="#estatutos" data-v-e62ddac5>estatutos</a></li><li class="${ssrRenderClass({ "text-black  font-bold": activeSection.value === "entidades" })}" data-v-e62ddac5><a href="#entidades" data-v-e62ddac5>otras sociedades</a></li></ul></nav><section id="finalidades" class="mt-32 mb-16 step" data-v-e62ddac5>`);
      if (introText.value) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: introText.value,
          class: "mdtxt mdtxt_intro mt-8"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", _imports_1)} alt="eswn" class="my-6" data-v-e62ddac5></section><section id="junta_directiva" class="step mb-16" data-v-e62ddac5><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-e62ddac5><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-e62ddac5>junta directiva</p></div><div class="colums-1 md:columns-2 gap-x-8 mt-6" data-v-e62ddac5>`);
      if (cargosText.value) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: cargosText.value,
          class: "mdtxt mdtxt_two_c mdtxt_lista"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section id="miembros" class="step mb-16" data-v-e62ddac5><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-e62ddac5><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-e62ddac5>miembros</p></div>`);
      if (miembrosText.value) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: miembrosText.value,
          class: "mdtxt mdtxt_sociedad mt-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section id="estatutos" class="step mb-16" data-v-e62ddac5><div class="border-b border-dashed flex items-center justify-between mt-12" data-v-e62ddac5><p class="font-mono uppercase text-sm font-semibold pb-1" data-v-e62ddac5>estatutos</p></div>`);
      if (estatutosText.value) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: estatutosText.value,
          class: "mdtxt mdtxt_sociedad mt-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section id="entidades" class="step" data-v-e62ddac5>`);
      _push(ssrRenderComponent(_component_entidades, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_GlobalFooter, null, null, _parent));
      _push(`</div><div data-v-e62ddac5></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sociedad/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e62ddac5"]]);

export { index as default };
//# sourceMappingURL=index-CxWSNwoL.mjs.map

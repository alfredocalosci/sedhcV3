import { _ as _sfc_main$1 } from './Icon-D0CT7Pv4.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import './index-DSYAIBMp.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BbU2djNp.mjs';
import 'perfect-debounce';
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
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design_system",
  __ssrInlineRender: true,
  setup(__props) {
    const ColorSwatch = defineComponent({
      props: {
        name: String,
        hex: String,
        label: String,
        usage: String,
        light: Boolean
      },
      setup(props) {
        const textColor = computed(() => props.light ? "text-gray-800" : "text-white");
        return { textColor };
      },
      template: `
    <div class="rounded overflow-hidden shadow-sm">
      <div class="h-20 w-full flex items-end p-3" :style="{ background: hex }">
        <span :class="['font-mono text-[10px] font-bold leading-tight', textColor]">{{ label }}</span>
      </div>
      <div class="bg-white p-3">
        <div class="font-mono text-[10px] text-gray-500 mb-1">{{ hex }}</div>
        <div class="font-mono text-[10px] text-gray-400 leading-tight">{{ name }}</div>
        <div class="font-mono text-[10px] text-gray-300 mt-1 leading-tight">{{ usage }}</div>
      </div>
    </div>
  `
    });
    const SectionTitle = defineComponent({
      template: `
    <div class="mb-6">
      <h2 class="text-2xl font-bold font-serif text-scuro-900"><slot /></h2>
      <div class="mt-2 h-px bg-scuro-900/10"></div>
    </div>
  `
    });
    const TypeSample = defineComponent({
      props: { size: String, label: String, example: String, mono: Boolean },
      template: `
    <div class="flex items-baseline gap-6 py-3 border-b border-gray-100">
      <div class="w-48 flex-shrink-0 font-mono text-[10px] text-gray-400 leading-tight">{{ label }}</div>
      <div :class="[size, mono ? 'font-mono uppercase tracking-widest' : 'font-serif', 'text-gray-800']">{{ example }}</div>
    </div>
  `
    });
    const GridPattern = defineComponent({
      props: { cols: String, label: String, usage: String },
      template: `
    <div class="flex items-start gap-4 py-3 border-b border-gray-100">
      <code class="w-72 flex-shrink-0 text-[10px] bg-gray-50 px-2 py-1 rounded text-gray-700">{{ cols }}</code>
      <div>
        <div class="font-semibold text-gray-700 text-xs">{{ label }}</div>
        <div class="text-gray-400 text-[10px] mt-0.5">{{ usage }}</div>
      </div>
    </div>
  `
    });
    const TextCombo = defineComponent({
      props: { label: String, classes: String, example: String, dark: Boolean, dropCap: Boolean },
      template: `
    <div class="rounded overflow-hidden shadow-sm">
      <div :class="['p-6', dark ? 'bg-scuro-900' : 'bg-white']">
        <div :class="[classes, dropCap ? 'first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:uppercase first-letter:font-bold first-letter:text-rosso-500' : '']">{{ example }}</div>
      </div>
      <div class="bg-gray-50 px-4 py-2 flex items-start gap-3">
        <span class="font-mono text-[10px] text-gray-400 leading-tight flex-shrink-0">{{ label }}</span>
        <code class="font-mono text-[10px] text-gray-500 leading-tight">{{ classes }}</code>
      </div>
    </div>
  `
    });
    const sections = [
      { name: "Noticias", color: "orange-600 (Tailwind)", hex: "#ea580c" },
      { name: "Tratados", color: "rosso-500", hex: "#a81525" },
      { name: "Congresos", color: "blu-500", hex: "#1A3163" },
      { name: "Revista", color: "azzurro-500", hex: "#025b7b" },
      { name: "Libros", color: "verde-500", hex: "#1a6347" },
      { name: "Sociedad", color: "amber-400 (Tailwind)", hex: "#fbbf24" }
    ];
    const iconGroups = [
      {
        label: "Navigation & UI",
        icons: [
          { name: "lucide:arrow-left", usage: "Back navigation" },
          { name: "lucide:arrow-right", usage: "Forward / next" },
          { name: "lucide:external-link", usage: "External link" },
          { name: "lucide:square-arrow-left", usage: "Close side panel" }
        ]
      },
      {
        label: "Actions & Content",
        icons: [
          { name: "lucide:search", usage: "Search input" },
          { name: "lucide:calendar", usage: "Sort by date" },
          { name: "lucide:cloud-download", usage: "Sort by downloads" },
          { name: "lucide:book-open", usage: "Archive / view" },
          { name: "lucide:hard-drive-download", usage: "PDF download" },
          { name: "lucide:app-window-mac", usage: "Website link" },
          { name: "lucide:link", usage: "Generic link" },
          { name: "lucide:mail", usage: "Email contact" }
        ]
      },
      {
        label: "View Toggles",
        icons: [
          { name: "lucide:layout-list", usage: "List view" },
          { name: "lucide:grid-3x3", usage: "Grid view" },
          { name: "lucide:list-ordered", usage: "Compact view" }
        ]
      },
      {
        label: "Social Media (MDI / Prime)",
        icons: [
          { name: "mdi:facebook", usage: "Facebook share" },
          { name: "prime:twitter", usage: "Twitter share" }
        ]
      }
    ];
    const iconSizes = [
      { cls: "size-4", px: "16px" },
      { cls: "size-5", px: "20px" },
      { cls: "size-6", px: "24px" },
      { cls: "size-8", px: "32px" },
      { cls: "size-12", px: "48px" },
      { cls: "size-24", px: "96px" }
    ];
    useHead({
      title: "Design System · SEDHC V3",
      meta: [{ name: "robots", content: "noindex, nofollow" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-chiaro-50 min-h-screen px-8 pt-8" }, _attrs))}><div class="bg-scuro-900 text-white p-8"><p class="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">SEDHC V3 · Internal Reference</p><h1 class="text-4xl font-bold font-serif mb-2">Design System</h1><p class="font-mono text-sm text-white/60">Visual language, components, and conventions used throughout the site.</p></div><div class="max-w-270 mx-auto px-12 py-16 space-y-12"><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Color Palette`);
          } else {
            return [
              createTextVNode("Color Palette")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-mono text-xs text-gray-500 mb-8">Defined in <code>app/assets/css/main.css</code> using <code>@theme</code> CSS custom properties. All colors are available as Tailwind utility classes (e.g. <code>bg-rosso-500</code>, <code>text-blu-500</code>).</p><div class="space-y-10"><div><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Primary Brand</h3><div class="grid grid-cols-2 md:grid-cols-5 gap-4">`);
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "rosso-500",
        hex: "#a81525",
        label: "Rosso",
        usage: "Primary brand, active states, drop caps, sidebar noticias/tratados"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "azzurro-500",
        hex: "#025b7b",
        label: "Azzurro",
        usage: "Sidebar revista, links"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "blu-500",
        hex: "#1A3163",
        label: "Blu",
        usage: "Sidebar congresos, congress cards"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "giallo-500",
        hex: "#FFDD11",
        label: "Giallo",
        dark: "",
        "text-dark": "",
        usage: "Logo accent, highlights",
        light: true
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "scuro-900",
        hex: "#192121",
        label: "Scuro",
        usage: "Page header, dark backgrounds"
      }, null, _parent));
      _push(`</div></div><div><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Secondary</h3><div class="grid grid-cols-2 md:grid-cols-5 gap-4">`);
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "verde-500",
        hex: "#1a6347",
        label: "Verde",
        usage: "Sidebar libros"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "verdechiaro-500",
        hex: "#38A585",
        label: "Verde Chiaro",
        usage: "Accent green"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "acqua-500",
        hex: "#82D7CF",
        label: "Acqua",
        usage: "Teal accent",
        light: true
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "neutro-500",
        hex: "#B4BfC2",
        label: "Neutro",
        usage: "Dividers, muted elements",
        light: true
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "revista-500",
        hex: "#034B85",
        label: "Revista",
        usage: "Journal volume color"
      }, null, _parent));
      _push(`</div></div><div><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Background &amp; Neutral</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "chiaro-50",
        hex: "#ECEFEE",
        label: "Chiaro",
        usage: "Global page background",
        light: true
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "panna-50",
        hex: "#FFF8E1",
        label: "Panna",
        usage: "Warm cream background",
        light: true
      }, null, _parent));
      _push(ssrRenderComponent(unref(ColorSwatch), {
        name: "menta-50",
        hex: "#E2E8E1",
        label: "Menta",
        usage: "Soft mint background",
        light: true
      }, null, _parent));
      _push(`</div></div><div><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Section → Color Mapping</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs"><!--[-->`);
      ssrRenderList(sections, (s) => {
        _push(`<div class="flex items-center gap-3 bg-white rounded p-3 shadow-sm"><div class="w-5 h-5 rounded-full shrink-0" style="${ssrRenderStyle({ background: s.hex })}"></div><div><div class="font-semibold text-gray-800">${ssrInterpolate(s.name)}</div><div class="text-gray-400">${ssrInterpolate(s.color)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Typography`);
          } else {
            return [
              createTextVNode("Typography")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-mono text-xs text-gray-500 mb-8">Two font families loaded via <code>@nuxt/fonts</code> from Google Fonts. Configured in <code>nuxt.config.ts</code>.</p><div class="grid md:grid-cols-2 gap-8 mb-12"><div class="bg-white shadow-md p-8"><p class="font-mono text-xs uppercase text-gray-400 mb-1">--font-serif · body default</p><p class="font-mono text-xs text-gray-400 mb-6">Libre Baskerville · Google Fonts · wt 400 500 600 700 · normal italic</p><div class="font-serif space-y-2"><div class="text-4xl">Aa Bb Cc Dd Ee</div><div class="text-xl">La historia de la construcción</div><div class="text-base">El texto corre en Libre Baskerville, una tipografía serif elegante que evoca los libros académicos y las publicaciones históricas.</div><div class="text-base italic text-gray-500">Cursiva: <em>Actas del Congreso de Historia de la Construcción</em></div></div></div><div class="bg-white shadow-md p-8"><p class="font-mono text-xs uppercase text-gray-400 mb-1">--font-monospace · UI / labels</p><p class="font-mono text-xs text-gray-400 mb-6">Inconsolata · Google Fonts · wt 300–900 · normal</p><div class="font-mono space-y-2"><div class="text-4xl">Aa Bb Cc Dd Ee</div><div class="text-xl uppercase tracking-wide">SOCIEDAD · NOTICIAS · REVISTA</div><div class="text-sm">Etiquetas, filtros, botones de acción y navegación utilizan Inconsolata para un contraste visual claro frente al serif del cuerpo.</div><div class="text-xs uppercase text-gray-400 tracking-widest">ORDENAR POR · MOSTRAR COMO · BÚSQUEDA</div></div></div></div><div class="bg-white shadow-md p-8"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-6 tracking-widest">Type Scale</h3><div class="space-y-4 border-l-2 border-chiaro-50 pl-6">`);
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-6xl",
        label: "text-6xl · font-bold",
        example: "96"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-4xl/10",
        label: "text-4xl/10",
        example: "Título de noticia principal"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-2xl/7",
        label: "text-2xl/7 · font-semibold",
        example: "Subtítulo de sección destacada"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-xl/6",
        label: "text-xl/6 · font-bold",
        example: "Encabezado de tarjeta o panel"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-lg/6",
        label: "text-lg/6",
        example: "Texto introductorio o resumen"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-base/6",
        label: "text-base/6",
        example: "Cuerpo de texto estándar. Usado en la mayoría de párrafos."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-sm/6",
        label: "text-sm/6",
        example: "Texto secundario, descripciones cortas."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-sm/5",
        label: "text-sm/5",
        example: "Texto compacto en listados y fichas."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TypeSample), {
        size: "text-xs",
        label: "text-xs · font-mono · uppercase",
        example: "ETIQUETA · METADATA · NAVEGACIÓN",
        mono: ""
      }, null, _parent));
      _push(`</div></div></section><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Grid Layout`);
          } else {
            return [
              createTextVNode("Grid Layout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-mono text-xs text-gray-500 mb-8">Defined in <code>main.css</code>. All pages use <code>.sedhc_grid</code> as their root layout container.</p><div class="bg-white shadow-md p-8 mb-8"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">.sedhc_grid — Main Page Layout</h3><p class="font-mono text-xs text-gray-400 mb-6"><code>grid grid-cols-[1fr] lg:grid-cols-[300px_720px_1fr] gap-0</code></p><div class="grid grid-cols-[300px_1fr_60px] gap-2 h-48 text-white text-xs font-mono"><div class="bg-blu-500 flex flex-col items-center justify-center gap-2 p-4 text-center"><span class="text-white/50">Left Sidebar</span><span class="font-bold">300px</span><span class="text-white/50 text-[10px]">Color bg, logo, nav, textos blocks</span></div><div class="bg-gray-300 flex flex-col items-center justify-center gap-2 text-gray-700"><span class="text-gray-500">Main Content</span><span class="font-bold">720px</span><span class="text-gray-400 text-[10px]">.main_content · white bg · shadow-2xl</span></div><div class="bg-chiaro-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400"><span class="rotate-90 text-[10px]">1fr margin</span></div></div><p class="font-mono text-xs text-gray-400 mt-4">Mobile: single column (full width). Breakpoint: <code>lg</code> (1024px).</p></div><div class="bg-white shadow-md p-8"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-6 tracking-widest">Content Grid Patterns</h3><div class="space-y-6 font-mono text-xs">`);
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "grid-cols-1 md:grid-cols-3",
        label: "3-column cards",
        usage: "Home sections, Congress cards"
      }, null, _parent));
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "grid md:grid-cols-2",
        label: "2-column list",
        usage: "Congress items list"
      }, null, _parent));
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "grid-cols-2 md:grid-cols-3",
        label: "Category tags",
        usage: "Noticias filters, magazine volumes, books"
      }, null, _parent));
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "grid-cols-1 md:grid-cols-[1fr_5fr]",
        label: "Carousel layout",
        usage: "Home news carousel (number + content)"
      }, null, _parent));
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "grid-cols-1 md:grid-cols-[1fr_4fr]",
        label: "Item with cover",
        usage: "Libros / Tratados items"
      }, null, _parent));
      _push(ssrRenderComponent(unref(GridPattern), {
        cols: "mb-2 grid md:grid-cols-3",
        label: "Control bar",
        usage: "Sort / view / search bar in listing pages"
      }, null, _parent));
      _push(`</div></div></section><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Icons`);
          } else {
            return [
              createTextVNode("Icons")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-mono text-xs text-gray-500 mb-8">Icons via <strong>Iconify</strong> through <code>@nuxt/ui</code>. Rendered with <code>&lt;UIcon name=&quot;...&quot; /&gt;</code>. Primary library: <strong>Lucide</strong>; secondary: MDI and Prime.</p><div class="bg-white shadow-md p-8"><div class="space-y-8"><!--[-->`);
      ssrRenderList(iconGroups, (group) => {
        _push(`<div><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">${ssrInterpolate(group.label)}</h3><div class="grid grid-cols-3 md:grid-cols-4 gap-3"><!--[-->`);
        ssrRenderList(group.icons, (icon) => {
          _push(`<div class="flex items-center gap-3 border border-gray-100 rounded p-3 hover:bg-chiaro-50 transition-colors">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: icon.name,
            class: "size-5 text-gray-700 shrink-0"
          }, null, _parent));
          _push(`<div><div class="font-mono text-[10px] text-gray-700 leading-tight">${ssrInterpolate(icon.name)}</div><div class="font-mono text-[10px] text-gray-400 leading-tight">${ssrInterpolate(icon.usage)}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 border-t border-gray-100 pt-6"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Icon Sizes</h3><div class="flex items-end gap-8 flex-wrap"><!--[-->`);
      ssrRenderList(iconSizes, (s) => {
        _push(`<div class="flex flex-col items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "lucide:book-open",
          class: s.cls + " text-gray-600"
        }, null, _parent));
        _push(`<span class="font-mono text-[10px] text-gray-400">${ssrInterpolate(s.cls)}</span><span class="font-mono text-[10px] text-gray-300">${ssrInterpolate(s.px)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Text Class Combinations`);
          } else {
            return [
              createTextVNode("Text Class Combinations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-mono text-xs text-gray-500 mb-8">Recurring patterns found across pages and components. Each block shows the rendered result and the Tailwind classes applied.</p><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Page title (noticia detail)",
        classes: "text-4xl/10 font-bold font-serif",
        example: "Actas del X Congreso Nacional de Historia de la Construcción"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Featured card heading",
        classes: "text-2xl/7 font-semibold font-serif",
        example: "Nuevas perspectivas sobre la arquitectura medieval española"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Card / panel heading",
        classes: "text-xl/6 font-bold font-serif",
        example: "Seminario Internacional de Historiografía"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Standard body",
        classes: "text-base/6 font-serif text-gray-800",
        example: "El contenido principal de la página se compone con Libre Baskerville en tamaño base, con interlineado generoso para facilitar la lectura de textos académicos y descriptivos."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Secondary / compact body",
        classes: "text-sm/5 font-serif text-gray-600",
        example: "Descripción breve del evento, publicación o entidad. Se usa en listados y tarjetas secundarias."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Section label / nav item",
        classes: "font-mono text-xs uppercase tracking-widest text-gray-500",
        example: "NOTICIAS · CONGRESOS · REVISTA · SOCIEDAD"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Active nav / action link",
        classes: "font-mono text-xs uppercase text-rosso-500 hover:underline decoration-rosso-500",
        example: "Ver todas las noticias →"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Metadata / date",
        classes: "text-xs italic text-gray-500 font-serif",
        example: "23 de enero de 2025"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Breadcrumb path",
        classes: "font-mono uppercase text-[10px] tracking-widest text-gray-400",
        example: "INICIO / NOTICIAS / DETALLE"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Page number / big stat",
        classes: "text-6xl font-bold font-serif text-rosso-500",
        example: "12"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Drop cap paragraph (first-letter)",
        classes: "ml-3 -indent-3 text-base/6 font-serif",
        dropCap: "",
        example: "Este largo párrafo muestra el uso de la letra capital destacada al inicio del texto introductorio, una convención tipográfica empleada en artículos y páginas de sección para dar carácter editorial."
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Content link (inside rendered markdown)",
        classes: "text-gray-700 underline decoration-cyan-500 underline-offset-4 hover:text-rosso-500",
        example: "Consulte el archivo completo de publicaciones"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Sidebar white heading",
        classes: "text-lg font-bold text-white font-serif",
        dark: "",
        example: "Noticias recientes"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Sidebar caption / meta (white)",
        classes: "text-xs font-mono uppercase text-white/60",
        dark: "",
        example: "SECCIÓN · NAVEGACIÓN"
      }, null, _parent));
      _push(ssrRenderComponent(unref(TextCombo), {
        label: "Search input / filter text",
        classes: "font-mono text-xs border-b border-gray-300 focus:border-rosso-500 bg-transparent",
        example: "Buscar..."
      }, null, _parent));
      _push(`</div></section><section>`);
      _push(ssrRenderComponent(unref(SectionTitle), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Decorative Utilities`);
          } else {
            return [
              createTextVNode("Decorative Utilities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid md:grid-cols-2 gap-6"><div class="bg-white shadow-md p-6"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">.hor_pattern</h3><div class="hor_pattern h-24 rounded border border-gray-200 mb-3"></div><p class="font-mono text-xs text-gray-500">SVG horizontal lines background (<code>/horizontal-lines.svg</code>, 100×96px repeat). Used as texture overlay on colored sidebar areas.</p></div><div class="bg-white shadow-md p-6"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Transitions</h3><div class="space-y-3 font-mono text-xs"><div class="flex items-center gap-3"><div class="w-6 h-6 bg-gray-300 hover:bg-rosso-500 transition-colors duration-300 rounded cursor-pointer"></div><span class="text-gray-500">transition-colors duration-300 — color hover</span></div><div class="flex items-center gap-3"><div class="w-6 h-6 bg-gray-300 hover:scale-110 transition-transform duration-300 rounded cursor-pointer"></div><span class="text-gray-500">transition-transform duration-300 — scale hover</span></div><div class="flex items-center gap-3"><div class="w-6 h-6 bg-gray-300 hover:bg-azzurro-500 transition-all duration-500 rounded cursor-pointer"></div><span class="text-gray-500">transition-all duration-500 — panel animations</span></div></div></div><div class="bg-white shadow-md p-6"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Shadows</h3><div class="space-y-4 font-mono text-xs"><div class="flex items-center gap-4"><div class="w-16 h-10 bg-white shadow-sm rounded"></div><span class="text-gray-500">shadow-sm</span></div><div class="flex items-center gap-4"><div class="w-16 h-10 bg-white shadow-md rounded"></div><span class="text-gray-500">shadow-md — cards, panels</span></div><div class="flex items-center gap-4"><div class="w-16 h-10 bg-white shadow-lg rounded"></div><span class="text-gray-500">shadow-lg</span></div><div class="flex items-center gap-4"><div class="w-16 h-10 bg-white shadow-2xl rounded"></div><span class="text-gray-500">shadow-2xl — .main_content column</span></div></div></div><div class="bg-white shadow-md p-6"><h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Borders &amp; Dividers</h3><div class="space-y-5 font-mono text-xs text-gray-500"><div><div class="border-b border-gray-300 pb-2 mb-1">Divider line</div><span>border-b border-gray-300 — nav, section separators</span></div><div><div class="border-b border-dashed border-gray-300 pb-2 mb-1">Dashed divider</div><span>border-b border-dashed — content section breaks</span></div><div><div class="border-b-2 border-rosso-500 pb-2 mb-1">Active underline</div><span>border-b-2 border-rosso-500 — active nav state</span></div></div></div></div></section></div><div class="bg-scuro-900 text-white px-12 py-6 font-mono text-xs text-center mb-8"> SEDHC V3 Design System · Internal Reference · Not linked from site navigation </div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/design_system.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=design_system-CJg4i2xH.mjs.map

<template>
  <div class="bg-chiaro-50 min-h-screen px-8 pt-8">

    <!-- Page Header -->
    <div class="bg-scuro-900 text-white p-8">
      <p class="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">SEDHC V3 · Internal Reference</p>
      <h1 class="text-4xl font-bold font-serif mb-2">Design System</h1>
      <p class="font-mono text-sm text-white/60">Visual language, components, and conventions used throughout the site.</p>
    </div>

    <div class="max-w-270 mx-auto px-12 py-16 space-y-12">

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: COLOR PALETTE -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Color Palette</SectionTitle>
        <p class="font-mono text-xs text-gray-500 mb-8">Defined in <code>app/assets/css/main.css</code> using <code>@theme</code> CSS custom properties. All colors are available as Tailwind utility classes (e.g. <code>bg-rosso-500</code>, <code>text-blu-500</code>).</p>

        <div class="space-y-10">

          <!-- Primary Brand Colors -->
          <div>
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Primary Brand</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch name="rosso-500" hex="#a81525" label="Rosso" usage="Primary brand, active states, drop caps, sidebar noticias/tratados" />
              <ColorSwatch name="azzurro-500" hex="#025b7b" label="Azzurro" usage="Sidebar revista, links" />
              <ColorSwatch name="blu-500" hex="#1A3163" label="Blu" usage="Sidebar congresos, congress cards" />
              <ColorSwatch name="giallo-500" hex="#FFDD11" label="Giallo" dark text-dark usage="Logo accent, highlights" :light="true" />
              <ColorSwatch name="scuro-900" hex="#192121" label="Scuro" usage="Page header, dark backgrounds" />
            </div>
          </div>

          <!-- Secondary Colors -->
          <div>
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Secondary</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch name="verde-500" hex="#1a6347" label="Verde" usage="Sidebar libros" />
              <ColorSwatch name="verdechiaro-500" hex="#38A585" label="Verde Chiaro" usage="Accent green" />
              <ColorSwatch name="acqua-500" hex="#82D7CF" label="Acqua" usage="Teal accent" :light="true" />
              <ColorSwatch name="neutro-500" hex="#B4BfC2" label="Neutro" usage="Dividers, muted elements" :light="true" />
              <ColorSwatch name="revista-500" hex="#034B85" label="Revista" usage="Journal volume color" />
            </div>
          </div>

          <!-- Background / Neutral -->
          <div>
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Background & Neutral</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ColorSwatch name="chiaro-50" hex="#ECEFEE" label="Chiaro" usage="Global page background" :light="true" />
              <ColorSwatch name="panna-50" hex="#FFF8E1" label="Panna" usage="Warm cream background" :light="true" />
              <ColorSwatch name="menta-50" hex="#E2E8E1" label="Menta" usage="Soft mint background" :light="true" />
            </div>
          </div>

          <!-- Section Color Mapping -->
          <div>
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Section → Color Mapping</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
              <div v-for="s in sections" :key="s.name" class="flex items-center gap-3 bg-white rounded p-3 shadow-sm">
                <div class="w-5 h-5 rounded-full shrink-0" :style="{ background: s.hex }"></div>
                <div>
                  <div class="font-semibold text-gray-800">{{ s.name }}</div>
                  <div class="text-gray-400">{{ s.color }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: TYPOGRAPHY -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Typography</SectionTitle>
        <p class="font-mono text-xs text-gray-500 mb-8">Two font families loaded via <code>@nuxt/fonts</code> from Google Fonts. Configured in <code>nuxt.config.ts</code>.</p>

        <!-- Font Families -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white shadow-md p-8">
            <p class="font-mono text-xs uppercase text-gray-400 mb-1">--font-serif · body default</p>
            <p class="font-mono text-xs text-gray-400 mb-6">Libre Baskerville · Google Fonts · wt 400 500 600 700 · normal italic</p>
            <div class="font-serif space-y-2">
              <div class="text-4xl">Aa Bb Cc Dd Ee</div>
              <div class="text-xl">La historia de la construcción</div>
              <div class="text-base">El texto corre en Libre Baskerville, una tipografía serif elegante que evoca los libros académicos y las publicaciones históricas.</div>
              <div class="text-base italic text-gray-500">Cursiva: <em>Actas del Congreso de Historia de la Construcción</em></div>
            </div>
          </div>
          <div class="bg-white shadow-md p-8">
            <p class="font-mono text-xs uppercase text-gray-400 mb-1">--font-monospace · UI / labels</p>
            <p class="font-mono text-xs text-gray-400 mb-6">Inconsolata · Google Fonts · wt 300–900 · normal</p>
            <div class="font-mono space-y-2">
              <div class="text-4xl">Aa Bb Cc Dd Ee</div>
              <div class="text-xl uppercase tracking-wide">SOCIEDAD · NOTICIAS · REVISTA</div>
              <div class="text-sm">Etiquetas, filtros, botones de acción y navegación utilizan Inconsolata para un contraste visual claro frente al serif del cuerpo.</div>
              <div class="text-xs uppercase text-gray-400 tracking-widest">ORDENAR POR · MOSTRAR COMO · BÚSQUEDA</div>
            </div>
          </div>
        </div>

        <!-- Type Scale -->
        <div class="bg-white shadow-md p-8">
          <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-6 tracking-widest">Type Scale</h3>
          <div class="space-y-4 border-l-2 border-chiaro-50 pl-6">
            <TypeSample size="text-6xl" label="text-6xl · font-bold" example="96" />
            <TypeSample size="text-4xl/10" label="text-4xl/10" example="Título de noticia principal" />
            <TypeSample size="text-2xl/7" label="text-2xl/7 · font-semibold" example="Subtítulo de sección destacada" />
            <TypeSample size="text-xl/6" label="text-xl/6 · font-bold" example="Encabezado de tarjeta o panel" />
            <TypeSample size="text-lg/6" label="text-lg/6" example="Texto introductorio o resumen" />
            <TypeSample size="text-base/6" label="text-base/6" example="Cuerpo de texto estándar. Usado en la mayoría de párrafos." />
            <TypeSample size="text-sm/6" label="text-sm/6" example="Texto secundario, descripciones cortas." />
            <TypeSample size="text-sm/5" label="text-sm/5" example="Texto compacto en listados y fichas." />
            <TypeSample size="text-xs" label="text-xs · font-mono · uppercase" example="ETIQUETA · METADATA · NAVEGACIÓN" mono />
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: GRID LAYOUT -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Grid Layout</SectionTitle>
        <p class="font-mono text-xs text-gray-500 mb-8">Defined in <code>main.css</code>. All pages use <code>.sedhc_grid</code> as their root layout container.</p>

        <!-- sedhc_grid diagram -->
        <div class="bg-white shadow-md p-8 mb-8">
          <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">.sedhc_grid — Main Page Layout</h3>
          <p class="font-mono text-xs text-gray-400 mb-6"><code>grid grid-cols-[1fr] lg:grid-cols-[300px_720px_1fr] gap-0</code></p>
          <div class="grid grid-cols-[300px_1fr_60px] gap-2 h-48 text-white text-xs font-mono">
            <div class="bg-blu-500 flex flex-col items-center justify-center gap-2 p-4 text-center">
              <span class="text-white/50">Left Sidebar</span>
              <span class="font-bold">300px</span>
              <span class="text-white/50 text-[10px]">Color bg, logo, nav, textos blocks</span>
            </div>
            <div class="bg-gray-300 flex flex-col items-center justify-center gap-2 text-gray-700">
              <span class="text-gray-500">Main Content</span>
              <span class="font-bold">720px</span>
              <span class="text-gray-400 text-[10px]">.main_content · white bg · shadow-2xl</span>
            </div>
            <div class="bg-chiaro-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
              <span class="rotate-90 text-[10px]">1fr margin</span>
            </div>
          </div>
          <p class="font-mono text-xs text-gray-400 mt-4">Mobile: single column (full width). Breakpoint: <code>lg</code> (1024px).</p>
        </div>

        <!-- Content grids -->
        <div class="bg-white shadow-md p-8">
          <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-6 tracking-widest">Content Grid Patterns</h3>
          <div class="space-y-6 font-mono text-xs">
            <GridPattern cols="grid-cols-1 md:grid-cols-3" label="3-column cards" usage="Home sections, Congress cards" />
            <GridPattern cols="grid md:grid-cols-2" label="2-column list" usage="Congress items list" />
            <GridPattern cols="grid-cols-2 md:grid-cols-3" label="Category tags" usage="Noticias filters, magazine volumes, books" />
            <GridPattern cols="grid-cols-1 md:grid-cols-[1fr_5fr]" label="Carousel layout" usage="Home news carousel (number + content)" />
            <GridPattern cols="grid-cols-1 md:grid-cols-[1fr_4fr]" label="Item with cover" usage="Libros / Tratados items" />
            <GridPattern cols="mb-2 grid md:grid-cols-3" label="Control bar" usage="Sort / view / search bar in listing pages" />
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: ICONS -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Icons</SectionTitle>
        <p class="font-mono text-xs text-gray-500 mb-8">Icons via <strong>Iconify</strong> through <code>@nuxt/ui</code>. Rendered with <code>&lt;UIcon name="..." /&gt;</code>. Primary library: <strong>Lucide</strong>; secondary: MDI and Prime.</p>

        <div class="bg-white shadow-md p-8">
          <div class="space-y-8">
            <div v-for="group in iconGroups" :key="group.label">
              <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">{{ group.label }}</h3>
              <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
                <div v-for="icon in group.icons" :key="icon.name"
                  class="flex items-center gap-3 border border-gray-100 rounded p-3 hover:bg-chiaro-50 transition-colors">
                  <UIcon :name="icon.name" class="size-5 text-gray-700 shrink-0" />
                  <div>
                    <div class="font-mono text-[10px] text-gray-700 leading-tight">{{ icon.name }}</div>
                    <div class="font-mono text-[10px] text-gray-400 leading-tight">{{ icon.usage }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon sizes -->
          <div class="mt-8 border-t border-gray-100 pt-6">
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Icon Sizes</h3>
            <div class="flex items-end gap-8 flex-wrap">
              <div v-for="s in iconSizes" :key="s.cls" class="flex flex-col items-center gap-2">
                <UIcon name="lucide:book-open" :class="s.cls + ' text-gray-600'" />
                <span class="font-mono text-[10px] text-gray-400">{{ s.cls }}</span>
                <span class="font-mono text-[10px] text-gray-300">{{ s.px }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: TEXT CLASS COMBINATIONS -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Text Class Combinations</SectionTitle>
        <p class="font-mono text-xs text-gray-500 mb-8">Recurring patterns found across pages and components. Each block shows the rendered result and the Tailwind classes applied.</p>

        <div class="space-y-4">

          <TextCombo label="Page title (noticia detail)"
            classes="text-4xl/10 font-bold font-serif"
            example="Actas del X Congreso Nacional de Historia de la Construcción" />

          <TextCombo label="Featured card heading"
            classes="text-2xl/7 font-semibold font-serif"
            example="Nuevas perspectivas sobre la arquitectura medieval española" />

          <TextCombo label="Card / panel heading"
            classes="text-xl/6 font-bold font-serif"
            example="Seminario Internacional de Historiografía" />

          <TextCombo label="Standard body"
            classes="text-base/6 font-serif text-gray-800"
            example="El contenido principal de la página se compone con Libre Baskerville en tamaño base, con interlineado generoso para facilitar la lectura de textos académicos y descriptivos." />

          <TextCombo label="Secondary / compact body"
            classes="text-sm/5 font-serif text-gray-600"
            example="Descripción breve del evento, publicación o entidad. Se usa en listados y tarjetas secundarias." />

          <TextCombo label="Section label / nav item"
            classes="font-mono text-xs uppercase tracking-widest text-gray-500"
            example="NOTICIAS · CONGRESOS · REVISTA · SOCIEDAD" />

          <TextCombo label="Active nav / action link"
            classes="font-mono text-xs uppercase text-rosso-500 hover:underline decoration-rosso-500"
            example="Ver todas las noticias →" />

          <TextCombo label="Metadata / date"
            classes="text-xs italic text-gray-500 font-serif"
            example="23 de enero de 2025" />

          <TextCombo label="Breadcrumb path"
            classes="font-mono uppercase text-[10px] tracking-widest text-gray-400"
            example="INICIO / NOTICIAS / DETALLE" />

          <TextCombo label="Page number / big stat"
            classes="text-6xl font-bold font-serif text-rosso-500"
            example="12" />

          <TextCombo label="Drop cap paragraph (first-letter)"
            classes="ml-3 -indent-3 text-base/6 font-serif"
            dropCap
            example="Este largo párrafo muestra el uso de la letra capital destacada al inicio del texto introductorio, una convención tipográfica empleada en artículos y páginas de sección para dar carácter editorial." />

          <TextCombo label="Content link (inside rendered markdown)"
            classes="text-gray-700 underline decoration-cyan-500 underline-offset-4 hover:text-rosso-500"
            example="Consulte el archivo completo de publicaciones" />

          <TextCombo label="Sidebar white heading"
            classes="text-lg font-bold text-white font-serif"
            dark
            example="Noticias recientes" />

          <TextCombo label="Sidebar caption / meta (white)"
            classes="text-xs font-mono uppercase text-white/60"
            dark
            example="SECCIÓN · NAVEGACIÓN" />

          <TextCombo label="Search input / filter text"
            classes="font-mono text-xs border-b border-gray-300 focus:border-rosso-500 bg-transparent"
            example="Buscar..." />

        </div>
      </section>

      <!-- ─────────────────────────────────────────────────────── -->
      <!-- SECTION: DECORATIVE UTILITIES -->
      <!-- ─────────────────────────────────────────────────────── -->
      <section>
        <SectionTitle>Decorative Utilities</SectionTitle>

        <div class="grid md:grid-cols-2 gap-6">

          <!-- hor_pattern -->
          <div class="bg-white shadow-md p-6">
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">.hor_pattern</h3>
            <div class="hor_pattern h-24 rounded border border-gray-200 mb-3"></div>
            <p class="font-mono text-xs text-gray-500">SVG horizontal lines background (<code>/horizontal-lines.svg</code>, 100×96px repeat). Used as texture overlay on colored sidebar areas.</p>
          </div>

          <!-- Transitions -->
          <div class="bg-white shadow-md p-6">
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Transitions</h3>
            <div class="space-y-3 font-mono text-xs">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-gray-300 hover:bg-rosso-500 transition-colors duration-300 rounded cursor-pointer"></div>
                <span class="text-gray-500">transition-colors duration-300 — color hover</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-gray-300 hover:scale-110 transition-transform duration-300 rounded cursor-pointer"></div>
                <span class="text-gray-500">transition-transform duration-300 — scale hover</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-gray-300 hover:bg-azzurro-500 transition-all duration-500 rounded cursor-pointer"></div>
                <span class="text-gray-500">transition-all duration-500 — panel animations</span>
              </div>
            </div>
          </div>

          <!-- Shadows -->
          <div class="bg-white shadow-md p-6">
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Shadows</h3>
            <div class="space-y-4 font-mono text-xs">
              <div class="flex items-center gap-4">
                <div class="w-16 h-10 bg-white shadow-sm rounded"></div>
                <span class="text-gray-500">shadow-sm</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-10 bg-white shadow-md rounded"></div>
                <span class="text-gray-500">shadow-md — cards, panels</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-10 bg-white shadow-lg rounded"></div>
                <span class="text-gray-500">shadow-lg</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-16 h-10 bg-white shadow-2xl rounded"></div>
                <span class="text-gray-500">shadow-2xl — .main_content column</span>
              </div>
            </div>
          </div>

          <!-- Borders -->
          <div class="bg-white shadow-md p-6">
            <h3 class="font-mono text-xs uppercase font-semibold text-gray-400 mb-4 tracking-widest">Borders & Dividers</h3>
            <div class="space-y-5 font-mono text-xs text-gray-500">
              <div>
                <div class="border-b border-gray-300 pb-2 mb-1">Divider line</div>
                <span>border-b border-gray-300 — nav, section separators</span>
              </div>
              <div>
                <div class="border-b border-dashed border-gray-300 pb-2 mb-1">Dashed divider</div>
                <span>border-b border-dashed — content section breaks</span>
              </div>
              <div>
                <div class="border-b-2 border-rosso-500 pb-2 mb-1">Active underline</div>
                <span>border-b-2 border-rosso-500 — active nav state</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- Footer -->
    <div class="bg-scuro-900 text-white px-12 py-6 font-mono text-xs text-center mb-8">
      SEDHC V3 Design System · Internal Reference · Not linked from site navigation
    </div>

  </div>
</template>

<script setup lang="ts">

// ── Sub-components (inline, no separate files) ─────────────────

// Color swatch
const ColorSwatch = defineComponent({
  props: {
    name: String, hex: String, label: String, usage: String, light: Boolean,
  },
  setup(props) {
    const textColor = computed(() => props.light ? 'text-gray-800' : 'text-white')
    return { textColor }
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
  `,
})

// Section title
const SectionTitle = defineComponent({
  template: `
    <div class="mb-6">
      <h2 class="text-2xl font-bold font-serif text-scuro-900"><slot /></h2>
      <div class="mt-2 h-px bg-scuro-900/10"></div>
    </div>
  `,
})

// Type sample
const TypeSample = defineComponent({
  props: { size: String, label: String, example: String, mono: Boolean },
  template: `
    <div class="flex items-baseline gap-6 py-3 border-b border-gray-100">
      <div class="w-48 flex-shrink-0 font-mono text-[10px] text-gray-400 leading-tight">{{ label }}</div>
      <div :class="[size, mono ? 'font-mono uppercase tracking-widest' : 'font-serif', 'text-gray-800']">{{ example }}</div>
    </div>
  `,
})

// Grid pattern
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
  `,
})

// Text combo
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
  `,
})

// ── Data ───────────────────────────────────────────────────────

const sections = [
  { name: 'Noticias', color: 'orange-600 (Tailwind)', hex: '#ea580c' },
  { name: 'Tratados', color: 'rosso-500', hex: '#a81525' },
  { name: 'Congresos', color: 'blu-500', hex: '#1A3163' },
  { name: 'Revista', color: 'azzurro-500', hex: '#025b7b' },
  { name: 'Libros', color: 'verde-500', hex: '#1a6347' },
  { name: 'Sociedad', color: 'amber-400 (Tailwind)', hex: '#fbbf24' },
]

const iconGroups = [
  {
    label: 'Navigation & UI',
    icons: [
      { name: 'lucide:arrow-left', usage: 'Back navigation' },
      { name: 'lucide:arrow-right', usage: 'Forward / next' },
      { name: 'lucide:external-link', usage: 'External link' },
      { name: 'lucide:square-arrow-left', usage: 'Close side panel' },
    ],
  },
  {
    label: 'Actions & Content',
    icons: [
      { name: 'lucide:search', usage: 'Search input' },
      { name: 'lucide:calendar', usage: 'Sort by date' },
      { name: 'lucide:cloud-download', usage: 'Sort by downloads' },
      { name: 'lucide:book-open', usage: 'Archive / view' },
      { name: 'lucide:hard-drive-download', usage: 'PDF download' },
      { name: 'lucide:app-window-mac', usage: 'Website link' },
      { name: 'lucide:link', usage: 'Generic link' },
      { name: 'lucide:mail', usage: 'Email contact' },
    ],
  },
  {
    label: 'View Toggles',
    icons: [
      { name: 'lucide:layout-list', usage: 'List view' },
      { name: 'lucide:grid-3x3', usage: 'Grid view' },
      { name: 'lucide:list-ordered', usage: 'Compact view' },
    ],
  },
  {
    label: 'Social Media (MDI / Prime)',
    icons: [
      { name: 'mdi:facebook', usage: 'Facebook share' },
      { name: 'prime:twitter', usage: 'Twitter share' },
    ],
  },
]

const iconSizes = [
  { cls: 'size-4', px: '16px' },
  { cls: 'size-5', px: '20px' },
  { cls: 'size-6', px: '24px' },
  { cls: 'size-8', px: '32px' },
  { cls: 'size-12', px: '48px' },
  { cls: 'size-24', px: '96px' },
]

// ── SEO / meta ─────────────────────────────────────────────────
useHead({
  title: 'Design System · SEDHC V3',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

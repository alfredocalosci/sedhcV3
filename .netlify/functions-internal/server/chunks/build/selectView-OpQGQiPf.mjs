import __nuxt_component_7 from './index-B5zsnP7H.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "selectSort",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: "download"
    },
    sortOrder: {
      type: String,
      default: "asc"
    }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const toggleSort = () => {
      emit("update:sortOrder", props.sortOrder === "asc" ? "desc" : "asc");
    };
    const toggleSortBy = (field) => {
      if (props.modelValue === field) ;
      else {
        emit("update:sortBy", field);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 items-center justify-between" }, _attrs))}><p class="text-xs/3 font-mono text-gray-500 pr-2">ordenar por:</p><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:cloud-download",
        style: { "color": "black" },
        size: "24",
        class: ["cursor-pointer", props.modelValue === "downloads" ? "opacity-100" : "opacity-20"],
        onClick: ($event) => toggleSortBy("downloads")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar",
        style: { "color": "black" },
        onClick: ($event) => toggleSortBy("year"),
        class: ["cursor-pointer", props.modelValue === "year" ? "opacity-100" : "opacity-20"],
        size: "24"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: props.sortOrder === "asc" ? "lucide:sort-asc" : "lucide:sort-desc",
        style: { "color": "black" },
        size: "18",
        onClick: toggleSort,
        class: "ml-1 cursor-pointer"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/selectSort.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "SelectSort" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "selectView",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: "list"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const setView = (view) => {
      emit("update:modelValue", view);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between gap-2" }, _attrs))}><p class="text-xs/3 font-mono pr-2 text-gray-500">mostrar como:</p><div class="flex gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layout-list",
        style: { "color": "black" },
        size: "24",
        class: ["cursor-pointer", props.modelValue == "list" ? "opacity-100" : "opacity-20"],
        onClick: ($event) => setView("list")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:grid-3x3",
        style: { "color": "black" },
        size: "24",
        class: ["cursor-pointer", props.modelValue == "grid" ? "opacity-100" : "opacity-20"],
        onClick: ($event) => setView("grid")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:list-ordered",
        style: { "color": "black" },
        size: "24",
        class: ["cursor-pointer", props.modelValue == "compact" ? "opacity-100" : "opacity-20"],
        onClick: ($event) => setView("compact")
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/selectView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "SelectView" });

export { __nuxt_component_5 as _, __nuxt_component_6 as a };
//# sourceMappingURL=selectView-OpQGQiPf.mjs.map

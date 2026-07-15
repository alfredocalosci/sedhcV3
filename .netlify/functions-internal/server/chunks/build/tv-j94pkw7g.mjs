import { getCurrentInstance, computed, inject, provide } from 'vue';
import { y as defu, H as withLeadingSlash, F as withTrailingSlash, r as joinURL } from '../nitro/nitro.mjs';
import { j as useAppConfig, k as appConfig } from './server.mjs';
import { createTV, cnMerge } from 'tailwind-variants';

function createContext(providerComponentName, contextName) {
  const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
  const injectionKey = Symbol(symbolDescription);
  const injectContext = (fallback) => {
    const context = inject(injectionKey, fallback);
    if (context) return context;
    if (context === null) return context;
    throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
  };
  const provideContext = (contextValue) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };
  return [injectContext, provideContext];
}
function omit(data, keys) {
  const result = { ...data };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
function mergeClasses(appConfigClass, propClass) {
  if (!appConfigClass && !propClass) {
    return "";
  }
  return [
    ...Array.isArray(appConfigClass) ? appConfigClass : [appConfigClass],
    propClass
  ].filter(Boolean);
}
function getSlotChildrenText(children) {
  return children.map((node) => {
    if (!node.children || typeof node.children === "string") return node.children || "";
    else if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
    else if (node.children.default) return getSlotChildrenText(node.children.default());
  }).join("");
}
function transformUI(ui, uiProp) {
  return Object.entries(ui).reduce((acc, [key, value]) => {
    acc[key] = typeof value === "function" ? value({ class: uiProp?.[key] }) : value;
    return acc;
  }, { ...uiProp || {} });
}
function resolveBaseURL(path, baseURL) {
  if (path?.startsWith("/") && !path.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(baseURL || "/"));
    if (_base !== "/" && !path.startsWith(_base)) {
      return joinURL(_base, path);
    }
  }
  return path;
}
const [_injectThemeContext] = createContext("UTheme", "RootContext");
const defaultThemeContext = {
  defaults: computed(() => ({}))
};
function injectThemeContext(fallback = defaultThemeContext) {
  return _injectThemeContext(fallback);
}
function camelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
function kebabCase(str) {
  return str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function propIsDefined(vnode, prop) {
  if (!vnode || !vnode.props) return false;
  return vnode.props[camelCase(prop)] !== void 0 || vnode.props[kebabCase(prop)] !== void 0;
}
function useComponentProps(name, props) {
  const vm = getCurrentInstance();
  const { defaults } = injectThemeContext();
  const appConfig2 = useAppConfig();
  return new Proxy(props, {
    get(target, prop, receiver) {
      if (prop === "__v_isReactive") return true;
      if (prop === "__v_raw") return target;
      const raw = Reflect.get(target, prop, receiver);
      if (typeof prop !== "string") return raw;
      const themeEntry = name.includes(".") ? get(defaults.value, name) : defaults.value[name];
      if (prop === "ui") {
        const themeUi = themeEntry?.ui;
        if (!raw && !themeUi) return raw;
        return defu(raw ?? {}, themeUi ?? {});
      }
      if (vm && propIsDefined(vm.vnode, prop)) return raw;
      const themeValue = themeEntry?.[prop];
      if (themeValue !== void 0) return themeValue;
      const propDef = vm?.type?.props?.[prop];
      if (propDef && Object.prototype.hasOwnProperty.call(propDef, "default")) {
        return raw;
      }
      const appConfigEntry = name.includes(".") ? get(appConfig2.ui ?? {}, name) : appConfig2.ui?.[name];
      return appConfigEntry?.defaultVariants?.[prop];
    },
    // `has`, `ownKeys`, and `getOwnPropertyDescriptor` reflect the underlying
    // `defineProps` schema only — theme defaults are NOT enumerable. As a
    // result, `Object.keys(props)`, `for…in`, and `{ ...props }` see only the
    // declared prop keys, but each value lookup still flows through the proxy.
    // This is the contract our internal `useForwardProps` relies on.
    has: (t, p) => Reflect.has(t, p),
    ownKeys: (t) => Reflect.ownKeys(t),
    getOwnPropertyDescriptor: (t, p) => Reflect.getOwnPropertyDescriptor(t, p)
  });
}
const appConfigTv = appConfig;
const config = appConfigTv.ui?.tv;
const baseTv = /* @__PURE__ */ createTV(config);
function findReplacer(value) {
  if (typeof value === "function") {
    return value;
  }
  if (Array.isArray(value)) {
    for (let i = value.length - 1; i >= 0; i--) {
      const replacer = findReplacer(value[i]);
      if (replacer) {
        return replacer;
      }
    }
  }
  return void 0;
}
function plainClasses(value) {
  if (Array.isArray(value)) {
    return value.flatMap((item) => plainClasses(item));
  }
  if (typeof value === "function") {
    return [];
  }
  return [value];
}
function applyReplacer(replacer, slotProps, resolveDefaults) {
  return cnMerge(replacer(resolveDefaults()), ...plainClasses(slotProps.class), ...plainClasses(slotProps.className))(config) ?? "";
}
function wrapSlots(slots, directives) {
  return new Proxy(slots, {
    get(target, key) {
      const slot = target[key];
      if (typeof slot !== "function") {
        return slot;
      }
      return (slotProps = {}) => {
        const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className) ?? directives?.[key];
        if (!replacer) {
          return slot(slotProps);
        }
        return applyReplacer(replacer, slotProps, () => slot({ ...slotProps, class: void 0, className: void 0 }));
      };
    }
  });
}
function extractDirectives(componentConfig) {
  if (!componentConfig || typeof componentConfig !== "object") {
    return { config: componentConfig };
  }
  let config2 = componentConfig;
  let directives;
  if (typeof componentConfig.base === "function") {
    directives = { base: componentConfig.base };
    config2 = { ...config2, base: "" };
  }
  const slots = componentConfig.slots;
  if (slots && typeof slots === "object") {
    const replacers = Object.entries(slots).filter(([, value]) => typeof value === "function");
    if (replacers.length) {
      directives ??= {};
      const cleaned = { ...slots };
      for (const [slot, replacer] of replacers) {
        directives[slot] = replacer;
        cleaned[slot] = "";
      }
      config2 = { ...config2, slots: cleaned };
    }
  }
  return { config: config2, directives };
}
const tv = ((componentConfig) => {
  const { config: cleanConfig, directives } = extractDirectives(componentConfig);
  const component = baseTv(cleanConfig);
  return new Proxy(component, {
    apply(target, thisArg, args) {
      const result = Reflect.apply(target, thisArg, args);
      if (result && typeof result === "object") {
        return wrapSlots(result, directives);
      }
      if (typeof result === "string") {
        const slotProps = args[0] ?? {};
        const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className) ?? directives?.base;
        if (replacer) {
          return applyReplacer(replacer, slotProps, () => Reflect.apply(target, thisArg, [{ ...slotProps, class: void 0, className: void 0 }]));
        }
      }
      return result;
    }
  });
});

export { transformUI as a, getSlotChildrenText as b, createContext as c, get as g, mergeClasses as m, omit as o, resolveBaseURL as r, tv as t, useComponentProps as u };
//# sourceMappingURL=tv-j94pkw7g.mjs.map

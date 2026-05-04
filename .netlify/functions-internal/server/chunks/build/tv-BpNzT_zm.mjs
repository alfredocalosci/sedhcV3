import { computed } from 'vue';
import { y as defu, F as withLeadingSlash, E as withTrailingSlash, j as joinURL } from '../nitro/nitro.mjs';
import { createContext } from 'reka-ui';
import { createTV } from 'tailwind-variants';
import { k as appConfig } from './server.mjs';

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
const [injectThemeContext, provideThemeContext] = createContext("UTheme", "RootContext");
function useComponentUI(name, props) {
  const { ui } = injectThemeContext({ ui: computed(() => ({})) });
  return computed(() => {
    const themeOverrides = get(ui.value, name) || {};
    return defu(props.ui ?? {}, themeOverrides);
  });
}
const appConfigTv = appConfig;
const tv = /* @__PURE__ */ createTV(appConfigTv.ui?.tv);

export { transformUI as a, get as g, mergeClasses as m, omit as o, resolveBaseURL as r, tv as t, useComponentUI as u };
//# sourceMappingURL=tv-BpNzT_zm.mjs.map

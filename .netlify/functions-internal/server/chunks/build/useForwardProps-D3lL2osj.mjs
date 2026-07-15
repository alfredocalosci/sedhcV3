import { computed, isRef, getCurrentInstance, toHandlerKey, camelize } from 'vue';

function useEmitAsProps(emit) {
  const vm = getCurrentInstance();
  const events = vm?.type.emits;
  const result = {};
  if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
  });
  return result;
}
function useForwardProps(source, emits) {
  const emitAsProps = emits ? useEmitAsProps(emits) : {};
  return computed(() => {
    const src = isRef(source) ? source.value : source;
    const out = { ...emitAsProps };
    for (const key in src) {
      const value = src[key];
      if (value !== void 0) out[key] = value;
    }
    return out;
  });
}

export { useForwardProps as u };
//# sourceMappingURL=useForwardProps-D3lL2osj.mjs.map

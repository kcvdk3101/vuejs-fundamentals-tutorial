export const truncateWords = (str, count) => {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ")
}

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (typeof func === 'function') {
        func.apply(context, args);
      }
    }, wait);
  };
}
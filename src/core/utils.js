//Pure functions (чистые функции) - это функции, которые при выполнении одного и того же набора входных данных всегда возвращают одинаковый результат и не имеют побочных эффектов.

export const capitalize = (string = "") => {
  if (typeof string !== "string") {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const range = (start, end) => {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1).fill("").map((_, index) => start + index);
};

export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const isEquel = (a, b) => {
  if (typeof a === "object" && typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
};

export const camelToDashCase = (string) => {
  return string.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
};

export const toInlineStyles = (styles = {}) => {
  return Object.keys(styles)
    .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
    .join(";");
};

export const debounce = (fn, wait) => {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const preventDefault = (event) => {
  event.preventDefault();
};

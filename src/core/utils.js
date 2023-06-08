//Pure functions (чистые функции) - это функции, которые при выполнении одного и того же набора входных данных всегда возвращают одинаковый результат и не имеют побочных эффектов.

export const capitalize = (string = "") => {
  if (typeof string !== "string") {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

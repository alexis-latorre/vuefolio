export const capitalize = (str) => {
  if (!str) return "";
  if (str.length === 1) return str.toUpperCase();
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};

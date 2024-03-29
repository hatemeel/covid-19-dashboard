export const capitalize = (str) => {
  if (typeof str === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

export const splitNumber = (number) => {
  if (typeof number === 'number') {
    return number.toLocaleString();
  }
  return number;
};

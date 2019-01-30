export const mirrorKeys = keys => keys.reduce((accumulator, key) => {
  accumulator[key] = key;

  return accumulator;
}, {});

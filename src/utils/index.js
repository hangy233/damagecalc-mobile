export const mirrorKeys = keys => keys.reduce((accumulator, key) => {
  accumulator[key] = key;

  return accumulator;
}, {});

export const extend = (baseItem, ...items) => {
  items.forEach(item => {
    Object.keys(item).forEach((key, i) => {
      if (!baseItem[key] || typeof baseItem[key] !== 'object') {
        baseItem[key] = item[key];
      } else {
        baseItem[key] = extend({}, baseItem[key], item[key]);
      }
    });
  });

  return baseItem;
};

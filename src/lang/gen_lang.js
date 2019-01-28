const readline = require('readline');
const fs = require('fs');

const battleItems = require('../assets/json/battle_items.json');

const langs = {
  // 1: 'ja-Hrkt',
  // 2: 'roomaji',
  3: 'ko',
  4: 'zh-Hant',
  5: 'fr',
  6: 'de',
  7: 'es',
  8: 'it',
  9: 'en',
  // 10: 'cs',
  11: 'ja',
  12: 'zh-Hans',
};
const categories = [
  'abilities',
  'items',
  'moves',
  'natures',
  'stats',
  'types',
  'pokemons',
];
let names = {};
let prevKey = '1';


const appendSyncAllLangFile = (data) => {
  Object.values(langs).forEach((lang) => {
    const fileName = `${lang}.json`;

    fs.appendFileSync(fileName, data);
  });
};

const clearAllLangFile = () => {
  Object.values(langs).forEach((lang) => {
    const fileName = `${lang}.json`;

    fs.writeFileSync(fileName, '');
  });
};

const readCategory = (i = 0, callback) => {
  const category = categories[i];

  if (!category) {
    callback();

    return;
  }

  const reader = readline.createInterface({
    input: fs.createReadStream(`${category}.txt`),
  });

  reader.on('line', (line) => {
    const [key, langId, ...nameArray] = line.split(',');

    if (key !== prevKey) {
      Object.values(langs).forEach((lang) => {
        const fileName = `${lang}.json`;
        const newLine = `  "${category}_${names.en}": "${names[lang] || ''}",`;

        if (category !== 'items' || battleItems[names.en]) {
          fs.appendFileSync(fileName, `${newLine}\n`);
        }
      });

      prevKey = key;
      names = {};
    }

    const langName = langs[langId];
    names[langName] = category === 'pokemons' ? nameArray[0] : nameArray.join('');
  });

  reader.on('close', () => {
    Object.values(langs).forEach((lang) => {
      const fileName = `${lang}.json`;
      const newLine = `  "${category}_${names.en}": "${names[lang] || ''}",`;

      if (category !== 'items' || battleItems[names.en]) {
        fs.appendFileSync(fileName, `${newLine}\n`);
      }
    });

    prevKey = '1';
    names = {};
    readCategory(i + 1, callback);
  });
};

clearAllLangFile('');
appendSyncAllLangFile('{\n');
readCategory(0, () => {
  appendSyncAllLangFile('}');
});

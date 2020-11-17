import en from './en.json';
import uk from './uk.json';

const locales = {
  en,
  uk,
};

const translate = (lang = 'en') => {
  if (!Object.keys(locales).includes(lang)) {
    throw new Error(`Unsupported language: ${lang}`);
  }

  return (keyStr, toReplace, replaceWith) => {
    const keys = keyStr.split('.');
    let res = locales[lang];
    let currentKey = '';
    keys.map((key) => {
      currentKey = key;
      res = res[key];
    });

    if (toReplace && replaceWith) {
      res = res.replace(toReplace, replaceWith);
    }

    return res || `[Translation error]: key "${currentKey}" not found`;
  };
};

export { translate };

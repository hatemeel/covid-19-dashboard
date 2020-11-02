import { createIconSet } from '@expo/vector-icons';
const glyphMap = require('../assets/fonts/remixicon.glyph.json');
const Icon = createIconSet(
  tranformGlyphMap(glyphMap),
  'remixicon',
  'remixicon.ttf'
);
export default Icon;

function tranformGlyphMap(gm) {
  return Object.keys(gm).reduce((acc, key) => {
    acc[key] = String.fromCharCode(parseInt(gm[key].unicode.substr(3), 16));
    return acc;
  }, {});
}

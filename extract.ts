import { translations } from './src/lib/translations.ts';
import fs from 'fs';

Object.keys(translations).forEach(lang => {
  fs.writeFileSync('./src/i18n/dictionaries/' + lang + '.json', JSON.stringify((translations as any)[lang], null, 2));
  console.log('Wrote ' + lang + '.json');
});

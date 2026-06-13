import { translations } from './src/lib/translations.ts';
import * as fs from 'fs';
fs.writeFileSync('pl_translations.json', JSON.stringify(translations.pl, null, 2));

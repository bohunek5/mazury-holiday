import { translations } from '../src/lib/translations';

for (const [lang, data] of Object.entries(translations)) {
    console.log(`\nLang: ${lang}`);
    console.log(`  mapTitle:`, data.stranda?.mapTitle);
    console.log(`  mapLabels:`, data.stranda?.mapLabels);
    console.log(`  features:`, data.stranda?.features);
}

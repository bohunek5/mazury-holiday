import { translations } from './src/lib/translations';

const language = 'en';
const section = 'apartmentNames';
const key = 'Z 1 sypialnią i jacuzzi na dachu';

const keys = key.split('.');
let result = translations[language][section];
for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
        result = result[k];
    } else {
        result = undefined;
        break;
    }
}
console.log(result);

import { Project, SyntaxKind, Node } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');
const translationsDecl = sourceFile.getVariableDeclarationOrThrow('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const addToLang = (lang: string, seeCottage: string, seeRooms: string) => {
    const langProp = init.getProperty(lang);
    if (!langProp || !Node.isPropertyAssignment(langProp)) return;
    const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) return;
    
    const aptProp = langObj.getProperty('apartments');
    if (!aptProp || !Node.isPropertyAssignment(aptProp)) return;
    const aptObj = aptProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!aptObj) return;

    if (!aptObj.getProperty('seeCottage')) {
        aptObj.addPropertyAssignment({ name: 'seeCottage', initializer: `"${seeCottage}"` });
    }
    if (!aptObj.getProperty('seeRooms')) {
        aptObj.addPropertyAssignment({ name: 'seeRooms', initializer: `"${seeRooms}"` });
    }
};

addToLang('pl', 'Zobacz domki', 'Zobacz pokoje');
addToLang('en', 'View cottages', 'View rooms');
addToLang('de', 'Hütten ansehen', 'Zimmer ansehen');
addToLang('lt', 'Žiūrėti namelius', 'Žiūrėti kambarius');
addToLang('cs', 'Zobrazit chaty', 'Zobrazit pokoje');
addToLang('es', 'Ver cabañas', 'Ver habitaciones');
addToLang('it', 'Vedi le case', 'Vedi le camere');

sourceFile.saveSync();
console.log('Saved seeCottage');

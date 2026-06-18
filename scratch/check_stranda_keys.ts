import { Project, SyntaxKind, Node } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');
const translationsDecl = sourceFile.getVariableDeclarationOrThrow('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const langs = ['pl', 'en', 'de', 'lt', 'cs', 'es', 'it'];
const report: Record<string, any> = {};

langs.forEach(lang => {
    report[lang] = {};
    const langProp = init.getProperty(lang);
    if (!langProp || !Node.isPropertyAssignment(langProp)) return;
    const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) return;

    const strandaProp = langObj.getProperty('stranda');
    if (!strandaProp || !Node.isPropertyAssignment(strandaProp)) return;
    const strandaObj = strandaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!strandaObj) return;

    ['filters', 'features', 'mapLabels'].forEach(key => {
        const prop = strandaObj.getProperty(key);
        report[lang][key] = prop ? true : false;
    });
});

console.log(JSON.stringify(report, null, 2));

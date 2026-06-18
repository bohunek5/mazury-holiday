import { Project, SyntaxKind, Node } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');
const translationsDecl = sourceFile.getVariableDeclarationOrThrow('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const langs = ['pl', 'en', 'de', 'lt', 'cs', 'es', 'it'];
const keysToCheck = ['cooperationPage', 'coopExtra', 'coopModels', 'coopSteps'];

const report: Record<string, any> = {};

langs.forEach(lang => {
    report[lang] = {};
    const langProp = init.getProperty(lang);
    if (!langProp || !Node.isPropertyAssignment(langProp)) {
        report[lang] = 'MISSING LANGUAGE OBJECT';
        return;
    }
    const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) return;

    keysToCheck.forEach(key => {
        const prop = langObj.getProperty(key);
        report[lang][key] = prop ? true : false;
    });
});

console.log(JSON.stringify(report, null, 2));

// @ts-nocheck
import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');

const translationsDecl = sourceFile.getVariableDeclaration('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const skorupkiEn = {
    aboutTitle: "About the cottages",
    title: "Skorupki Cottages",
    subtitle: "Your luxury haven in the heart of Masuria",
    introTitle: "Intimate settlement in Masuria",
    descriptionPart1: "Skorupki Cottages is an intimate settlement of 10 elegant holiday cottages, located in the village of Skorupki, in one of the most peaceful and green parts of Masuria.",
    descriptionPart2: "The cottages are designed to blend harmoniously with the surroundings, offering high standards and comfort.",
    descriptionPart3: "Each cottage has a private terrace, a living room with a kitchenette, two bedrooms, and a modern bathroom.",
    descriptionPart4: "Direct access to the lake, private pier, and numerous attractions make it an ideal place for family holidays.",
    amenitiesTitle: "Cottage amenities"
};

['de', 'lt'].forEach(lang => {
    const langProp = init.getPropertyOrThrow(lang);
    const langObj = langProp.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    
    if (!langObj.getProperty('skorupki')) {
        langObj.addPropertyAssignment({
            name: 'skorupki',
            initializer: JSON.stringify(skorupkiEn, null, 12).replace(/"([^"]+)":/g, '$1:')
        });
        console.log(`Added skorupki to ${lang}`);
    }
});

sourceFile.saveSync();
console.log('Saved');

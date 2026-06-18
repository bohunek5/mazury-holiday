import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
project.addSourceFileAtPath("../src/lib/translations.ts");

const sourceFile = project.getSourceFileOrThrow("../src/lib/translations.ts");

const translationsObj = sourceFile.getVariableDeclarationOrThrow("translations").getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const translations: Record<string, string> = {
    pl: "O domkach",
    en: "About the cottages",
    de: "Über die Ferienhäuser",
    lt: "Apie namelius",
    cs: "O chatách"
};

for (const lang of Object.keys(translations)) {
    const langProp = translationsObj.getProperty(lang);
    if (langProp && langProp.getKind() === SyntaxKind.PropertyAssignment) {
        const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (langObj) {
            const skorupkiProp = langObj.getProperty("skorupki");
            if (skorupkiProp && skorupkiProp.getKind() === SyntaxKind.PropertyAssignment) {
                const skorupkiObj = skorupkiProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
                if (skorupkiObj) {
                    // check if aboutTitle exists
                    if (!skorupkiObj.getProperty("aboutTitle")) {
                        skorupkiObj.addPropertyAssignment({
                            name: "aboutTitle",
                            initializer: `"${translations[lang]}"`
                        });
                        console.log(`Added aboutTitle for ${lang}`);
                    }
                }
            }
        }
    }
}

sourceFile.saveSync();
console.log("Done");

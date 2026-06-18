import fs from 'fs';
import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');

const translationsDecl = sourceFile.getVariableDeclaration('translations');
if (!translationsDecl) throw new Error('No translations');
const objLiteral = translationsDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
if (!objLiteral) throw new Error('No object literal');

const targetLangObj = objLiteral.getProperties().filter(p => p.getKind() === SyntaxKind.PropertyAssignment);

const replacements: Record<string, { fuledaAbout: string; jezioro: string }> = {
    pl: { fuledaAbout: 'O apartamencie', jezioro: 'jezioro' },
    en: { fuledaAbout: 'About the apartment', jezioro: 'Lake' },
    de: { fuledaAbout: 'Über das Apartment', jezioro: 'See' },
    es: { fuledaAbout: 'Sobre el apartamento', jezioro: 'Lago' },
    it: { fuledaAbout: 'Sull\'appartamento', jezioro: 'Lago' },
    fr: { fuledaAbout: 'A propos de l\'appartement', jezioro: 'Lac' },
    cs: { fuledaAbout: 'O apartmánu', jezioro: 'Jezero' },
    lt: { fuledaAbout: 'Apie apartamentus', jezioro: 'Ežeras' },
    da: { fuledaAbout: 'Om lejligheden', jezioro: 'Sø' },
    sv: { fuledaAbout: 'Om lägenheten', jezioro: 'Sjö' },
    no: { fuledaAbout: 'Om leiligheten', jezioro: 'Innsjø' },
    fi: { fuledaAbout: 'Tietoja huoneistosta', jezioro: 'Järvi' }
};

for (const prop of targetLangObj) {
    const lang = prop.getName();
    if (!replacements[lang]) continue;

    const langObj = prop.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) continue;

    // 1. Fix Fuleda aboutTitle
    const fuledaProp = langObj.getProperty('fuleda');
    if (fuledaProp && fuledaProp.getKind() === SyntaxKind.PropertyAssignment) {
        const fuledaObj = fuledaProp.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
        if (fuledaObj) {
            const aboutProp = fuledaObj.getProperty('aboutTitle');
            if (aboutProp && aboutProp.getKind() === SyntaxKind.PropertyAssignment) {
                aboutProp.setInitializer(`"${replacements[lang].fuledaAbout}"`);
            }
        }
    }

    // 2. Replace "jezioro" in location descriptions globally in this language
    // We will do a generic text replace for the whole language object for locations
    const replaceJezioro = (text: string, lang: string) => {
        if (lang === 'pl') return text; // Keep 'jezioro' in PL
        const repl = replacements[lang].jezioro;
        return text
            .replace(/jezioro Dobskie/g, `${repl} Dobskie`)
            .replace(/jezioro Kisajno/g, `${repl} Kisajno`)
            .replace(/jeziora Kisajno/g, `${repl} Kisajno`) // Kisajno is uninflected in English
            .replace(/jezioro Tałty/g, `${repl} Tałty`)
            .replace(/jezioro Mikołajskie/g, `${repl} Mikołajskie`)
            .replace(/jezioro/g, repl.toLowerCase());
    };

    // Let's just find specific strings and update them
    langObj.getDescendantsOfKind(SyntaxKind.StringLiteral).forEach(str => {
        const val = str.getLiteralValue();
        if (val.includes('jezioro') || val.includes('jeziora')) {
            const parentProp = str.getParentIfKind(SyntaxKind.PropertyAssignment);
            if (parentProp) {
                const newText = replaceJezioro(val, lang);
                if (newText !== val) {
                    str.replaceWithText(`\`${newText.replace(/\n/g, '\\n')}\``);
                }
            }
        }
    });
    
    langObj.getDescendantsOfKind(SyntaxKind.NoSubstitutionTemplateLiteral).forEach(str => {
        const val = str.getLiteralValue();
        if (val.includes('jezioro') || val.includes('jeziora')) {
            const newText = replaceJezioro(val, lang);
            if (newText !== val) {
                str.replaceWithText(`\`${newText.replace(/\n/g, '\\n')}\``);
            }
        }
    });
}

sourceFile.saveSync();
console.log('Translations updated.');

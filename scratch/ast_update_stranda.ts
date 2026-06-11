import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';

const project = new Project();
const filePath = path.resolve('src/data/stranda-apartments.ts');
const sourceFile = project.addSourceFileAtPath(filePath);

const parsedJsonPath = path.resolve('scratch/ido_parsed.json');
const idoData = JSON.parse(fs.readFileSync(parsedJsonPath, 'utf8'));

const keysToRemove = ['B101', 'B104', 'B105', 'B302', 'c-studio', 'c-z-dwoma-sypialniami', 'c-z-jedna-sypialnia'];

const variableDeclaration = sourceFile.getVariableDeclarationOrThrow('strandaApartments');
const initializer = variableDeclaration.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

for (const prop of properties) {
    if (prop.isKind(SyntaxKind.PropertyAssignment)) {
        let key = prop.getName();
        if (key.startsWith("'") || key.startsWith('"')) {
            key = key.slice(1, -1);
        }
        
        if (keysToRemove.includes(key)) {
            console.log(`Removing ${key}`);
            prop.remove();
            continue;
        }
        
        const valueObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (valueObj) {
            const idoEntry = idoData[key.toUpperCase()];
            if (idoEntry) {
                const exactTitle = idoEntry.title || '';
                
                // Update title
                const titleProp = valueObj.getProperty('title');
                if (titleProp && titleProp.isKind(SyntaxKind.PropertyAssignment)) {
                    titleProp.setInitializer(`"${exactTitle.replace(/"/g, '\\"')}"`);
                }
                
                // Update shortTitle
                const shortTitleProp = valueObj.getProperty('shortTitle');
                if (shortTitleProp && shortTitleProp.isKind(SyntaxKind.PropertyAssignment)) {
                    shortTitleProp.setInitializer(`"${exactTitle.replace(/"/g, '\\"')}"`);
                }
            } else {
                 console.log(`Warning: ${key} not found in idoData`);
            }
        }
    }
}

sourceFile.saveSync();
console.log("AST modification complete.");

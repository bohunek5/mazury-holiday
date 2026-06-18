const fs = require('fs');

const ts = require('typescript');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');
const sourceFile = ts.createSourceFile('translations.ts', content, ts.ScriptTarget.Latest, true);

function visit(node) {
    if (ts.isVariableStatement(node)) {
        const decl = node.declarationList.declarations[0];
        if (decl.name.text === 'translations') {
            const init = decl.initializer;
            if (ts.isObjectLiteralExpression(init)) {
                init.properties.forEach(prop => {
                    if (ts.isPropertyAssignment(prop) && prop.name && ts.isIdentifier(prop.name)) {
                        const lang = prop.name.text;
                        if (lang === 'de' || lang === 'lt') {
                            console.log(`Language ${lang} has:`);
                            if (ts.isObjectLiteralExpression(prop.initializer)) {
                                prop.initializer.properties.forEach(inner => {
                                    if (ts.isPropertyAssignment(inner) && inner.name && ts.isIdentifier(inner.name)) {
                                        console.log(`  ${inner.name.text}`);
                                    } else if (ts.isSpreadAssignment(inner)) {
                                        console.log(`  ... spread`);
                                    }
                                });
                            }
                        }
                    }
                });
            }
        }
    }
    ts.forEachChild(node, visit);
}

visit(sourceFile);

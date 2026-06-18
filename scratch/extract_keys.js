const fs = require('fs');

const ts = require('typescript');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');
const sourceFile = ts.createSourceFile('translations.ts', content, ts.ScriptTarget.Latest, true);

let output = '';

function visit(node, indent) {
    if (ts.isPropertyAssignment(node)) {
        if (node.name && ts.isIdentifier(node.name)) {
            if (node.name.text === 'pl' || node.name.text === 'en' || node.name.text === 'de' || node.name.text === 'lt' || node.name.text === 'cs' || node.name.text === 'es' || node.name.text === 'it' || node.name.text === 'skorupki' || node.name.text === 'aboutTitle') {
                output += ' '.repeat(indent) + node.name.text + '\n';
                if (node.name.text === 'aboutTitle' && ts.isStringLiteral(node.initializer)) {
                    output += ' '.repeat(indent + 2) + node.initializer.text + '\n';
                }
            }
        }
    }
    ts.forEachChild(node, n => visit(n, indent + 2));
}

// Find export const translations
let translationsNode = null;
ts.forEachChild(sourceFile, node => {
    if (ts.isVariableStatement(node)) {
        const decl = node.declarationList.declarations[0];
        if (decl.name.text === 'translations') {
            translationsNode = decl;
        }
    }
});

if (translationsNode) {
    visit(translationsNode, 0);
    fs.writeFileSync('scratch/keys.txt', output);
    console.log("Done");
} else {
    console.log("Not found");
}

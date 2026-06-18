import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("./src/lib/translations.ts");

const translationsDecl = sourceFile.getVariableDeclaration("translations");
const init = translationsDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

const pl = init.getProperty("pl").getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
const apartments = pl.getProperty("apartments").getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
const items = apartments.getProperty("items").getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];

const fuleda = items.getProperty("fuleda").getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
console.log("fuleda keys:", fuleda.getProperties().map(p => {
    if (p.getKind() === SyntaxKind.PropertyAssignment) {
        return p.getName();
    }
    return p.getText();
}));

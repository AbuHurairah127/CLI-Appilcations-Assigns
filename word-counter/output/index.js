import chalk from "chalk";
import inquirer from "inquirer";
let askedParagraph;
const askingParagraph = async () => {
    do {
        askedParagraph = await inquirer.prompt([
            { name: "paragraph", type: "input", message: "Enter a paragraph " },
        ]);
        askedParagraph.paragraph = askedParagraph.paragraph.trim();
    } while (askedParagraph.paragraph.length < 1);
};
const printingValues = () => {
    console.log("The number of characters in the the paragraph are=", chalk.bgYellow.black(askedParagraph.paragraph.length));
    console.log("The number of words in the the paragraph are=", chalk.bgYellow.black(askedParagraph.paragraph.split(" ").length));
};
await askingParagraph();
printingValues();

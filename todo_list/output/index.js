import chalk from "chalk";
import inquirer from "inquirer";
console.log("                   ::^^^:::^^^::.     :~!~^.     :^:::^^^:.          .^~!^.                         ");
console.log("                  !@@&&&@@@&&&@@G  :P@@&#&@@&?   J#@@@&&&@@&J.     J&@@&#&@@P.                      ");
console.log("                  ^#G   &@@.  Y&J 7@@B.    ~@@&.   @@&    ^&@@~  .&@@^    .B@@~                     ");
console.log("                        &@@.     .@@&       ~@@G   @@&      @@@  B@@^       &@@                     ");
console.log("                        &@@.     ~@@G       .@@&   @@&      B@@: @@@        B@@:                    ");
console.log("                        &@@.     .@@&       ^@@G   @@&      @@@. #@@:       &@@                     ");
console.log("                        &@@.      7@@G.    ^@@&.   @@&    ^&@@~  .&@&^    .B@@!                     ");
console.log("                      !B@@@#Y      :G@@&##&@&J   J#@@@&&&@@&Y.     Y&@&##&@@G.                      ");
console.log("                      .^^^^^:         :~!!^.     :^^^^^^^:.          .^!!~:                         ");
let todos = [], newTodo, nextAction;
const addTodo = async () => {
    do {
        newTodo = await inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "Enter the title of the Todo: ",
            },
            {
                name: "description",
                type: "input",
                message: "Enter the description of the Todo: ",
            },
        ]);
    } while ((newTodo === null || newTodo === void 0 ? void 0 : newTodo.title.length) < 3 || (newTodo === null || newTodo === void 0 ? void 0 : newTodo.description.length) < 15);
    newTodo = Object.assign(Object.assign({}, newTodo), { timeAdded: new Date(), id: todos.length });
    todos.push(newTodo);
    console.log(chalk.green("New todo successfully added."));
};
const askUserForNextAction = async () => {
    nextAction = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["Add new todo", "Delete a todo", "Read all todos"],
        },
    ]);
    switch (nextAction.action) {
        case "Add new todo":
            await addTodo();
            break;
        case "Read all todos":
            printAllTodos();
            break;
        default:
            break;
    }
};
const printAllTodos = () => {
    console.log(chalk.bgYellow.black("Printing all the todos you have added."));
    todos.forEach((todo, index) => {
        console.log(chalk.bgYellow.black(index + 1 + ")"), `Title: ${todo.title}`);
        console.log("Description", `: ${todo.description}`);
    });
    console.log("\n");
};
await addTodo();
do {
    await askUserForNextAction();
} while (true);
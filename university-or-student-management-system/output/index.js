import inquirer from "inquirer";
import showBanner from "node-banner";
import { Teacher } from "./teacher.js";
/* Creating an object with the name principal and assigning it the values of name, userName and
password. */
let principal = {
    name: "Zia Khan",
    userName: "ziakhan",
    password: "1234",
    role: "principle",
};
let aliRazzaq = new Teacher("Ali Razzaq", 28, "aliRazzaq", "1234", "dummyID", "teacher");
let teachers = [];
teachers.push(aliRazzaq);
// Printing welcome msg
const printWelcomeMsg = async () => {
    await (async () => {
        await showBanner("Uni .  of  Abu  Hurairah", "", "blue");
    })();
};
let loginData;
const login = async () => {
    do {
        loginData = await inquirer.prompt([
            {
                name: "loginAs",
                type: "list",
                message: "Do you want to login as:",
                choices: ["Student", "Teacher", "Principle"],
            },
            {
                name: "userName",
                type: "input",
                message: "Enter your username assigned by the institute:",
            },
            {
                name: "password",
                type: "password",
                mask: true,
                message: "Enter your 4 digit password assigned by the institute:",
            },
        ]);
    } while (loginData.userName.length < 3 || loginData.password.length !== 4);
    if (teachers.find((teacher) => teacher.getUserName() === loginData.userName)) {
    }
};
const completeProcedure = async () => {
    await printWelcomeMsg();
    login();
};
completeProcedure();

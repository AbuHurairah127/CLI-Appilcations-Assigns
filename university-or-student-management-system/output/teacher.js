import { Human } from "./Human.js";
/* The Teacher class extends the Human class and adds an employeeID property. */
export class Teacher extends Human {
    constructor(name, age, userName, password, role, employeeID) {
        super(name, age, userName, password, role);
        this.employeeID = employeeID;
    }
    getUserName() {
        return this.userName;
    }
}

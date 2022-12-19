import { Human } from "./Human.js";
/* The Student class extends the Human class and adds a rollNo and course property to it. */
export class Student extends Human {
  constructor(
    name: string,
    age: number,
    userName: string,
    password: string,
    role: string,
    private rollNo: string,
    private course: string
  ) {
    super(name, age, userName, password, role);
  }
}

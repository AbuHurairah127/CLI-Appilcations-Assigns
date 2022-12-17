import chalk from "chalk";
import inquirer from "inquirer";
// Creating a class using shortcut syntax

/* A class named Human with a constructor that takes 5 parameters, all of which are private and required
properties of the class. */
class Human {
  constructor(
    protected name: string,
    protected age: number,
    protected userName: string,
    protected password: string,
    protected role: string
  ) {}
}
/* The Teacher class extends the Human class and adds an employeeID property. */
class Teacher extends Human {
  constructor(
    name: string,
    age: number,
    userName: string,
    password: string,
    role: string,
    private employeeID: string
  ) {
    super(name, age, userName, password, role);
  }
  getUserName(): string {
    return this.userName;
  }
}
/* The Student class extends the Human class and adds a rollNo and course property to it. */
class Student extends Human {
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
/* Creating an object with the name principal and assigning it the values of name, userName and
password. */
let principal: {
  name: "Zia Khan";
  userName: "ziakhan";
  password: "1234";
  role: "principle";
} = {
  name: "Zia Khan",
  userName: "ziakhan",
  password: "1234",
  role: "principle",
};
let aliRazzaq: Teacher = new Teacher(
  "Ali Razzaq",
  28,
  "aliRazzaq",
  "1234",
  "dummyID",
  "teacher"
);
let teachers: Teacher[] = [];
teachers.push(aliRazzaq);
// Printing welcome msg
const printWelcomeMsg = () => {
  console.log(
    chalk.blue(
      "  ?J.       ^Y~              .5G^                                         ~GY   .:.                 "
    )
  );
  console.log(
    chalk.blue(
      "  #@.       7@Y                                                                 !@?                 "
    )
  );
  console.log(
    chalk.blue(
      "  #&.       7@Y  .7^.~?YJ7.   !?. 77      ^?:   ~?YJ7:   :7:^JY: .!JYJ?~  .?~ ^?5@P7?!.?~      ^?:  "
    )
  );
  console.log(
    chalk.blue(
      "  #&.       7@Y  ^@#P5?7J@P   B@: J@J    :&#. ~#BJ77G&7  !@#GJ?.^##?!7J7  ~@5 ^?5@P7?! G@~    :&B.  "
    )
  );
  console.log(
    chalk.blue(
      "  #&.       7@Y  ^@G.    G@:  G@:  G@^   P@^ :@#: . .#@: !@G.   ^&#!.     ~@Y   !@?    .#&:   G&:   "
    )
  );
  console.log(
    chalk.blue(
      "  #&.       7@Y  ^@P     G@:  G@:  :&B  ?@7  7@#5PPPPGG: !@J     :JB#BJ:  ~@Y   !@J     ^@G  Y@!    "
    )
  );
  console.log(
    chalk.blue(
      "  G@7       P@!  ^@P     G@:  G@:   7@?:@5   ~@B         !@Y        :7&&^ ~@Y   !@?      7@J~@Y     "
    )
  );
  console.log(
    chalk.blue(
      "  :G@P?!!7JB&?   ^@P     B@:  B@:    5@B#.    J@G7~^~!^  !@Y    .7!^^!#&^ ~@5   ~@G^!!    Y@&G      "
    )
  );
  console.log(
    chalk.blue(
      "    ~J5PPPY!.    .Y7     ?J.  ?J.    .JY^      ^J5PP5Y~  :Y!    :55PP5?:  :Y!    75P57    :@&:      "
    )
  );
  console.log(
    chalk.blue(
      "                                                                                         .P@~       "
    )
  );
  console.log(
    chalk.blue(
      "                                                                                        !##!        "
    )
  );
  console.log(
    chalk.blue(
      "                                                                                        :~          "
    )
  );
};
let loginData: { loginAs: string; userName: string; password: string };
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
  if (
    teachers.find((teacher) => teacher.getUserName() === loginData.userName)
  ) {
  }
};
const completeProcedure = () => {
  printWelcomeMsg();
  login();
};
completeProcedure();

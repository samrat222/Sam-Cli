import inquirer from "inquirer";

export async function promptProjectName() {
  const ans = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
    },
  ]);

  return ans.projectName;
}

export async function promptProjectStack() {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "projectStack",
      message: "Choose your stack:",
      choices: ["Frontend"],
    },
  ]);

  return ans.projectStack.toLowerCase();
}

export async function promptFrontendFramework() {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Choose a framework:",
      choices: ["ReactJs", "Html x Css x Javascript", "React-Native"],
    },
  ]);

  return ans.framework.toLowerCase().replace(/ /g, "-");
}

export async function promptFrontendLanguage() {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose Your Preferred Language:",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  return ans.language.toLowerCase().replace(/ /g, "-");
}

export async function promptBackendLanguage() {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose Your Preferred Language:",
      choices: ["JavaScript", "TypeScript", "Python"],
    },
  ]);

  return ans.language.toLowerCase().replace(/ /g, "-");
}

export async function promptBackendFramework(language) {
  let choices = [];

  switch (language) {
    case "javascript":
    case "typescript":
      choices = ["expressjs", "nestjs"];
      break;
    case "django":
      choices = ["django"];
      break;
    default:
      choices = ["expressjs", "nestjs"];
      break;
  }

  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Choose a framework:",
      choices,
    },
  ]);

  return ans.framework.toLowerCase().replace(/ /g, "-");
}

export async function promptDatabase(framework) {
  const choices =
    framework === "django" ? ["SQLite3", "PostgreSQL"] : ["MongoDB"];

  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: "select a database",
      choices,
    },
  ]);

  return ans.database.toLowerCase();
}

export async function promptInitDatabase() {
  const ans = await inquirer.prompt([
    {
      type: "confirm",
      name: "initDB",
      message: "Initialize Database?",
      default: false,
    },
  ]);

  return ans.initDB;
}

export async function promptOrm(database) {
  database = database?.toLowerCase() ?? "";
  let ormChoices = [];

  if (database === "mongodb") {
    ormChoices = ["Mongoose"];
  } else {
    ormChoices = ["Typeorm"];
  }

  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: "select your preferred ORM",
      choices: ormChoices,
    },
  ]);

  return ans.database.toLowerCase();
}

export async function promptDependenciesInstall() {
  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "installDependencies",
      message:
        "Do you want to install project dependencies ? (you must have an active internet connection)",
      default: false,
    },
  ]);

  return result.installDependencies;
}

#!/usr/bin/env node

import figlet from "figlet";
import { program } from "commander";
import chalk from "chalk";
import useGradient from "./src/core/utils/useGradient.js";
import {
  promptFrontendLanguage,
  promptFrontendFramework,
  promptProjectName,
  promptProjectStack,
  promptDependenciesInstall,
} from "./src/core/prompts.js";
import { createFrontendProject } from "./src/core/create-frontend-project.js";
import {
  checkForUpdate,
  validateProjectName,
} from "./src/core/utils/helper.js";
// import { sendQueuedStats } from "./src/core/stat.js";

const toolName = "SamEase";
// const jsBackendStacks = ["expressjs", "nestjs"];

program.version("1.0.0").description("SamEase CLI");

program.description("Start a new project with SamEase").action(async () => {
  await startProject();
});

program.parse(process.argv);

async function startProject() {
  let framework;
  let projectName;
  let projectStack;
  let initDB;
  let database;
  let orm;
  let language;
  let installDependencies;

  const initialMsg = `Simplify Project Setup with the. ${chalk.green(
    toolName
  )} CLI Tool.`;

  // check for update
  await checkForUpdate();

  // render cli title
  renderTitle();
  console.log(chalk.white(initialMsg));

  projectName = await promptProjectName();
  validateProjectName(projectName);

  projectStack = await promptProjectStack();

  // process sending of stats in background
  //   await sendQueuedStats();

  /**
   * start prompts
   */
  if (projectStack === "frontend") {
    language = await promptFrontendLanguage();
    framework = await promptFrontendFramework();

    if (framework === "html-x-css-x-javascript") {
      return await createFrontendProject(projectName, framework, "javascript");
    }

    return await createFrontendProject(projectName, framework, language);
  }
}

/**
 * Render cli title
 */
function renderTitle() {
  const figletConfig = {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  };

  useGradient({
    title: figlet.textSync("SamEase", figletConfig),
  });
}

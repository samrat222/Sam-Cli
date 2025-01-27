import { addGitignore } from "./utils/file-manager.js";
import path from "path";
import ora from "ora";
import { createHtmlCssJsProject } from "./create-projects-handlers/frontend/html x css x js/createHtmlCssJs.js";
import { createReactNativeProject } from "./create-projects-handlers/frontend/react native/createReactNative.js";
import { errorHandler } from "./utils/errorHandler.js";

/**
 * function to create frontend projects
 * @param {string} framework
 * @param {string} projectName
 * @param {string} language
 */
export async function createFrontendProject(projectName, framework, language) {
  try {
    const spinner = ora("Creating Project ...").start();

    const destinationPath = path.join(
      process.cwd(),
      projectName ?? `project-starter-${framework}-template`
    );

    switch (framework) {
      case "react":
        console.log("We are working on it, Please visit later");
        break;
      case "html-x-css-x-javascript":
        await createHtmlCssJsProject({
          framework,
          language,
          destinationPath,
          spinner,
        });
        break;
      case "React-Native":
        await createReactNativeProject({
          framework,
          language,
          destinationPath,
          spinner,
        });
        break;
      default:
        console.log(
          "Invalid project configuration, please check the framework and language parameters"
        );
        break;
    }

    addGitignore({ framework, destinationPath });

    // update stat
    // sendStat("samease", framework).then(() => {});
  } catch (e) {
    errorHandler.handleError(e);
  }
}

import { copyFile, getTemplateDir } from "../../../utils/file-manager.js";

export async function createReactNativeProject({
  destinationPath,
  spinner,
  language,
}) {
  // copy project files
  copyFile(getTemplateDir(`frontend/react-native`), destinationPath);

  // success message
  spinner.succeed(
    `Frontend - React Native project with ${
      language.charAt(0).toUpperCase() + language.slice(1)
    } created successfully! : ${destinationPath}`
  );
}

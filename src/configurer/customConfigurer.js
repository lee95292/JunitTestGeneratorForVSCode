//유저각 직접 src/test 경로 설정
const vscode = require("vscode");
// const workspace = vscode.workspace;
const fs = require("fs");
function configTestLocation(selectedFile) {
  const workspaceFolderConfig = vscode.workspace.getConfiguration(
    "tasks",
    vscode.workspace.workspaceFolders[0].uri
  );
  if (!fs.existsSync(selectedFile.fsPath)) {
    console.log("doesnt exist");
  }

  workspaceFolderConfig.update(
    "testLocation",
    selectedFile.fsPath,
    vscode.ConfigurationTarget.WorkspaceFolder
  );

  console.log(workspaceFolderConfig);
  return;
}

exports.customConfig = {
  configTestLocation
};

const fs = require("fs");
const vsocde = require("vscode");
const path = require("path");
function generateJunitTest(selectedFile) {
  //   fs.writeFileSync(, "test");
  // console.log(fs.readFileSync(selectedFile.path));

  let testfileURI = getTestPath(selectedFile.fsPath);

  let testfileURL = testfileURI.split("\\");
  testfileURL.pop();
  testfileURL = testfileURL.join("\\");

  recursiveMkdir(testfileURL);

  if (!isValidateTestPath(testfileURI)) {
    return false;
  }

  fs.appendFileSync(testfileURI, "test");
  return true;
}
function recursiveMkdir(path) {
  if (fs.existsSync(path)) {
    return path;
  }
  let subDir = path.split("\\");
  let addition = subDir.pop();
  subDir = subDir.join("\\");

  let mkdirPath = recursiveMkdir(subDir)
    .concat("\\")
    .concat(addition);

  fs.mkdirSync(mkdirPath);
  return mkdirPath;
}
// function replaceAll(str, origin, dest) {
//   return str.split(origin).join(dest);
// }

function isValidateTestPath(path) {
  if (fs.existsSync(path)) {
    return false;
  }

  return true;
}

function getTestPath(file) {
  return file.replace("main", "test").replace(".java", "Test.java");
}
// function generateJunitTest(selectedFile, selectedFiles) {
//     console.log(vscode.workspace.workspaceFolders);
//     console.log(selectedFile.path);
//     for (const originFile of selectedFile) {
//       console.log(originFile.path);
//     }
//   }

exports.generateJunitTest = generateJunitTest;

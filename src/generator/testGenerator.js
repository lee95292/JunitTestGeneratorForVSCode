const fs = require("fs");
const testfile = require("../resource/junitTestfileTemplate");
const vscode = require("vscode");

function generateJunitTest(selectedFile) {
  let testfileURI = getTestPath(selectedFile.fsPath);
  let testfileURL = testfileURI.split("\\");
  let className = testfileURL.pop();

  className = className.replace(".java", "");
  testfileURL = testfileURL.join("\\");

  recursiveMkdir(testfileURL);

  if (!isValidateTestPath(testfileURI)) {
    vscode.window.showErrorMessage(`${className} already exist`);
    return false;
  }

  fs.appendFileSync(
    testfileURI,
    testfile.taggedJunitTestfile`${className} ${"default"}`
  );
  showSuccessMsg(testfileURI);
  vscode.window.showInformationMessage(`${className} generated!`);

  // showSeccessMessage(testfileURI, className);
  return true;
}

function showSuccessMsg(testfileURI) {
  if (fs.existsSync(testfileURI)) {
    let promise = new Promise(function(resolve, reject) {
      resolve(vscode.workspace.openTextDocument(testfileURI));
    });
    promise.then(function(value) {
      vscode.window.showTextDocument(value);
    });
  }
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

function isValidateTestPath(path) {
  if (fs.existsSync(path)) {
    return false;
  }

  return true;
}

function getTestPath(file) {
  return file.replace("main", "test").replace(".java", "Test.java");
}
exports.generateJunitTest = generateJunitTest;

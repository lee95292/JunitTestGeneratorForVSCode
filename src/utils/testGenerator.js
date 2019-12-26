const fs = require("fs");
const vsocde = require("vscode");

function generateJunitTest(selectedFile) {
  //   fs.writeFileSync(, "test");
  // console.log(fs.readFileSync(selectedFile.path));
  console.log(vsocde.workspace.workspaceFolders);
  console.log(selectedFile);

  let testfileURI = getTestPath(selectedFile.path);
  if (!isValidateTestPath(testfileURI)) {
    return false;
  }

  console.log("tst");
  console.log(testfileURI);
  testfileURI = replaceAll(testfileURI, "\\", "\\\\");
  testfileURI.replace("/", "");
  fs.appendFileSync(testfileURI, "test");
  return true;
}

function replaceAll(str, origin, dest) {
  return str.split(origin).join(dest);
}

function isValidateTestPath(path) {
  // if (fs.existsSync(path)) {
  //   return false;
  // }

  return true;
}

function getTestPath(file) {
  return file.replace("src/main", "src/test").replace(".java", "Test.java");
}
// function generateJunitTest(selectedFile, selectedFiles) {
//     console.log(vscode.workspace.workspaceFolders);
//     console.log(selectedFile.path);
//     for (const originFile of selectedFile) {
//       console.log(originFile.path);
//     }
//   }

exports.generateJunitTest = generateJunitTest;

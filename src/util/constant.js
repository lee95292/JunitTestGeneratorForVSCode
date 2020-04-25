const frameworkConstants = require("../constant").testFramework;
const string = require("../constant").string;

exports.getTestFramework = (
  lang,
  testFramework = frameworkConstants[lang],
  version = string.testFrameworkVersion.default
) => {};

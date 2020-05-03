const string = require("./").string;
const lang = string.lang;
const testTemplateType = string.testTemplateType;
const testFrameworkVersion = string.testFrameworkVersion;
/*
  call as [test framework] [test framework version] 
*/
exports.testFramework = {
  junit: {
    [testFrameworkVersion.default]: {
      lang: lang.java,
      type: testTemplateType.default,
      testSource: (filename, packagePath = "package.com") =>
        `package ${packagePath}${filename};
    import org.junit.Test;
    import org.junit.Before;    
        
    public class ${filename} {
    
        @Before
        public void setup(){
    
        }
            
        @Test
        public void test() {
        }
    }
    `,
    },
  },

  jest: {
    [string.testFrameworkVersion.default]: {
      lang: lang.javascript,
      type: testTemplateType.default,
      testSource: (filename) => ``,
    },
  },
};

exports.defaultFramework = {
  [lang.java]: exports.testFramework.junit,
  [lang.javascript]: exports.testFramework.jest,
};

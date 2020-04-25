const lang = require("./").lang;
const string = require("./").string;

exports.testFramework = {
  junit: [
    {
      version: string.testFrameworkVersion.default,
      lang: lang.java,
      type: string.testTemplateType.default,
      testSource: (filename, packagePath = "...") =>
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
  ],

  jest: [
    {
      version: string.testFrameworkVersion.default,
      lang: lang.javascript,
      testSource: (filename) => ``,
    },
  ],
};

exports.defaultFramework = {
  [lang.java]: exports.testFramework.junit,
  [lang.javascript]: exports.testFramework.jest,
};

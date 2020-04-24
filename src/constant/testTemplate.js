const testFrameworks = require("./").testFramework;

exports.testTemplate = {
  [testFrameworks.junit.lang]: {
    default: (filename) => `package ${filename};
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

  [testFrameworks.jest.lang]: {
    default: () => ``,
  },
};

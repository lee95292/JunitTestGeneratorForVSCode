function taggedJunitTestfile(str, className, packageName) {
  return `package ${packageName};
import org.junit.Test;
import org.junit.Before;    
    
public class ${className} {

    @Before
    public void setup(){

    }
        
    @Test
    public void test() {
        
    }
}
    `;
}

exports.taggedJunitTestfile = taggedJunitTestfile;

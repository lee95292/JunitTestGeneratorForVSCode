let junitTemplate = `
import org.junit.Test;


public class ${} {

	@Autowired
	JBNUMainCrawlService crawl;

	@Before
	public void setup(){
		
	}
	@Test
	public void test() {
	}

}

`;

exports.junitTemplate = junitTemplate;

class TestStub {
  constructor(lang, testPath) {
    this.lang = lang;
    this.path = testPath;
  }

  generateTest() {
    return this.lang;
  }
}

export default TestStub;

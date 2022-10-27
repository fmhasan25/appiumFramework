describe('Account Feature', () => {
    before(() => {
        console.log('Before the test cases');
    });
 beforeEach(() => {
     console.log('before each test case');
 });
    it('should print hello world!', () => {
        console.log('Hello World!');
    });

    it('should create an account successfully', () => {
        console.log('Second Test Case');
    });
afterEach(() => {
    console.log('after each test cases');
});
    after(() => {
        console.log('After all the test cases');
    });
});
describe('test suite', () => {
    beforeAll(() => {
        console.log('run once before all tests');
    });

    beforeEach(() => {
        console.log('test setup for each test');
    });

    it('first test', () => {
        console.log('running a test');
        expect(true).toBe(true);
    });

    afterEach(() => {
        console.log('tear down for each test');
    });

    afterAll(() => {
        console.log('run once after all tests');
    });
});
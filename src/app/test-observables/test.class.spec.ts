import {TestClass } from './test-class';
import { of } from 'rxjs';

fdescribe('test Observables with Mock', () => {
    let testClass: TestClass;
    let testService: any;

    beforeEach(() => {
        testService = jasmine.createSpyObj('testService', ['getData']);
        testClass = new TestClass(testService);
    });

    it('first test', () => {
        testService.getData.and.returnValue(of('X'));

        let data$ = testClass.TestMethod();
        data$.subscribe(item=> {
            expect(item).toBe('XX');
        })
    });


});

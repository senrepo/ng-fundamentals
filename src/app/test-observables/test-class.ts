import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


export class TestService {
    public getData(): Observable<string>  {
        return of('A', 'B', 'C');
    }
}

export class TestClass {
    constructor(private testService: TestService ) { }

    public TestMethod(): Observable<string> {
        const data$ = this.testService.getData();

        return data$.pipe(
            map((item: string) => item.concat(item)),
            tap(item => console.log(item))
        );
    }
}

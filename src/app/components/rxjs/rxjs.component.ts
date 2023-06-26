import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public i: number = -1;
  public intervalSubs: Subscription;

  constructor() {
    this.observableTest()
      .pipe(retry(1))
      .subscribe(
        value => console.log('subs: ' + value),
        error => console.warn(error),
        () => console.log('obs$ finished')
      );

    this.intervalSubs = this.intervalTest()
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  public observableTest(): Observable<number> {
    const obs$ = new Observable<number>(observer => {
      const interval = setInterval(() => {
        this.i = this.i + 1;
        observer.next(this.i);

        if (this.i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        // if (this.i === 2) {
        //   this.i = -1;
        //   observer.error('error at i === 2');
        // }
      }, 1000);
    });

    return obs$;
  }

  public intervalTest(): Observable<number> {
    return interval(500)
      .pipe(
        take(10),
        map(value => value + 1),
        filter(value => value % 2 === 0 ? true : false));
  }
}

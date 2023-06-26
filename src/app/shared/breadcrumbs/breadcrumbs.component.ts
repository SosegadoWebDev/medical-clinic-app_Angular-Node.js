import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {

  public titlePage: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteData()
      .subscribe(({ title }) => {
        this.titlePage = title
        document.title = title;
      });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  public getRouteData(): Observable<any> {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data));
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';

// App Modules
import { SharedModule } from '../shared/shared.module';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { FormsModule } from '@angular/forms';
import { IncrementalComponent } from './incremental/incremental.component';
import { GraphicDrawComponent } from '../shared/graphic-draw/graphic-draw.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'progress', component: ProgressComponent, data: { title: 'Barra de Progreso' } },
      { path: 'grafica1', component: Graphics1Component, data: { title: 'Gráfica 1' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de Cuenta' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Observables & Subscribers' } },
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementalComponent,
    GraphicDrawComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementalComponent,
    AccountSettingsComponent
  ],
  providers: [
    ThemeService
  ]
})
export class PagesModule { }

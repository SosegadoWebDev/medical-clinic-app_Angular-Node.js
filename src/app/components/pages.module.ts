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
import { GraphicDrawComponent } from './shared/graphic-draw/graphic-draw/graphic-draw.component';

const ROUTES: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Graphics1Component },
            { path: '', component: DashboardComponent }
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
        GraphicDrawComponent
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
        IncrementalComponent
    ],
    providers: [
        ThemeService
    ]
})
export class PagesModule { }

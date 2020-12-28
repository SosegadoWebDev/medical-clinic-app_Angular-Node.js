import { PagesComponent } from './components/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Components
import { NoPage404Component } from './components/no-page404/no-page404.component';
import { Graphics1Component } from './components/graphics1/graphics1.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Graphics1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NoPage404Component }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule { }

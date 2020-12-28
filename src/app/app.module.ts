import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPage404Component } from './components/no-page404/no-page404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Graphics1Component } from './components/graphics1/graphics1.component';
import { PagesComponent } from './components/pages.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        NoPage404Component,
        DashboardComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutesModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NoPage404Component } from './no-page404/no-page404.component';

// App Modules
import { PagesModule } from './components/pages.module';
import { AuthModule } from './auth/auth.module';

const ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NoPage404Component }
]

@NgModule({
    declarations: [
        AppComponent,
        NoPage404Component
    ],
    imports: [
        BrowserModule,
        PagesModule,
        AuthModule,
        RouterModule.forRoot(ROUTES)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

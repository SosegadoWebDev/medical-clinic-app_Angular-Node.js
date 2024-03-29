import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    public menu: Array<any>

    constructor() {
        this.menu = [{
            title: 'Dashboard',
            icon: 'mdi mdi-gauge',
            submenu: [{
                title: 'Main',
                url: '/'
            },
            {
                title: 'ProgressBar',
                url: 'progress'
            },
            {
                title: 'Graphics',
                url: 'grafica1'
            },
            {
                title: 'Promises',
                url: 'promises'
            },
            {
                title: 'rxjs',
                url: 'rxjs'
            }]
        }]
    }
}

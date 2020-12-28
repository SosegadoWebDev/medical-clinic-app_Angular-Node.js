import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-no-page404',
    templateUrl: './no-page404.component.html',
    styleUrls: ['./no-page404.component.css']
})
export class NoPage404Component implements OnInit {

    public year: Number;

    constructor() { 
        this.year = new Date().getFullYear();
    }

    ngOnInit() {
    }
}

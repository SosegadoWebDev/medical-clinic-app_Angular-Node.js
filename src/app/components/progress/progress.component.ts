import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

    public progressNumber1: number = 15;
    public progressNumber2: number = 30;

    constructor() {
    }

    get getProgress1() {
        return `${this.progressNumber1}%`;
    }

    get getProgress2() {
        return `${this.progressNumber2}%`;
    }
}

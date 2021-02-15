import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-incremental',
    templateUrl: './incremental.component.html'
})
export class IncrementalComponent {

    @Input() progressNumber: number;
    @Output() progressEmit: EventEmitter<number> = new EventEmitter();

    public isValidInputNumber: boolean = true;

    constructor() { }

    public changeValue(value: number) {
        if (this.progressNumber >= 100 && value >= 0) {
            this.progressEmit.emit(100);
            return this.progressNumber = 100;
        }

        if (this.progressNumber <= 0 && value < 0) {
            this.progressEmit.emit(0);
            return this.progressNumber = 0;
        }

        this.progressNumber = this.progressNumber + value;
        this.progressEmit.emit(this.progressNumber);

        console.log(this.progressNumber);
    }

    public onInputProgressChange(evt: number): void {
        if (evt > 100) {
            this.progressNumber = 100;
            this.isValidInputNumber = false;
        } else if (evt < 0) {
            this.progressNumber = 0;
            this.isValidInputNumber = false;
        } else {
            this.isValidInputNumber = true;
            this.progressNumber = evt;
        }

        this.progressEmit.emit(this.progressNumber);
    }
}

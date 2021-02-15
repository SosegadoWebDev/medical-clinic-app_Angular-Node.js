import { Component } from '@angular/core';

import { MultiDataSet } from 'ng2-charts';

@Component({
    selector: 'app-graphics1',
    templateUrl: './graphics1.component.html',
    styles: []
})
export class Graphics1Component {

    public graphicData: MultiDataSet = [[30, 40, 12]]

    constructor() { }
}

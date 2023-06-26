import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Colors } from 'ng2-charts';

@Component({
    selector: 'app-graphic-draw',
    templateUrl: './graphic-draw.component.html',
    styleUrls: ['./graphic-draw.component.css']
})
export class GraphicDrawComponent {

    @Input() title: string = 'Sin título';
    @Input() labels: Array<string> = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    @Input() doughnutChartData: MultiDataSet = [[1, 1, 1]]

    public doughnutChartType: ChartType = 'doughnut';
    public colors: Array<Colors>

    constructor() {
        this.colors = [{
            backgroundColor: ['blue', 'green', 'red']
        }]
    }
}

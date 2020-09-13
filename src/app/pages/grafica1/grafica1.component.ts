import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  // tslint:disable-next-line: member-ordering
  public doughnutChartLabels: Label[] = ['Guayaquil', 'Cuenca', 'Quito'];
  public mesesLabels: Label[] = ['Enero', 'Feb', 'Marzo'];
  public Data: MultiDataSet = [
    [100, 150, 1000],
  ];
}

import { Component, Input  } from '@angular/core';
import { ChartType  } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  // tslint:disable-next-line: no-inferrable-types
  @Input() Titulo: string = 'Sin título';
  @Input() doughnutChartLabels: Label[] = ['Sector público', 'Sector Privado', 'Otros'];

  // public doughnutChartLabels: Label[] = ['Sector público', 'Sector Privado', 'Otros'];
  @Input('Data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color [] = [
    { backgroundColor: ['#6857E6' , '#009FEE' , '#FFB414'] }
  ]
}

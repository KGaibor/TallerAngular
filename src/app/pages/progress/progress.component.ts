import { Component } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css',
  ]
})
export class ProgressComponent  {
  // tslint:disable-next-line: no-inferrable-types
 // progreso: number = 50;

  // tslint:disable-next-line: no-inferrable-types
  progreso1: number = 25;
  // tslint:disable-next-line: no-inferrable-types
  progreso2: number = 35;

  // tslint:disable-next-line: typedef
  get getProgreso1(){
    return `${ this.progreso1 }%`;
  }
  // tslint:disable-next-line: typedef
  get getProgreso2(){
    return `${ this.progreso2 }%`;
  }



}

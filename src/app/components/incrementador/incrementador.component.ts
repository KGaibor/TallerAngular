import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }


// tslint:disable-next-line: no-inferrable-types


// alt +96 es el simbolo que acepta
// tslint:disable-next-line: typedef
/*get getProgreso() {
  return `${ this.progreso }%` ;
 }
*/
// tslint:disable-next-line: typedef
cambiarValor( valor: number ){
 switch (true){
   case ( (this.progreso + valor) >= 100 && valor > 0 ):
     this.valorSalida.emit(100);
     this.progreso = 100;
     break;
   case ( (this.progreso + valor) <= 0 && valor < 0 ):
     this.progreso = 0;
     this.valorSalida.emit(0);
     break;
   case (  valor < 0 || valor > 0 ):
     this.progreso = this.progreso + valor;
     this.valorSalida.emit(this.progreso);
     break;

 }

}

// tslint:disable-next-line: typedef
onChange( Nuevovalor: number ){
  if (Nuevovalor >= 100){
    this.progreso = 100;
  } else if (Nuevovalor <= 0){
    this.progreso = 0;
  } else {
    this.progreso = Nuevovalor;
  }

  this.valorSalida.emit( this.progreso );

}


}

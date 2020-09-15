import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(
       usuarios => {
         console.log( usuarios );
       }
    );
    // const promesa = new Promise( ( resolve ,  reject  ) => {

    //   if ( 1 === 0 ){
    //     resolve('Hola Mundo');
    //   } else {
    //     reject ('Algo salio mal');
    //   }


    // });

    // promesa.then( ( mensaje ) => {
    //   console.log( mensaje );

    // })
    // .catch( error => console.log('Error en mi promesa'));
    // console.log('fin init');

  }

  getUsuarios(){
    return   new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => console.log( body.data ) );
    });

  }


}

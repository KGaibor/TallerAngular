import { Component, OnDestroy } from '@angular/core';
import { Observable , interval, Subscription } from 'rxjs';
import { retry , take , map , filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {


      // this.retornaObserver().pipe(
      //    retry(1)
      // ).subscribe(
      //     valor1 => console.log ( 'Subs ', valor1),
      //     error => console.warn('error', error ),
      //     () => console.info('Obs terminado')
      // );
     this.intervalSubs = this.retornaIntervalo()
      .subscribe(
        console.log
      );
   }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

   // tslint:disable-next-line: typedef
   retornaIntervalo(): Observable<number>{

    const interval$ = interval(1000) // un segundo.
                        .pipe(
                         // take(15),
                          map( valor => {
                            valor++;
                            return  valor;
                          }),
                          filter( valor =>  ( valor % 2 === 0 ) ? true : false) 
                        );

    return interval$;

   }

   // tslint:disable-next-line: typedef
   retornaObserver(): Observable<number>{
      let i = -1;
      const obs$ = new Observable<number>( observer => {


        const intervalo = setInterval( () => {

            i++;
            observer.next(i);
            if ( i === 4 ){
              clearInterval( intervalo );
              observer.complete();
            }

           /* if ( i === 2){
                i = -1;
                observer.error('i llego a 2 y se marca el error.');
            }*/



        }, 1000 )
      } );
      return obs$;
   }

 
}

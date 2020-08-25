import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { tap } from 'rxjs/operators';   //este operador es ejecuatar una accin cuando se recibe una suscripcion.


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient ) {}

    // creamos el pmetodo
    getPosts(){

      return this.http.get('http://jsonplaceholder.typicode.com/posts')
                      .pipe(tap(console.log));

    }

  }

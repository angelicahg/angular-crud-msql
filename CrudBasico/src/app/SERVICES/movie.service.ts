import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url='/api';
  constructor(private http: HttpClient) { }

//get movie
getMovie()
{
  return this.http.get(this.url);
}


//get un movie 
getUnMovie(id:string){
  return this.http.get(this.url+'/'+id);
}
//agregar equipo
addMovie(equipo:Movie)
{
  return this.http.post(this.url, equipo);
}

//eliminar
deleteMovie(id:string){
  return this.http.delete(this.url+'/'+id);
}

//modificar equipo
editMovie(id:string, equipo:Movie){
  return this.http.put(this.url+'/'+id, equipo);
}

}


export interface Movie{
mov_id:string;
mov_title?:string;
mov_year?:string;
mov_time?:number;
mov_lang?:string;
mov_dt_rel?:string;
mov_rel_country?:string;
} 


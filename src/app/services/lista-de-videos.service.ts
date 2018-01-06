import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListaDeVideosService {

  constructor(private http: Http) {
    console.log('Data service conectado...');
   }

  getListaDeVideos(): any {
   return this.http.get('http://localhost:48/api/video')
    .map(res => res.json());
  }

}

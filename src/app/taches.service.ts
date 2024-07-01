import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from './model/tache';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient) { }

  getTache():Observable<Tache[]> {
    return this.http.get<Tache[]>("https://fakerestapi.azurewebsites.net/api/v1/Activities");
  }
}

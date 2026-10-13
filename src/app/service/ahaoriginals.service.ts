import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ahaoriginals } from '../models/ahaoriginals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ahaoriginalsservice {
  private baseUrl = "http://localhost:8081/api/v1/ahaoriginals_data" ;
    constructor(private http:HttpClient) { }
    onsubmit(): Observable<Ahaoriginals[]> {
      return this.http.get<Ahaoriginals[]>(this.baseUrl);
    }

  
}

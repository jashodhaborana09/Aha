import { Injectable } from '@angular/core';
import { Watchin4k } from '../models/watchin4k';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Watchin4kService {

  private baseurl = "http://localhost:8081/api/v1/Watchin4k_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Watchin4k[]>{
    
      return this.http.get<Watchin4k[]>(this.baseurl);
   
  
  
  
    }
}

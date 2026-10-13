import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Trendingnow } from '../models/trendingnow';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {
  private baseurl =  "http://localhost:8081/api/v1/Trendingnow_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Trendingnow[]>{
    
      return this.http.get<Trendingnow[]>(this.baseurl);
   
  
  
  
    }

 
}

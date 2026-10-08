import { Injectable } from '@angular/core';
import { Inthespotlight } from '../models/inthespotlight';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
   private baseurl = "http://localhost:8081/api/v1/inthespotlight_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Inthespotlight[]>{
    
      return this.http.get<Inthespotlight[]>(this.baseurl);
   
  
  
  
    }
    

  
}

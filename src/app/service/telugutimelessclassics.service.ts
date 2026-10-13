import { Injectable } from '@angular/core';
import { Telugutimelessclassics } from '../models/telugutimelessclassics';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelugutimelessclassicsService {

   
    private baseurl = "http://localhost:8081/api/v1/telugutimelessclassics_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Telugutimelessclassics[]>{
    
      return this.http.get<Telugutimelessclassics[]>(this.baseurl);
   
  
  
  
    }
}

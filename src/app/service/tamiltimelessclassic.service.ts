import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tamiltimelessclassic } from '../models/tamiltimelessclassic';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicService {

  private baseurl = "http://localhost:8081/api/v1/tamiltimelessclassic_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Tamiltimelessclassic[]>{
    
      return this.http.get<Tamiltimelessclassic[]>(this.baseurl);
   
  
  
  
    }
}

import { Injectable } from '@angular/core';
import { Handpickedforyou } from '../models/handpickedforyou';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandpickedforyouService {
  private baseurl = "http://localhost:8081/api/v1/Handpickedforyou_data";
      constructor(private http: HttpClient) { }
      onsubmit():Observable<Handpickedforyou[]>{
      
        return this.http.get<Handpickedforyou[]>(this.baseurl);
     
    
    
    
      }


}

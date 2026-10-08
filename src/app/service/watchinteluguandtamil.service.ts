import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtamilService {
  private baseurl = "http://localhost:8081/api/v1/watchinteluguandtamil_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Watchinteluguandtamil[]>{
    
      return this.http.get<Watchinteluguandtamil[]>(this.baseurl);
   
  
  
  
    }
 

  
}

import { Injectable } from '@angular/core';
import { Watchforfree } from '../models/watchforfree';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
  private baseurl = "http://localhost:8081/api/v1/Watchforfree_data";
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Watchforfree[]>{
    
      return this.http.get<Watchforfree[]>(this.baseurl);
   
  
  
  
    }

  
}

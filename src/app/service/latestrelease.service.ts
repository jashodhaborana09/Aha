import { Injectable } from '@angular/core';
import { Latestrelease } from '../models/latestrelease';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class latestreleaseService {
  
  private baseurl = "http://localhost:8081/api/v1/latestrelease_data";
  constructor(private http: HttpClient) { }
  onsubmit():Observable<Latestrelease[]>{
  
    return this.http.get<Latestrelease[]>(this.baseurl);
 



  }
  
}

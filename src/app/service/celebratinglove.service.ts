import { Injectable } from '@angular/core';
import { Celebratinglove } from '../models/celebratinglove';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CelebratingloveService {
  private baseUrl =  "http://localhost:8081/api/v1/celebratinglove_data";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Celebratinglove[]> {
    return this.http.get<Celebratinglove[]>(this.baseUrl);
  }
}
import { Injectable } from '@angular/core';
import { Mollywoodmood } from '../models/mollywoodmood';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
  private baseUrl = "assets/mollywoodmood.json";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Mollywoodmood[]> {
    return this.http.get<Mollywoodmood[]>(this.baseUrl);
  }
}

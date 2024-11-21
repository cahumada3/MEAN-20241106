import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // make sure to also include HttpClient in app.config.ts
  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:8080/';

  // method to get all sales
  getAllSales(): Observable<HttpResponse<Sale[]>> {
    /**
     * first param = URL for the request
     * second param = what data you want to observe from the respose
     */
    return this.http.get<Sale[]>(this.baseURL + 'sale', {observe: 'response'})
  }
}

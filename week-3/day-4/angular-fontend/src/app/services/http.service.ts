import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';
import { Salesperson } from '../models/salesperson';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // make sure to also include HttpClient in app.config.ts
  constructor(private http: HttpClient) { 
    this.getAllSales().subscribe(data => {
      console.log(data);
    })
  }

  baseURL: string = 'http://localhost:8080/';

  // method to get all sales
  getAllSales(): Observable<HttpResponse<Sale[]>> {
    /**
     * first param = URL for the request
     * second param = what data you want to observe from the respose
     */
    return this.http.get<Sale[]>(this.baseURL + 'sale', {observe: 'response'})
  }

  addSale(newSale: Sale): Observable<HttpResponse<Sale>> {
    return this.http.post<Sale>(this.baseURL + 'sale', newSale, {observe: 'response'})
  }

  updateSale(id: number, updatedSale: Sale): Observable<HttpResponse<Sale>> {
    return this.http.put<Sale>(this.baseURL + 'sale/' + id, updatedSale, {observe: 'response'})
  }

  deleteSale(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.baseURL + 'sale/' + id, {observe: 'response'})
  }


  getAllSalespeople(): Observable<HttpResponse<Salesperson[]>> {
    return this.http.get<Salesperson[]>(this.baseURL + 'salesperson', {observe: 'response'})
  }

  getSalespersonById(id: number): Observable<HttpResponse<Salesperson>> {
    return this.http.get<Salesperson>(this.baseURL + 'salesperson/' + id, { observe: 'response'});
  }

  createSalesperson(salesperson: Salesperson): Observable<HttpResponse<Salesperson>> {
    return this.http.post<Salesperson>(this.baseURL + 'salesperson', salesperson, {observe: 'response'})
  }

  deleteSalesperson(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.baseURL + 'salesperson/' + id, {observe: 'response'})
  }
}

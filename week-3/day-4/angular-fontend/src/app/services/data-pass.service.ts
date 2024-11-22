import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  favoriteSalespersonSubject = new BehaviorSubject<string>('None selected');

  favoriteSalespersonObservable = this.favoriteSalespersonSubject.asObservable();

  setFavoriteSalesperson(newFave: string) {
    this.favoriteSalespersonSubject.next(newFave);
  }

  constructor() { }
}

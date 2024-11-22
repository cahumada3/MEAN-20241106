import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Salesperson } from '../models/salesperson';
import { DataPassService } from '../services/data-pass.service';

@Component({
  selector: 'app-salesperson',
  standalone: true,
  imports: [],
  templateUrl: './salesperson.component.html',
  styleUrl: './salesperson.component.css'
})
export class SalespersonComponent {
  /**
   * to get data from the parent, we need to load Salesperson info
   * into a local variable via the @Input() decorator
   */
  @Input() salesperson: Salesperson = new Salesperson(0,'', '', '', '', 0);

  // @Output sends data up to the parent via event emitter
  @Output() deleteSalespersonEvent = new EventEmitter<number>();

  favoriteSalesperson: string = '';

  constructor(private dataPass: DataPassService) {
    this.dataPass.favoriteSalespersonObservable.subscribe(data => {
      this.favoriteSalesperson = data;
    })
  }

  setFavoriteSalesperson() {
    this.dataPass.setFavoriteSalesperson(this.salesperson.first_name)
  }

  deleteSalesperson() {
    if(this.favoriteSalesperson === this.salesperson.first_name)
      this.dataPass.setFavoriteSalesperson('None selected');

    this.deleteSalespersonEvent.emit(this.salesperson.id);
  }
  
}

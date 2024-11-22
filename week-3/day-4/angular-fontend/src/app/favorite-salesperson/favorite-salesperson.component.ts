import { Component } from '@angular/core';
import { DataPassService } from '../services/data-pass.service';

@Component({
  selector: 'app-favorite-salesperson',
  standalone: true,
  imports: [],
  templateUrl: './favorite-salesperson.component.html',
  styleUrl: './favorite-salesperson.component.css'
})
export class FavoriteSalespersonComponent {

    favoriteSalesperson: string = '';

    constructor(private dataPass: DataPassService) {
      
      this.dataPass.favoriteSalespersonObservable.subscribe(data => {
        this.favoriteSalesperson = data;
      });
    }

}

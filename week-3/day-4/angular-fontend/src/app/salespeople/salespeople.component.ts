import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Salesperson } from '../models/salesperson';
import { SalespersonComponent } from '../salesperson/salesperson.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-salespeople',
  imports: [SalespersonComponent, ReactiveFormsComponent], //importing components used in this components HTML
  templateUrl: './salespeople.component.html',
  styleUrl: './salespeople.component.css'
})
export class SalespeopleComponent {

  constructor(private httpService: HttpService) {
    this.getAllSalespeople();
  }

  salespeople: Salesperson[] = [];

  getAllSalespeople() {
    this.httpService.getAllSalespeople().subscribe(data => {
      let tempSalespeople: Salesperson[] = [];
      if(data.body)
        for(let sp of data.body) {
      tempSalespeople.push(new Salesperson(sp.id,
                                           sp.first_name,
                                           sp.last_name,
                                           sp.department,
                                           sp.hire_date,
                                           sp.salary
      ))}
      this.salespeople = tempSalespeople;
    })
  }

  createSalesperson(salesperson: Salesperson) {
    this.httpService.createSalesperson(salesperson).subscribe(data => {
      console.log(data);
      this.getAllSalespeople();
    })
  }
  
  deleteSalesperson(id: number) {
    console.log(`Deleting Salesperson with ID ${id}...`);
    this.httpService.deleteSalesperson(id).subscribe(data => {
      console.log(data);
      this.getAllSalespeople();
    })
  }
}

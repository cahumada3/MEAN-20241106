import { Component } from '@angular/core';
import { Sale } from '../models/sale';
import { HttpService } from '../services/http.service';
import { SalespersonComponent } from '../salesperson/salesperson.component';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [SalespersonComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  constructor(private httpService: HttpService) {
    this.getAllSales();
  }

  getAllSales() {
    this.httpService.getAllSales().subscribe(data => {
      let tempSales : Sale[] = [];
      if(data.body)
        for(let sale of data.body) {
      tempSales.push(new Sale(sale.id,
                              sale.customer_first_name,
                              sale.customer_last_name,
                              sale.date,
                              sale.total,
                              sale.salesperson_id
      ))}
      this.sales = tempSales;
    })
  }
  

  mockSale: Sale = new Sale(1, 'Joe', 'Bob', '2020-05-22', 90000.00, 1);

  mockSales: Sale[] = [
    new Sale(2, 'Caroline', 'Ahumada', '2023-06-22', 90000.00, 1),
    new Sale(3, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
    new Sale(4, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
    new Sale(5, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
    new Sale(6, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
  ]

  sales: Sale[] = [];

}

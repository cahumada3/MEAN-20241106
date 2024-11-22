import { Component } from '@angular/core';
import { Sale } from '../models/sale';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  // must inject the http service here to have access to its methods
  constructor(private httpService: HttpService) {
    this.getAllSales();
    this.getAllSalespersonIds();
  }

  // mockSale: Sale = new Sale(1, 'Joe', 'Bob', '2020-05-22', 90000.00, 1);

  // mockSales: Sale[] = [
  //   new Sale(2, 'Caroline', 'Ahumada', '2023-06-22', 90000.00, 1),
  //   new Sale(3, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
  //   new Sale(4, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
  //   new Sale(5, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
  //   new Sale(6, 'Joe', 'Bob', '2020-05-22', 90000.00, 1),
  // ]

  sales: Sale[] = [];
  salespersonIds: number[] = [];

  // these variables will hold our create form values
  // each is mapped to a form input
  // changing the form changes the values, and changing the values changes the form
  customerFirstName: string = '';
  customerLastName: string = '';
  date: string = '';
  total: number = 0;
  salespersonId: number = this.salespersonIds[0];

  // for the update form
  originalId: number = 0;
  idUpdate: number = 0;
  customerFirstNameUpdate: string = '';
  customerLastNameUpdate: string = '';
  dateUpdate: string = '';
  totalUpdate: number = 0;
  salespersonIdUpdate: number = this.salespersonIds[0];

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

  getAllSalespersonIds() {
    this.httpService.getAllSalespeople().subscribe(data => {
      this.salespersonIds = [];
      if(data.body)
        for (let sp of data.body)
          this.salespersonIds.push(sp.id);
    })
  }

  createSale() {
    let newSale = new Sale(0, 
                           this.customerFirstName,
                           this.customerLastName,
                           this.date,
                           this.total,
                           this.salespersonId);

    this.httpService.addSale(newSale).subscribe(data => {
      console.log(data.body);
      this.getAllSales();
      this.getAllSalespersonIds();
    })
  }

  deleteSale(id: number) {
    this.httpService.deleteSale(id).subscribe(data => {
      console.log(data);
      this.getAllSales();
      this.getAllSalespersonIds();
    })
  }


}

import { Component, Input } from '@angular/core';
import { Salesperson } from '../models/salesperson';

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
}

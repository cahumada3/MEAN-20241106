import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Salesperson } from '../models/salesperson';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  @Output() createSalespersonEvent = new EventEmitter<Salesperson>();

  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({

      createFirstName: new FormControl('', [Validators.required, Validators.maxLength(32)]),
      createLastName: new FormControl('', [Validators.required, Validators.maxLength(32)]),
      createDepartment: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      createHireDate: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      createSalary: new FormControl('', [Validators.required, Validators.max(1000000), Validators.pattern('[0-9]*')]),
    })
  }

  get createFirstName() {
    return this.createForm.get('createFirstName');
  }

  get createLastName() {
    return this.createForm.get('createLastName');
  }

  get createDepartment() {
    return this.createForm.get('createDepartment');
  }

  get createHireDate() {
    return this.createForm.get('createHireDate');
  }

  get createSalary() {
    return this.createForm.get('createSalary');
  }

  resetCreateForm() {
    this.createForm.reset();
  }

  submitCreateForm() {
    this.createSalespersonEvent.emit(new Salesperson(0,
                                                     this.createFirstName?.value,
                                                     this.createLastName?.value,
                                                     this.createDepartment?.value,
                                                     this.createHireDate?.value,
                                                     this.createSalary?.value))

    this.resetCreateForm();
  }

}

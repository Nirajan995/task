import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interface/employee.interface';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css'],
})
export class ChildFormComponent implements OnInit {
  @Input() employee!: Employee;
  @Input() renderForm!: boolean;
  @Input() renderEmployee!: boolean;
  name = '';

  constructor() {}

  ngOnInit(): void {}
  onSubmit(employee: any) {
    console.log(employee);
  }
}

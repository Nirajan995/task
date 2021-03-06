import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-parent-employee',
  templateUrl: './parent-employee.component.html',
  styleUrls: ['./parent-employee.component.css'],
})
export class ParentEmployeeComponent implements OnInit {
  private id: number = 1;
  private index: number = 1;
  employees!: Employee[];
  employee!: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.retrieveEmployees();
    this.firstRender();
    console.log(this.id);
  }

  retrieveEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      error: (e) => console.error(e),
    });
  }

  firstRender() {
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (e) => console.error(e),
    });
  }

  // method2;
  onClickHandler() {
    if (this.index < this.employees.length) {
      console.log(this.index);
      this.employee = this.employees[this.index];
      this.index++;
      console.log(this.employee);
    } else {
      this.index = 0;
      this.employee = this.employees[this.index];
    }
  }

  checkIfEmployeeExists() {
    if (this.employee) {
      return true;
    }
    return false;
  }
}

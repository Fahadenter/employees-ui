import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Employees";
  workDays;
  vacationDays;

  headers = [
    { field: "id", column: "Id" },
    { field: "name", column: "Name" },
    { field: "address", column: "Address" },
    { field: "type", column: "Type" },
    { field: "workDays", column: "Work Days" },
    { field: "vacationDays", column: "Vacation Days" },
  ];

  employees = [];

  constructor(private appService: AppService) {
    this.appService.createEmployees().subscribe((x: any) => {
      this.employees = x;
    });
  }

  retrieveEmployees() {
    this.appService.getEmployees().subscribe((x: any) => {
      this.employees = x;
    });
  }

  work(id, workDays) {
    if (parseInt(workDays) > 0) {
      this.appService.work(id, workDays).subscribe((x: any) => {
        this.workDays = 0;
        this.retrieveEmployees();
      });
    }
  }

  workDaysChange(event) {
    this.workDays = event.target.value;
  }

  vacationDaysChange(event) {
    this.vacationDays = event.target.value;
  }

  takeVacation(id, vacationDays) {
    if (parseInt(vacationDays) > 0) {
      this.appService.takeVacation(id, vacationDays).subscribe((x: any) => {
        this.vacationDays = 0;
        this.retrieveEmployees();
      });
    }
  }
}

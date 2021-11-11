import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public createEmployees() {
    return this.httpClient.post("http://localhost:8080/employees", {});
  }

  public getEmployees() {
    return this.httpClient.get("http://localhost:8080/employees");
  }

  public takeVacation(id, days) {
    return this.httpClient.post(
      `http://localhost:8080/takeVacation/${id}/${days}`,
      {}
    );
  }

  public work(id, days) {
    return this.httpClient.post(`http://localhost:8080/work/${id}/${days}`, {});
  }
}

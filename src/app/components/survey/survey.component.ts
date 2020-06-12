import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  emp: any;
  constructor(
    // private employeeService: EmployeeService,  
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.GetemployeeDetails();
  }
  GetemployeeDetails() {
    this.SpinnerService.show();
    // this.employeeService.GetemployeeDetails().subscribe((data: any) => {  
    //   this.emp = data;  
    //   console.log(this.emp);  
    //    this.SpinnerService.hide();  
    // });  
    setTimeout (() => {
      this.SpinnerService.hide();
   }, 2000);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;
  majors:string[];
  
  qualification:any;
  
  
  beoptions:string[]=['CSE','MECH','ECE','EEE'];
  btechoptions:string[]=['IT','BT'];
  options:string[]=['Bachelor Of Engineering','Bachelor Of Technology'];
    orders = [];
    constructor(private formBuilder: FormBuilder) { }
    // private _filter(value: string): string[] {
    //   const filterValue = value.toLowerCase();
  
    //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
    // }
    ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        address: ['', Validators.required]
      });
      this.secondFormGroup = this.formBuilder.group({
        mail: ['', Validators.required],
        mobile: ['', Validators.required]
      });
      
      this.qualification = this.formBuilder.group({
        course: ['' , Validators.required],
        major: ['', Validators.required]
      });
      this.fourthFormGroup = this.formBuilder.group({
        role: ['', Validators.required]
      });
      this.fifthFormGroup = this.formBuilder.group({
        status: ['', Validators.required]
      });
    }
    display1()
    {
      console.log(this.qualification.value.course);
      if(this.qualification.value.course==='Bachelor Of Engineering')
      {
        console.log('BE');
        this.majors  = Object.assign([], this.beoptions);
        console.log(this.majors);
      }
      if(this.qualification.value.course==='Bachelor Of Technology')
      {
        console.log('Btech');
        this.majors  = Object.assign([], this.btechoptions);
        console.log(this.majors);
      }
  }
}

import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/forbiddenName.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloApp'; 



  get userName() {
         return this.registrationForm.get("userName");
  }

  constructor(private _formBuilder:FormBuilder){}

  //form the registration details in defualt way
  // public registrationForm = new FormGroup({
  //    userName : new FormControl(''),
  //    password : new FormControl(''),
  //    confirmPassword : new FormControl(''),
  //    address : new FormGroup({
  //      city : new FormControl(''),
  //      state : new FormControl(''),
  //      country : new FormControl('')  
  //    })
  //   });

    // by using form builder service 
    public registrationForm = this._formBuilder.group({
   userName : ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Password/)]],
     password : [''],
     confirmPassword : [''],
     address : this._formBuilder.group({
       city : [''],
       state : [''],
       country : ['']  
     })


    },{validator : passwordValidator})     



    public loadApi(){

      //setValue requires all the fields to be included
      // this.registrationForm.setValue({
        
      //   userName : "Ram",
      //   password :"@123",
      //   confirmPassword :"@123",
      //   address:{}
      //   // address :{
      //   //   city : "chennai",
      //   //   state : "Tamil Nadu",
      //   //   country : "India"
      //   // }
      // });
      
      //patch value requires only few fields to be updated
      this.registrationForm.patchValue({
        
        userName : "Ram",
        password :"@123",
        confirmPassword :"@123",
        address:{city : "chennai"}
        // address :{
        //   city : "chennai",
        //   state : "Tamil Nadu",
        //   country : "India"
        // }
      });


    }

}

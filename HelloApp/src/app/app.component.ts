import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/forbiddenName.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HelloApp'; 

  registrationForm : FormGroup;

  public contactTypes = ["primary","secondary","emergency"]

  
  get userName() {
    return this.registrationForm.get("userName");
  }

  get subscribe() {
    return this.registrationForm.get("subscribe");
  }

get email() {
 return this.registrationForm.get("email");
}

get alternateEmails() {
  return this.registrationForm.get("alternateEmails") as FormArray;
}

get contact(){
  return this.registrationForm.get('contact') as FormArray;
}

addContact(){
 this.contact.push(this._formBuilder.group({
     contactType:[''],
     mobileNumber:['']

 }));
}

onRemove(i){
  this.contact.removeAt(i);
}


  //add the alternate emails input
  addAlterNateEmails(){
    console.log("adding alternate emails ...");
    this.alternateEmails.push(this._formBuilder.control(''));
  }
  ngOnInit(): void {

      // by using form builder service 
      this.registrationForm = this._formBuilder.group({
        userName : ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Password/)]],
          password : [''],
          confirmPassword : [''],
          email :[''],
          alternateEmails:this._formBuilder.array([]),
          subscribe : [false],
          address : this._formBuilder.group({
            city : [''],
            state : [''],
            country : ['']  
          }),
          contact : this._formBuilder.array([this._formBuilder.group({
            contactType : [''],
            mobileNumber  :['']  
          })])
         },{validator : passwordValidator});     



         //conditional validation
         this.subscribe.valueChanges.subscribe(checkedValue =>{

          const email = this.email;
          if (checkedValue) {
            email.setValidators(Validators.required);
          } else {
            email.clearValidators();
          }

             email.updateValueAndValidity();
         });
    
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

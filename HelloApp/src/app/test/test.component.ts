import { Component, OnInit } from '@angular/core';

@Component({


  // selector we are selecting the form of tag
  //selector : 'app-test'
   

  //as a selector we are selecting in the form of class
  // selector: '.app-test',
  
  //as a selector we are selecting in the form of attributr
  selector: '[app-test]',

  //

  // templateUrl: './test.component.html',

 
    //tmplates with multipine url
    template:`<h1>Welcome {{name}}</h1>
    <h1>Math Calculation {{3+4}}</h1>
    <h1>{{greet()}}</h1>
    <h1>{{name.toUpperCase()}}</h1>
    <h1>{{"Welcome " +name}}</h1>
    <input id="demo" type="text"  value="Ram">
    <input [disabled]="isDisabled" type="text"  value="Ram">
    <h1 class="text-special"> adp </h1>
    <h1 [class]="textSuccess"> ADP-With Binding </h1>
    <h1 class="text-success" [class]="textSpecial"> ADP-With Binding </h1>
    <h1 [class.text-special]=isSpecialTextNeeded> ADP-Special Text Disabled</h1>
    <h1 [class]=isSpecialTextNeeded> ADP-Special Text Disabled</h1>
    <h1 [ngClass]=textModal> ADP-combinedText</h1>
    
    <h1 [style.color]="'orange'">ADP-orange color</h1>

      <h1 [style.color]="orangeColour">ADP-orange color</h1>
    <h1 [style.color]="isSuccessTextNeeded ? 'orange' : 'green '">ADP-IsSuccessNeeded Boolean</h1>
    
    <h1 [ngStyle]="textStyleClass">ADP-italicViolet</h1>

    `,
    
    

  //inline templates
  //template:'<h1>Inline Hello World<h1>', 


  // styleUrls: ['./test.component.css']

  //inline styles
  styles:[
         `.text-success {
          color:green;
          }
          .text-danger {
          color:red;
          }
          .text-special {
          font-style:italic;
          }`

  ]

})
export class TestComponent implements OnInit {


  //interpolation

   name = "Raghu"
   isDisabled=true
   isSpecialTextNeeded=true;
   isDangertextNeeded=true;
   isSuccessTextNeeded=true;

   orangeColour="orange"

   public textSuccess = "text-success"
   public  textDanger ="text-danger"
   public textSpecial = "text-special"

   public textModal ={
    "text-special" : this.isSpecialTextNeeded,
    "text-success"  : this.isSuccessTextNeeded
   }

   public textStyleClass ={
    fontStyle : "italic",
    color : "Violet"

   } 

   greet(){
    return "Welcome "+this.name;
   }

  constructor() { }

  ngOnInit() {
  }

}

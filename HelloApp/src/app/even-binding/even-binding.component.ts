import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent implements OnInit {


  public greetings="";
  public eventNames="";
  public showText ="";

  public name=""


  public onClick(event){

    this.greetings = "Welcome to Angular";
    this.eventNames= "Event Name is "+event.type;

  } 


  public onClickInput(event){

    // this.showText = event;
    this.showText = event.value;
    console.log(event);

  } 

  constructor() { }

  ngOnInit() {
  }

}

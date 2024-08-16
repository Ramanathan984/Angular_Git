import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  public testPipe = "AlwaysDesigningForPeople";
  public testPipeDate = new Date();
  public testPipeObject = {

    name:"ADP",
    age:"75"


  }
  public testPipeNumber = 123.656;



  @Input("parentData") public name;

  @Output("child2") public childEvent = new EventEmitter();


  public onFireEvent(){
        
        this.childEvent.emit("Data sending from child Component  successful");
  }

  constructor() { }

  ngOnInit() {
  }

}

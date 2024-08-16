import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {


  public displayName =true;

  public color = "red";
  public colors = ["red","blue","green","yellow","black"];


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskArray = [{
    task:"Buy Laptop" ,
    isCompleted:false
  }];

  constructor() { }

  ngOnInit() {
  }


  /**
   * on sub mitting the form 
   * @param form 
   * 
   */
  onSubmit(form : NgForm){
     console.log(form);
    // this.taskArray.push(form.value);

    // console.log(form.controls['task'].value);
    console.log(form.controls['task']);
    this.taskArray.push({
      task : form.controls['task'].value ,
      isCompleted : false 
    });

    // reset the values in form 
    form.reset();
  }


  onDelete(index :number){
    console.log(index);
    this.taskArray.splice(index,1);
  }

  onCheck(index :number){
    
    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
    console.log(this.taskArray);
  }

}

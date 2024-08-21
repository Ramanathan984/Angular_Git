import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentServiceService } from './enrollment-service.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "HelloApp";

  public topics = ["Angular", "React", "Vue"];

  public userModel = new User("Ram", "Ram@gmail", 45686, "", "morning", true);

  public hasErrorMessage = true;

  public onTopicChange(topic) {
    if (topic === "default") {
      this.hasErrorMessage = true;
    } else {
      this.hasErrorMessage = false;
    }
  }

  constructor(private _enrollmentService :EnrollmentServiceService) { }


  /**
   * on submitting
   */
  public onSubmit(){
    
    this._enrollmentService.enrollUser(this.userModel).subscribe(
      data => console.log("data!",data),
      error => console.log("error!",error)
    )

  }


}

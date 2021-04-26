import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  title = "this is courses";
  course = {title : "The Complete Angular Cources",
            rating : 4.12345,
            students : 30123,
            price : 190.950,
            releaseDate : new Date(2021, 4, 5)
}
  courses;
  isActive = true;
  email = "me@example.com";
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
   }

  ngOnInit(): void {
  }

  onSave($event){
    $event.stopPropagation();
    console.log("clicked on Save button !!", $event);
  }
  onDivClicked(){
    console.log("on div clicked !!")
  }
  onKeyUp(){
    console.log("enter is pressed",this.email);
    // console.log(email);
  }

}

import { CoursesService } from './courses.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
  courses;
  constructor() { 
   let service = new CoursesService();
   this.courses = service.getCourses() 
  }

  // ngOnInit() {
  // }

  title = "List of cources";
  getTitle (){
    return this.title;
  }
  
}

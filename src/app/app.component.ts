import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  forHeading: string = 'Using @for';

  ngforHeading: string = 'Using ngfor';

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 69.42424242;

  rate = 0.67;

  course = COURSES[0];

  onCourseSelected(course : Course){
    console.log("Clicked event : ", course);
  }

  trackCourse(index : number, course : Course) {
    return course.id;
  }

}

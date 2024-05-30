import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required : true
  })
  course : Course;

  @Input({
    required : true
  })
  index : number;

  ifHeading: string = 'Using @if';

  ngifHeading: string = 'Using ngif';

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER')
      return ['beginner'];

    return {
      'undefined-beginner' : this.course.category == 'BEGINNER'
    }
  }

  imageTextStyle(){
    return {
      'text-decoration': 'underline'
    };
  }

}

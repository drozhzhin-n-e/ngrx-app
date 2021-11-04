import { Component } from '@angular/core';
import { Store, Action, select, createSelector } from '@ngrx/store';
import { normalize, denormalize, schema } from 'normalizr';

import { selectCourses } from './state/course/course.selectors';
import { addCourse } from './state/course/course.actions';
import { Course } from './models/course.model';
import { State } from './app.state';

import { originalData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  get normalizeSchema() {
    return this.getNormalizeSchema();
  }

  constructor(private store: Store) {
    const normalizedData:State = this.normalizeOriginalData(originalData);

    this.addIntialDataToState(normalizedData);
    this.store.subscribe((state) => console.log(state));
  }

  addIntialDataToState(data:State) {
    for (const [key, value] of Object.entries(data.entities.courses)) {
      this.addCourse(value);
    }
  }

  addCourse(course:any) {
    this.store.dispatch(addCourse({ course }));
  }

  normalizeOriginalData(data:Course[]) {
    return normalize(data, [this.normalizeSchema.course]);
  }

  denormalizeOriginalData(data:State) {
    return denormalize(data.result, [this.normalizeSchema.course], data.entities);
  }

  getNormalizeSchema() {
    const image = new schema.Entity('images');
    const product = new schema.Entity('products');

    const profile = new schema.Entity('profiles', {
      cover: image
    });

    const user = new schema.Entity('users', {
      avatar: image,
      profile: profile
    });

    const guest_instructors_resource = new schema.Entity('guest_instructors_resources', {
      user: user
    });

    const premium_point = new schema.Entity('premium_points');
    const skill_level = new schema.Entity('skill_levels');
    
    const lesson = new schema.Entity('lessons', {
      guest_instructors_resources: [guest_instructors_resource],
      owner: user,
      product: product,
      cover_image: image
    });

    const lesson_group = new schema.Entity('lesson_groups', {
      lessons: [lesson]
    });

    const course_part = new schema.Entity('course_parts', {
      lesson_groups: [lesson_group]
    });

    const course = new schema.Entity('courses', {
      course_part: [course_part],
      guest_instructors_resources: [guest_instructors_resource],
      owner: user,
      premium_point: [premium_point],
      cover_image: image
    });

    return {course};
  }
}
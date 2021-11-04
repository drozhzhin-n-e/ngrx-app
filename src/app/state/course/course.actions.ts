import { createAction, props } from '@ngrx/store';
import { Course } from './../../models/course.model';

export const addCourse = createAction(
  '[Course List] Add Course',
  props<{course:Course}>()
);
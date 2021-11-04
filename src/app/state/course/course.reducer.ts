import { createReducer, on } from '@ngrx/store';
import { addCourse } from './course.actions';
import { Course } from './../../models/course.model';
import { State } from './../../app.state';

export const initialState: State = {};

export const courseReducer = createReducer(
  initialState,
  on(addCourse, (state, { course:Course }) => {
    return {
      ...state, [Course.id]: Course
    };
  })
);
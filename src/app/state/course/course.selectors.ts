import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Course } from './../../models/course.model';
 
export const selectCourses = createFeatureSelector<ReadonlyArray<Course>>('courses');
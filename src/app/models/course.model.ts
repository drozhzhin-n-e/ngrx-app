export interface Course {
  "type": "course",
	"id": string,
	"description": string,
	"published_at": string,
	"short_description": string,
	"slug": string,
	"title": string,
  "course_parts": any[],
  "guest_instructors_resources": any[],
  "owner": any,
  "premium_points": any[],
  "skill_levels": any[],
  "cover_image": any
}
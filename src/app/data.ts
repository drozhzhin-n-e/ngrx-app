import { Course } from './models/course.model';

export const originalData:Course[] = [{
    "type": "course",
    "id": "207b01e0-ae4a-4c9e-9f57-ed26e431d9ee",
    "description": "Course description",
    "published_at": "2021-04-27T08:30:59.515Z",
    "short_description": "Course short description",
    "slug": "111cfb9372",
    "title": "Course",
    "course_parts": [{
        "type": "course_part",
        "id": "6d226d15-0b4c-4c67-a2a1-9c0a078eb29e",
        "attached_files_count": 0,
        "course_id": "207b01e0-ae4a-4c9e-9f57-ed26e431d9ee",
        "position": 20,
        "title": "Course Part",
        "short_description": "Course Part short description",
        "published_lessons_count": 0,
        "selling": false,
        "state": "published",
        "status": "active",
        "lesson_groups": [{
                "type": "lesson_group",
                "id": "c3a903fd-3cb9-4421-ad53-3b58a692d689",
                "course_part_id": "6d226d15-0b4c-4c67-a2a1-9c0a078eb29e",
                "position": 4,
                "title": "Lesson Group",
                "published_lessons_count": 1,
                "lessons": [{
                    "type": "lesson",
                    "id": "68c2a7e7-7060-4f08-b882-d3533ac5c94c",
                    "lesson_type": "course_lesson",
                    "description": "Lesson description",
                    "lesson_group_id": "c3a903fd-3cb9-4421-ad53-3b58a692d689",
                    "position": 17,
                    "published_at": "2021-04-27T08:30:59.667Z",
                    "short_description": "Lesson short description",
                    "slug": "be41a372a7",
                    "title": "Lesson",
                    "guest_instructors_resources": [{
                        "type": "guest_instructor",
                        "id": "2f06fcfe-8d76-4e9f-8c20-6a5a11ac4880",
                        "user": {
                            "type": "user",
                            "id": "37fcdf9c-af72-43e6-b41d-075aad9dbfb6",
                            "name": "Jane Doe",
                            "first_name": "Jane",
                            "last_name": "Doe",
                            "username": "jane_doe_169_747293",
                            "profile_id": "3ca820f6-2ed0-4ed4-90ec-4c35325762e3",
                            "avatar_picture": "dr-i-cube",
                            "avatar": {},
                            "profile": {
                                "type": "profile",
                                "id": "3ca820f6-2ed0-4ed4-90ec-4c35325762e3",
                                "location": "MyString",
                                "website": "MyString",
                                "description": "MyString",
                                "facebook_link": "MyString",
                                "twitter_link": "MyString",
                                "instagram_link": "MyString",
                                "youtube_link": "MyString",
                                "comments_count": 0,
                                "followers_count": 0,
                                "followings_count": 0,
                                "images_count": 0,
                                "cover": {}
                            }
                        },
                        "created_at": "2021-04-27T08:31:00.522Z"
                    }],
                    "owner": {
                        "type": "user",
                        "id": "1f87fc72-8120-4567-a596-e58d277a7c0d",
                        "name": "Jane Doe",
                        "first_name": "Jane",
                        "last_name": "Doe",
                        "username": "jane_doe_162_859970",
                        "profile_id": "c7c02c8a-1371-490b-b256-9d523c27f205",
                        "avatar_picture": "frog-boi",
                        "avatar": {
                            "type": "image",
                            "id": "8fde19.png",
                            "alt": "1x1",
                            "filename": "png/1x1.png",
                            "extension": "png",
                            "size": 67,
                            "width": 1,
                            "height": 1,
                            "metadata": {
                                "mime_type": "image/png"
                            },
                            "url": "https://example.com/uploads/cache/8fde19.png",
                            "versions": {
                                "164x164x1": "https://example.com/api/transformations/users/avatar/164x164x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "164x164x2": "https://example.com/api/transformations/users/avatar/164x164x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "72x72x1": "https://example.com/api/transformations/users/avatar/72x72x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "72x72x2": "https://example.com/api/transformations/users/avatar/72x72x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "40x40x1": "https://example.com/api/transformations/users/avatar/40x40x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "40x40x2": "https://example.com/api/transformations/users/avatar/40x40x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "24x24x1": "https://example.com/api/transformations/users/avatar/24x24x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                "24x24x2": "https://example.com/api/transformations/users/avatar/24x24x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
                            }
                        },
                        "profile": {
                            "type": "profile",
                            "id": "c7c02c8a-1371-490b-b256-9d523c27f205",
                            "location": "MyString",
                            "website": "MyString",
                            "description": "MyString",
                            "facebook_link": "MyString",
                            "twitter_link": "MyString",
                            "instagram_link": "MyString",
                            "youtube_link": "MyString",
                            "comments_count": 0,
                            "followers_count": 0,
                            "followings_count": 0,
                            "images_count": 0,
                            "cover": {
                                "type": "image",
                                "id": "49013d.png",
                                "alt": "1x1",
                                "filename": "png/1x1.png",
                                "extension": "png",
                                "size": 67,
                                "width": 1,
                                "height": 1,
                                "metadata": {
                                    "mime_type": "image/png"
                                },
                                "url": "https://example.com/uploads/cache/49013d.png",
                                "versions": {
                                    "1216x280x1": "https://example.com/api/transformations/profiles/cover/1216x280x1/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                    "1216x280x2": "https://example.com/api/transformations/profiles/cover/1216x280x2/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                    "280x96x1": "https://example.com/api/transformations/profiles/cover/280x96x1/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                                    "280x96x2": "https://example.com/api/transformations/profiles/cover/280x96x2/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
                                }
                            }
                        }
                    },
                    "product": {
                        "type": "product",
                        "id": "4f1dcd0a-b79b-4127-ac27-c38017e0e685",
                        "price": 200.0,
                        "resource_id": "68c2a7e7-7060-4f08-b882-d3533ac5c94c",
                        "resource_type": "lesson"
                    },
                    "cover_image": {
                        "type": "image",
                        "id": "0a79dd.png",
                        "alt": "1x1",
                        "filename": "png/1x1.png",
                        "extension": "png",
                        "size": 67,
                        "width": 1,
                        "height": 1,
                        "metadata": {
                            "mime_type": "image/png"
                        },
                        "url": "https://example.com/uploads/cache/0a79dd.png",
                        "versions": {
                            "800x450x1": "https://example.com/api/transformations/lessons/cover/800x450x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "800x450x2": "https://example.com/api/transformations/lessons/cover/800x450x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "264x148x1": "https://example.com/api/transformations/lessons/cover/264x148x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "264x148x2": "https://example.com/api/transformations/lessons/cover/264x148x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "142x80x1": "https://example.com/api/transformations/lessons/cover/142x80x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "142x80x2": "https://example.com/api/transformations/lessons/cover/142x80x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "114x64x1": "https://example.com/api/transformations/lessons/cover/114x64x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "114x64x2": "https://example.com/api/transformations/lessons/cover/114x64x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "72x40x1": "https://example.com/api/transformations/lessons/cover/72x40x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "72x40x2": "https://example.com/api/transformations/lessons/cover/72x40x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "36x20x1": "https://example.com/api/transformations/lessons/cover/36x20x1/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                            "36x20x2": "https://example.com/api/transformations/lessons/cover/36x20x2/eyJpZCI6IjBhNzlkZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
                        }
                    },
                }],
            }


        ]
    }],
    "guest_instructors_resources": [{
        "type": "guest_instructor",
        "id": "aeab9b3a-d8e4-4a25-a7d9-6ff8f761fd31",
        "user": {
            "type": "user",
            "id": "59b7ff73-cf64-4500-b7fb-24fa8905cf77",
            "name": "Jane Doe",
            "first_name": "Jane",
            "last_name": "Doe",
            "username": "jane_doe_166_91596",
            "avatar_picture": "cat",
            "avatar": {},
            "last_seen": null,
            "flags": {
                "seen_welcome": false,
                "seen_search_hint": false
            },
            "metatag": {},
            "profile": {
                "type": "profile",
                "id": "6e7b9c9d-ef6d-440b-9a3d-b0c4b2965d1c",
                "location": "MyString",
                "website": "MyString",
                "description": "MyString",
                "facebook_link": "MyString",
                "twitter_link": "MyString",
                "instagram_link": "MyString",
                "youtube_link": "MyString",
                "comments_count": 0,
                "followers_count": 0,
                "followings_count": 0,
                "images_count": 0,
                "cover": {}
            }
        },
        "created_at": "2021-04-27T08:31:00.266Z"
    }],
    "owner": {
        "type": "user",
        "id": "1f87fc72-8120-4567-a596-e58d277a7c0d",
        "name": "Jane Doe",
        "first_name": "Jane",
        "last_name": "Doe",
        "username": "jane_doe_162_859970",
        "avatar_picture": "frog-boi",
        "avatar": {
            "type": "image",
            "id": "8fde19.png",
            "alt": "1x1",
            "filename": "png/1x1.png",
            "extension": "png",
            "size": 67,
            "width": 1,
            "height": 1,
            "metadata": {
                "mime_type": "image/png"
            },
            "url": "https://example.com/uploads/cache/8fde19.png",
            "versions": {
                "164x164x1": "https://example.com/api/transformations/users/avatar/164x164x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "164x164x2": "https://example.com/api/transformations/users/avatar/164x164x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "72x72x1": "https://example.com/api/transformations/users/avatar/72x72x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "72x72x2": "https://example.com/api/transformations/users/avatar/72x72x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "40x40x1": "https://example.com/api/transformations/users/avatar/40x40x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "40x40x2": "https://example.com/api/transformations/users/avatar/40x40x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "24x24x1": "https://example.com/api/transformations/users/avatar/24x24x1/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                "24x24x2": "https://example.com/api/transformations/users/avatar/24x24x2/eyJpZCI6IjhmZGUxOS5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
            }
        },

        "profile": {
            "type": "profile",
            "id": "c7c02c8a-1371-490b-b256-9d523c27f205",
            "location": "MyString",
            "website": "MyString",
            "description": "MyString",
            "facebook_link": "MyString",
            "twitter_link": "MyString",
            "instagram_link": "MyString",
            "youtube_link": "MyString",
            "comments_count": 0,
            "followers_count": 0,
            "followings_count": 0,
            "images_count": 0,
            "cover": {
                "type": "image",
                "id": "49013d.png",
                "alt": "1x1",
                "filename": "png/1x1.png",
                "extension": "png",
                "size": 67,
                "width": 1,
                "height": 1,
                "metadata": {
                    "mime_type": "image/png"
                },
                "url": "https://example.com/uploads/cache/49013d.png",
                "versions": {
                    "1216x280x1": "https://example.com/api/transformations/profiles/cover/1216x280x1/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                    "1216x280x2": "https://example.com/api/transformations/profiles/cover/1216x280x2/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                    "280x96x1": "https://example.com/api/transformations/profiles/cover/280x96x1/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
                    "280x96x2": "https://example.com/api/transformations/profiles/cover/280x96x2/eyJpZCI6IjQ5MDEzZC5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
                }
            }
        }
    },
    "premium_points": [{
        "type": "premium_point",
        "id": "c5dd0bb6-5da5-4206-9449-be1db373d96a",
        "title": "Premium point",
        "description": "Description",
        "position": 0,
        "icon": "default"
    }],
    "skill_levels": [{
        "name": "all_levels"
    }],
    "cover_image": {
        "type": "image",
        "id": "375646.png",
        "alt": "1x1",
        "filename": "png/1x1.png",
        "extension": "png",
        "size": 67,
        "width": 1,
        "height": 1,
        "metadata": {
            "mime_type": "image/png"
        },
        "url": "https://example.com/uploads/cache/375646.png",
        "versions": {
            "800x450x1": "https://example.com/api/transformations/courses/cover/800x450x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "800x450x2": "https://example.com/api/transformations/courses/cover/800x450x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "264x148x1": "https://example.com/api/transformations/courses/cover/264x148x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "264x148x2": "https://example.com/api/transformations/courses/cover/264x148x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "142x80x1": "https://example.com/api/transformations/courses/cover/142x80x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "142x80x2": "https://example.com/api/transformations/courses/cover/142x80x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "114x64x1": "https://example.com/api/transformations/courses/cover/114x64x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "114x64x2": "https://example.com/api/transformations/courses/cover/114x64x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "72x40x1": "https://example.com/api/transformations/courses/cover/72x40x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "72x40x2": "https://example.com/api/transformations/courses/cover/72x40x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "36x20x1": "https://example.com/api/transformations/courses/cover/36x20x1/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ",
            "36x20x2": "https://example.com/api/transformations/courses/cover/36x20x2/eyJpZCI6IjM3NTY0Ni5wbmciLCJzdG9yYWdlIjoicHVibGljX2NhY2hlIiwibWV0YWRhdGEiOnsiY3JvcHBpbmciOm51bGwsIm1pbWVfdHlwZSI6ImltYWdlL3BuZyIsIndpZHRoIjoxLCJoZWlnaHQiOjF9fQ"
        }
    }
}]
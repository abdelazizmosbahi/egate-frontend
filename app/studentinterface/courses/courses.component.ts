import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  currentUser: any;
users: any;
userId: any;
search : any 
categories_search: any;
  categories:any;
  courseId:any;
  category_title: any;
  category: any;
  course_category: any;
  constructor(
    private readonly tcourseService: TcourseService,
    private categoryService: CategoryService,
    private usersService: UsersService,
    private activeroute:ActivatedRoute,
    private router: Router,


    ) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
}
res: any;
  ngOnInit() {
    this.courseId = this.activeroute.snapshot.paramMap.get('id2')

    this.getCourse();
    this.getCategory();
    // this.getUser();
   }

  getCourse() {
    this.tcourseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses, 'course');
    });
  }
  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });}

    getCourseByCategory(category_title: string) {
        this.tcourseService.getCourseByCategory(this.category_title).subscribe((course) => {
          this.course_category = category_title;
          console.log(this.course_category, 'course category');
        });}
        
    getCourseById() {
      this.tcourseService.getCourseById(this.courseId).subscribe((course) => {
        this.courses = course;
        // console.log(this.course, 'course id');
      });}
      getUserById() {
        this.usersService.getUserById(this.userId).subscribe((user) => {
          this.users = user;
          // console.log(this.course, 'course id');
        });}
  
        logout() {
          localStorage.clear();
          this.router.navigate(['/home']);
        }
}

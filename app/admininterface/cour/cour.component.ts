import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { UsersService } from 'src/app/serv/users/users.service';


@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
courses:any;
users: any;
  showDeleteAlert: boolean = false;
  showSuccessAlert: boolean = false;
  currentUser: any;
  categories:any;
  course: any;



  constructor(
    private formBuilder: FormBuilder,
    private tcourseService: TcourseService,
    private usersService: UsersService,
    private categoryService: CategoryService,
    private router: Router,



  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }
  ngOnInit() {


    console.log(this.currentUser,'user');

    
    
      this.getCourse();
      this.getCategory();
  }
  
  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });}

  getCourse() {
    this.tcourseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses, 'course');
    });
  }
  deleteCourse(courseId: string) {
    console.log(courseId);
    this.tcourseService.deleteCourse(courseId).subscribe(
      () => {
        console.log('Course deleted successfully!');
        this.getCourse(); this.showDeleteAlert = true;
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }
  getCourseById(courseId: string) {
    this.tcourseService.getCourseById(courseId).subscribe((course) => {
      this.courses = course;
      console.log(this.course, 'course id');
    });}
    
    getCourseByCategory(category_title: string) {
      this.tcourseService.getCourseByCategory(category_title).subscribe((course) => {
        this.courses = course;
        console.log(this.course, 'course by category');
      });}

      logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
      }

}

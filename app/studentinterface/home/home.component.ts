import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/serv/contact/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];
  search : any ;
categories: any;
categories_search: any;
  courseId:any;
  category_title: any;
  category: any;
  course_category: any;
  userId: any;
  users: any;

  name: string = '';
  email: string = '';
  description: string = '';
 

  contacts:any;

  addcontactForm!: FormGroup;
  showSuccessAlert: boolean = false;

  showDeleteAlert: boolean = false;
  currentUser: any;

  constructor(
    private readonly tcourseService: TcourseService,
    private categoryService: CategoryService,
    private usersService: UsersService,
    private readonly contactService: ContactService,
    private formBuilder: FormBuilder,
    private router: Router,

    ) {  
}

  ngOnInit() {
    this.getCourse();
    this.getCategory();
    this.addcontactForm = this.formBuilder.group({
      name:  new FormControl(""),
      email: new FormControl(""),
      description:  new FormControl("")

    });

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
  

  addcontact() {
    this.contactService.addcontact(this.addcontactForm.value).subscribe(
      response => {
        console.log(response); this.showSuccessAlert = true;
      },
      error => {
        console.log(error);
      }
    );
  }


}

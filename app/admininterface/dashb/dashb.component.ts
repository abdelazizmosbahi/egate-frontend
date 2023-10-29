import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/serv/users/users.model';
import { UsersService } from 'src/app/serv/users/users.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Category } from 'src/app/serv/category/category.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { Course } from 'src/app/serv/tcourse/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashb',
  templateUrl: './dashb.component.html',
  styleUrls: ['./dashb.component.css']
})
export class DashbComponent {


  users:any;
  categories:any;
  currentUser: any;
  courses: Course[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private categoryService: CategoryService,
    private readonly tcourseService: TcourseService,
    private router: Router,




  )
   {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }

  ngOnInit(): void {
    this.getCourse();

    this.getUser();
    this.getCategory();
    console.log(this.currentUser,'user');
  }
  getUser() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users, 'user');
    });
  }
  deleteUser(userId: string) {
    console.log(userId);
    this.usersService.deleteUser(userId).subscribe(
      () => {
        console.log('user deleted successfully!');
        this.getUser();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });
  }
  deleteCategory(categoryId: string) {
    console.log(categoryId);
    this.categoryService.deleteCategory(categoryId).subscribe(
      () => {
        console.log('Category deleted successfully!');
        this.getCategory();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }
  getCourse() {
    this.tcourseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses, 'course');
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}

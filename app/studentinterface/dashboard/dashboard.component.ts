import { Component } from '@angular/core';
import { CategoryService } from 'src/app/serv/category/category.service';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { AuthService } from 'src/app/serv/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/serv/users/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showDeleteAlert: boolean = false;
  currentUser: any;
  category_title: string = '';
  category_description: string = '';
  search : any ;
  user: any;
  data: any;
  categories:any;
  courses:any;
  course: any;
constructor(private categoryService: CategoryService,
  private readonly tcourseService: TcourseService,
  private readonly usersService: UsersService,
  private router: Router,

  ){
  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

}


  res:any;
  ngOnInit(): void {
    console.log(this.currentUser,'user');
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });
  }
  getCourse() {
    this.tcourseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses, 'course');
    });

}
getUserById(userId: string) {
  this.usersService.getUserById(userId).subscribe((user) => {
    this.user = user;
    console.log(this.user, 'user id');
  });
}
deleteUser(userId: string) {
  if (confirm("Are you sure you want to delete this account?")) {
    this.deleteUser(userId);
  }
  console.log(userId);
  this.usersService.deleteUser(userId).subscribe(
    () => {
      console.log('Account deleted successfully!');
      this.getUserById(userId); this.showDeleteAlert = true;
    },
    (error) => {
      console.error('Error deleting Account:', error);
    }
  );
  this.router.navigate(['/home']);
}

logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}


}


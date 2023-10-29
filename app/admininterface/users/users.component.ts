import { Component, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/serv/users/users.service';
import { Users } from 'src/app/serv/users/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users: any;
info: any;
user: any;
// result:any;
showDeleteAlert: boolean = false;
currentUser: any;

users_search : any ;

// Define an array of role objects with their corresponding CSS classes
roles = [
  { role: 'STUDENT', class: 'badge-success' },
  { role: 'TEACHER', class: 'badge-info' },
  { role: 'ADMIN', class: 'badge-danger' }
];

// Set the current user's role
// userRole = 'STUDENT'; // Replace with the actual user's role


constructor(
  private usersService: UsersService,
  private router: Router,

  
)
{
  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

}
ngOnInit(): void {
  this.getUser();
  console.log(this.currentUser,'user');

}
// getUser() {
//   this.usersService.getAllUsers().subscribe((users) => {
//     this.users = users;
//     console.log(this.users, 'user');
//   });
// }
getUser() {
  this.usersService.getAllUsers().subscribe((users) => {
    this.users = users.filter((user: Users) => user.role !== 'ADMIN');
    console.log(this.users, 'user');
  });
}

deleteUser(userId: string) {
  console.log(userId);
  this.usersService.deleteUser(userId).subscribe(
    () => {
      console.log('User deleted successfully!');this.showDeleteAlert = true;
      this.getUser();
    },
    (error) => {
      console.error('Error deleting user:', error);
    }
  );
  
}


logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}


}



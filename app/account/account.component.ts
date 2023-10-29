import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/serv/users/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  users: any;
  info: any;
  user: any;
  // result:any;
  showDeleteAlert: boolean = false;
  currentUser: any;
  
  
  roles = [
    { role: 'STUDENT', class: 'badge-success' },
    { role: 'TEACHER', class: 'badge-info' },
    { role: 'ADMIN', class: 'badge-danger' }
  ];

  constructor(
    private usersService: UsersService,
    private router: Router,
  
    
  )
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  }
  ngOnInit(): void {
    this.getUserById(this.currentUser);
    console.log(this.currentUser,'user');
  
  }

  getUserById(userId: string) {
    this.usersService.getUserById(userId).subscribe((user) => {
      this.user = user;
      console.log(this.user, 'user id');
    });
  }
  // deleteUser(userId: string) {
  //   console.log(userId);
  //   this.usersService.deleteUser(userId).subscribe(
  //     () => {
  //       console.log('User deleted successfully!');this.showDeleteAlert = true;
  //       this.getUser();
  //     },
  //     (error) => {
  //       console.error('Error deleting user:', error);
  //     }
  //   );
    
  // }
  
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







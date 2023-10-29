// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UsersComponent } from './users.component';

// describe('UsersComponent', () => {
//   let component: UsersComponent;
//   let fixture: ComponentFixture<UsersComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UsersComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UsersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(() => {
    });
  }
}

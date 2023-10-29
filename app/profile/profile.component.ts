import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/serv/users/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id=this.activateroute.snapshot.params['id'];


  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  dateofbirth: string = '';
  gender:string='';

  currentUser: any;
  DetailProfile: any;
  info_profile: any;

  @Input() user: any;
  showSuccessAlert: boolean = false;
  showDeleteAlert: boolean = false;
    editProfileForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activateroute:ActivatedRoute,

    ) { this.editProfileForm = this.formBuilder.group({  });
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }
  ngOnInit() :void {
    console.log(this.currentUser,'user');

    this.editProfileForm = this.formBuilder.group({
      firstname:  new FormControl(""),
      lastname:  new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
      dateofbirth:  new FormControl(""),
      gender:  new FormControl(""),
    });

    this.get_detail_profile();

  }
  setFormValues() {
    this.editProfileForm.patchValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone,
      dateofbirth: this.user.dateofbirth,
      gender: this.user.gender,
    });
  }
  get_detail_profile(id?: any) {
    this.usersService.getUserById(this.id).subscribe({
      next: (res: any) => {
        console.log(res, ' profile details');
        this.DetailProfile = res;

        this.info_profile = this.DetailProfile
        this.editProfileForm.patchValue({
          firstname: this.info_profile.firstname,
          lastname: this.info_profile.lastname,
          email: this.info_profile.email,
          phone:this.info_profile.phone,
          dateofbirth: this.info_profile.dateofbirth,
          gender: this.info_profile.gender,
         
        })
        console.log('info', this.editProfileForm.value)
      },
      error: (e) => {
        console.log('error getting info', e)
      },
      complete: () => {
        console.info('profile details returned')
      }
    })
  }


  getUserById(userId: string) {
    this.usersService.getUserById(userId).subscribe((user) => {
      this.user = user;
      console.log(this.user, 'user id');
    });
  }

  deleteUser(userId: string) {
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
  }

  updateUser() {
    this.usersService.updateUser(this.id,this.editProfileForm.value).subscribe(() => {
    const updatedValues = this.editProfileForm.value;
    
    console.log('profile updated successfully:', this.editProfileForm.value);
    this.showSuccessAlert = true;
      
    });
}


}
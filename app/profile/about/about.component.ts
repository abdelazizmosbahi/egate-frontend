import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/serv/users/users.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id=this.activateroute.snapshot.params['id'];


  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  dateofbirth: string = '';
  gender:string='';

  diplom:string='';
  experience:string='';
  cv:string='';

  
  currentUser: any;
  DetailProfile: any;
  info_profile: any;

  @Input() user: any;
  showSuccessAlert: boolean = false;
  showDeleteAlert: boolean = false;
    aboutForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activateroute:ActivatedRoute,
    private router: Router,


    ) { this.aboutForm = this.formBuilder.group({  });
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }
  ngOnInit() :void {
    console.log(this.currentUser,'user');

    this.aboutForm = this.formBuilder.group({
      diplom:  new FormControl(""),
      experience:  new FormControl(""),
      cv: new FormControl(""),
    });

    this.get_detail_profile();

  }
  setFormValues() {
    this.aboutForm.patchValue({
      diplom: this.user.diplom,
      experience: this.user.experience,
      cv: this.user.cv,
    });
  }
  get_detail_profile(id?: any) {
    this.usersService.getUserById(this.id).subscribe({
      next: (res: any) => {
        console.log(res, ' profile details');
        this.DetailProfile = res;

        this.info_profile = this.DetailProfile
        this.aboutForm.patchValue({
          diplom: this.info_profile.diplom,
          experience: this.info_profile.experience,
          cv: this.info_profile.cv,
         
        })
        console.log('info', this.aboutForm.value)
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

  // deleteUser(userId: string) {
  //   console.log(userId);
  //   this.usersService.deleteUser(userId).subscribe(
  //     () => {
  //       console.log('Account deleted successfully!');
  //       this.getUserById(userId); this.showDeleteAlert = true;
  //     },
  //     (error) => {
  //       console.error('Error deleting Account:', error);
  //     }
  //   );
  // }

  updateUser() {
    this.usersService.updateUser(this.id,this.aboutForm.value).subscribe(() => {
    const updatedValues = this.aboutForm.value;
    
    console.log('Informations updated successfully:', this.aboutForm.value);
    this.showSuccessAlert = true;
      
    });
}
logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}

}
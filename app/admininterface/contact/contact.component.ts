import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/serv/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contacts:any;

  // name: string = '';
  // email: string = '';
  // description: string = '';
 


  // addcontactForm!: FormGroup;
  // showSuccessAlert: boolean = false;

  // showDeleteAlert: boolean = false;
  // currentUser: any;

  // constructor(
  //   private contactService: ContactService,
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   ) {
  //     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  //   }
  //   res:any;
  // ngOnInit() {
  //   this.addcontactForm = this.formBuilder.group({
  //     name:  new FormControl(""),
  //     email: new FormControl(""),
  //     description:  new FormControl("")

  //   });
  //   console.log(this.contacts,'contacts');

  // }

  


  users: any;
info: any;
user: any;
showDeleteAlert: boolean = false;
currentUser: any;
  addcontactForm!: FormGroup;
  showSuccessAlert: boolean = false;





  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    }
ngOnInit(): void {
  this.getAllContacts();
  console.log(this.currentUser,'user');
  this.addcontactForm = this.formBuilder.group({
        name:  new FormControl(""),
        email: new FormControl(""),
        description:  new FormControl("")
  
      });
      console.log(this.contacts,'contacts');
  

}
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
getAllContacts() {
  this.contactService.getAllContacts().subscribe((contacts) => {
    this.contacts = contacts;
    console.log(this.contacts, 'contacts');
  });
}




      logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
      }
}
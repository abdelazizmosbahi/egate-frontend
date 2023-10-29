import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})
export class AddcComponent {
  title: string = '';
  description: string = '';
  start: string = '';
  end: string = '';
  type: string = '';
  time: string = '';

  duration: string = '';
  // frequency: string = '';
  price: string = '';
  imageDataUrl: string = '';
  course: any;
  file: any; // Initialize file property

  categories:any;
  _id: any;
  category_title: any;
    currentUser: any;

  showDeleteAlert: boolean = false;
  showSuccessAlert: boolean = false;


  handleImageInput(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  handleFileInput(files: FileList): void {
    if (files && files.length > 0) {
      const file = files.item(0);
      // Handle file upload to the cloud storage service
      // Obtain the URL of the uploaded file
      const fileUrl = this.course.file;
      this.course.file = fileUrl; // Update the file property with the cloud storage URL
    }
  }
  uploadFile(): void {
    // Perform file upload to the cloud storage service
    // Update the file property with the generated file URL
    const fileUrl = this.course.file;
    this.course.file = fileUrl;
  }
  


  addcourseForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tcourseService: TcourseService,
    private categoryService: CategoryService,
    private router: Router,


  ) {
this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
      res:any;

  ngOnInit(): void {
  console.log(this.currentUser,'currentuser');

    this.addcourseForm = this.formBuilder.group({
      title:  new FormControl(""),
      description:  new FormControl(""),
      teacher: this.currentUser._id,
      teacher_firstname: this.currentUser.firstname,
      teacher_lastname: this.currentUser.lastname,

      category: new FormControl(""),
      type:  new FormControl(""),
      start:  new FormControl(""),
      end:  new FormControl(""),
      time:  new FormControl(""),

      duration:  new FormControl(""),
      // frequency:  new FormControl(""),
      image:  new FormControl(""),
      file: new FormControl(""),
      price:  new FormControl(""),

    });
    this.getCategory();
  }

  addcourse() {
    this.tcourseService.addcourse(this.addcourseForm.value).subscribe(
      response => {
        console.log(response); this.showSuccessAlert = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });}
    
    logout() {
      localStorage.clear();
      this.router.navigate(['/home']);
    }
}


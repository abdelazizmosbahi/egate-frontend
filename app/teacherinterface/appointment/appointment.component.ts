import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { UsersService } from 'src/app/serv/users/users.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  title: string = '';
  description: string = '';
  date: string = '';
  type: string = '';
  duration: string = '';
  price: string = '';
  imageDataUrl: string = '';
  categories:any;
  category_title: any;
  search : any ;
category: any;
  // course: any; 
  @Input() course: any;
  id: any;
user: any;
users: any;
   courses: Course[] = [];
  // coursesData: Course[]=[];
  selectedCourse:  Course[] = [];
  editCourse: any;

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

  updatecourseForm!: FormGroup;
  showDeleteAlert: boolean = false;
  currentUser: any;

  constructor(
    private readonly tcourseService: TcourseService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private usersService: UsersService,
    private router: Router,
    ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    }
    res:any;
  ngOnInit() {
    console.log(this.currentUser,'user');

    
    this.updatecourseForm = this.formBuilder.group({
      title:  new FormControl(""),
      description:  new FormControl(""),
      category: new FormControl(""),
      type:  new FormControl(""),
      date:  new FormControl(""),
      duration:  new FormControl(""),
      image:  new FormControl(""),
      file: new FormControl(""),
      price:  new FormControl(""),

    });
      this.getCourse();
      this.getCategory();
      this.setFormValues();
  }
  setFormValues() {
    // Set the form values based on the course object
    this.updatecourseForm.patchValue({
      title: this.course.title,
      description: this.course.description,
      category: this.course.category,
      type: this.course.type,
      price: this.course.price,
      date: this.course.date,
      duration: this.course.duration,
      image: this.course.image,
      file: this.course.file
    });
  }
  
  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });}

  getCourse() {
    this.tcourseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses, 'course');
    });
  }
  deleteCourse(courseId: string) {
    console.log(courseId);
    this.tcourseService.deleteCourse(courseId).subscribe(
      () => {
        console.log('Course deleted successfully!');
        this.getCourse(); this.showDeleteAlert = true;
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }
  getCourseById(courseId: string) {
    this.tcourseService.getCourseById(courseId).subscribe((course) => {
      this.courses = course;
      console.log(this.course, 'course id');
    });}
  // }
  // oneUser(userId: string, firstname: string, lastname: string, ) {
  //   console.log(userId, firstname, lastname );
  //   this.usersService.oneUser(userId, firstname, lastname,).subscribe(
      
  //   );
   
  // }
  getUserById(userId: string, firstname: string, lastname: string) {
    this.tcourseService.getCourseById(userId).subscribe((user) => {
      this.users = user;
      console.log(this.user,firstname,lastname);
    });}
    logout() {
      localStorage.clear();
      this.router.navigate(['/home']);
    }

}

// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { AppService } from 'src/app/serv/app/app.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


// @Component({
//   selector: 'app-appointment',
//   templateUrl: './appointment.component.html',
//   styleUrls: ['./appointment.component.css']
// })
// export class AppointmentComponent {
//   currentUser: any;

//   search : any ;

//   title_app: string='';
//   date_app: string = '';
//   price: string = '';
//   hours: string = '';
//   nb_of_hours: string = '';
//   // id_teacher: string = '';
//   type: string = '';
//   imageDataUrl: string = '';

//   appointments: any;

//   categories:any;
//   category_title: any;
//   showDeleteAlert: boolean = false;
//   showSuccessAlert: boolean = false;


//   handleImageInput(event: Event) {
//     const fileInput = event.target as HTMLInputElement;
//     if (fileInput.files && fileInput.files[0]) {
//       const file = fileInput.files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imageDataUrl = reader.result as string;
//       };
//       reader.readAsDataURL(file);
//     }
//   }
  


//   addappForm!: FormGroup;

//   constructor(
    

//     private formBuilder: FormBuilder,
//     private appService: AppService,
//     private http: HttpClient

//   ) {
//     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
//   }
//   res:any;

//   ngOnInit(): void {

//     console.log(this.currentUser,'user');

//     this.getAppointment();

//     this.addappForm = this.formBuilder.group({
//       date_app:  new FormControl(""),
//       price:  new FormControl(""),
//       hours:  new FormControl(""),
//       nb_of_hours:  new FormControl(""),
//       // id_teacher: new FormControl(""),
//       type:  new FormControl(""),
//       image:  new FormControl(""),

//     });
//   }

//   addAppointment() {
//     this.appService.addAppointment(this.addappForm.value).subscribe(
//       response => {
//         console.log(response); this.showSuccessAlert = true;
//       },
//       error => {
//         console.log(error);
//       }
//     );
  
// }
// getAppointment() {
//   this.appService.getAllAppointments().subscribe((appointments) => {
//     this.appointments = appointments;
//     console.log(this.appointments, 'appointment');
//   });
// }



// deleteAppointment(appointmentId: string) {
//   console.log(appointmentId);
//   this.appService.deleteAppointment(appointmentId).subscribe(
//     () => {
//       console.log('appointments deleted successfully!');
//       this.getAppointment(); this.showDeleteAlert = true;
//     },
//     (error) => {
//       console.error('Error deleting appointment:', error);
//     }
//   );
// }
// }

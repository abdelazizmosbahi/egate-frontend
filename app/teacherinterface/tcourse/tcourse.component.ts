import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { UsersService } from 'src/app/serv/users/users.service';

@Component({
  selector: 'app-tcourse',
  templateUrl: './tcourse.component.html',
  styleUrls: ['./tcourse.component.css'],
})
export class TcourseComponent implements OnInit {
  teacherCourses: Course[] = [];//for courses of teacher only

  courses: Course[] = [];
  connectedTeacherId: string = ''; // Replace with the actual ID of the connected teacher



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

  // course: any; 
  @Input() course: any;
  id: any;
user: any;
users: any;
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
  teacher: any;
  course_teacher: any;

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
    this.getCoursesByTeacher();


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
    const confirmation = window.confirm('Are you sure you want to delete this course?');
  if (confirmation) {
    console.log(courseId);
    this.tcourseService.deleteCourse(courseId).subscribe(
      () => {
        console.log('Course deleted successfully!');
        this.getCourse(); this.showDeleteAlert = true;
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );}
  }
  getCourseById(courseId: string) {
    this.tcourseService.getCourseById(courseId).subscribe((course) => {
      this.courses = course;
      console.log(this.course, 'course id');
    });}
    
    getCourseByCategory(category_title: string) {
      this.tcourseService.getCourseByCategory(category_title).subscribe((course) => {
        this.courses = course;
        console.log(this.course, 'course by category');
      });}

      getCourseByTeacher(teacher: string) {
        this.tcourseService.getCourseByTeacher(this.teacher).subscribe((course) => {
          this.course_teacher = teacher;
          console.log(this.course_teacher, 'course teacher');
        });}

        getCoursesByTeacher(): void {
          this.tcourseService.getAllCourses().subscribe((courses: Course[]) => {
            this.courses = courses.filter((course: Course) => course.teacher === this.connectedTeacherId);
          });
        }

      logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
      }
}
import { Component, OnInit } from '@angular/core';
import { FormControl,  } from '@angular/forms';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { Course } from 'src/app/serv/tcourse/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-updc',
  templateUrl: './updc.component.html',
  styleUrls: ['./updc.component.css']
})
export class UpdcComponent  implements OnInit  {
  id=this.activateroute.snapshot.params['id'];
  title: string = '';
  file: string ='';

  description: string = '';
  start: string = '';
  end: string = '';
  type: string = '';
  time: string = '';
  duration: string = '';
  price: string = '';

  imageDataUrl: string = '';
  categories:any;
  category_title: any;
  // courses: Course[];
   courses: Course[] = [];
  coursesData: Course[]=[];
  selectedCourse:  Course[] = [];
  editCourse: any;
Detailcourse: any;
info_course: any;
// file: any; // Initialize file property

currentUser: any;

  // selectedCourse: Course;
course: any;
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
  


  updatecourseForm!: FormGroup;

  constructor(
    // private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private tcourseService: TcourseService,
    private activateroute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

 






  ) { this.updatecourseForm = this.formBuilder.group({});
  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
}
  
  ngOnInit(): void {
    console.log(this.id,'id course returned');
    (this.id,this.updatecourseForm.value);

    this.updatecourseForm = this.formBuilder.group({
      title:  new FormControl(""),
      description:  new FormControl(""),
      category: new FormControl(""),
      type:  new FormControl(""),
      start:  new FormControl(""),
      end:  new FormControl(""),
      time:  new FormControl(""),
      duration:  new FormControl(""),
      image:  new FormControl(""),
      file: new FormControl(""),
      price:  new FormControl(""),


    });
    this.getCategory();
    this.get_detail_course();


    // this.getCourse();

  }
  setFormValues() {
    // Set the form values based on the course object
    this.updatecourseForm.patchValue({
      title: this.course.title,
      description: this.course.description,
      category: this.course.category,
      type: this.course.type,
      price: this.course.price,
      start: this.course.start,
      end: this.course.end,
      time: this.course.time,
      duration: this.course.duration,
      image: this.course.image,
      file: this.course.file
    });
  }

  getCategory() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'categories returned');
    });}
    
 

    get_detail_course(id?: any) {
      this.tcourseService.getCourseById(this.id).subscribe({
        next: (res: any) => {
          console.log(res, ' course details');
          this.Detailcourse = res;

          this.info_course = this.Detailcourse
          // this.image_url = this.base_url_image + this.info_course.image_url
          this.updatecourseForm.patchValue({
            title: this.info_course.title,
            description: this.info_course.description,
            category: this.info_course.category,
            type:this.info_course.type,
            price: this.info_course.price,
            start: this.info_course.start,
            end: this.info_course.end,
            time: this.info_course.time,
            duration: this.info_course.duration,
            image: this.info_course.image,
            file: this.info_course.file,


            // image_url: this.info_employe.image_url,
            // post: this.info_responsable.post,
          })
          console.log('message+++', this.updatecourseForm.value)
        },
        error: (e) => {
          console.log('message', e)
        },
        complete: () => {
          console.info('course details returned')
        }
      })
    }



  updateCourse() {
    this.tcourseService.updateCourse(this.id,this.updatecourseForm.value).subscribe(() => {
    const updatedValues = this.updatecourseForm.value;
    
    console.log('Course updated11111111111:', this.updatecourseForm.value);
    this.showSuccessAlert = true;
      
    });
    setTimeout(() => {
      this.router.navigate(['/tcourse']);
    }, 3000);
}


logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}
}

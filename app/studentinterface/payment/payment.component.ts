import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/serv/tcourse/course.model';
import { TcourseService } from 'src/app/serv/tcourse/tcourse.service';
import { CategoryService } from 'src/app/serv/category/category.service';
import { UsersService } from 'src/app/serv/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit{
  courses : any;
  currentUser: any;
  courseId:any;
  
  paymentHandler:any = null;

  constructor(
    private readonly tcourseService: TcourseService,
    private categoryService: CategoryService,
    private usersService: UsersService,
    private activeroute:ActivatedRoute,
      private router: Router,


  ) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');}

  ngOnInit() {
    this.courseId = this.activeroute.snapshot.paramMap.get('id2')

    this.getCourseById();
    this.invokeStripe();
  }
  //   getCourse() {
  //   this.tcourseService.getAllCourses().subscribe((courses) => {
  //     this.courses = courses;
  //     console.log(this.courses, 'course');
  //   });
  // }
  getCourseById() {
    // this.tcourseService.getCourseById(courseId).subscribe();}
    this.tcourseService.getCourseById(this.courseId).subscribe((course) => {
      this.courses = course;
      console.log(this.courses, 'course id');
    });
  
  
  }
  
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Payment has been successful');
      }
    });
  
    paymentHandler.open({
      // name: this.currentUser,
      description: this.courses.title,
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
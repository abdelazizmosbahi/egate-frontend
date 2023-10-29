import { Component } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  currentUser: any;
  constructor(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  }
  
  
    res:any;
    ngOnInit(): void {
      // localStorage.Item('currentUser', JSON.stringify(this.res));
      console.log(this.currentUser,'user');
    }
  }
  

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/serv/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updcategory',
  templateUrl: './updcategory.component.html',
  styleUrls: ['./updcategory.component.css']
})

// export class UpdcategoryComponent 
export class UpdcategoryComponent implements OnInit {
  id=this.activateroute.snapshot.params['id'];
  category_title: string = '';
  category_description: string = '';
 
Detailcategory: any;
info_category: any;
category: any;
  currentUser: any;

  showDeleteAlert: boolean = false;
  showSuccessAlert: boolean = false;


  updatecategoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private activateroute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private location :Location,
    private router: Router,

  ) { this.updatecategoryForm = this.formBuilder.group({
  });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
}

  
  ngOnInit(): void {
    console.log(this.id,'id category returned');
    (this.id,this.updatecategoryForm.value);

    this.updatecategoryForm = this.formBuilder.group({
      category_title:  new FormControl(""),
      category_description:  new FormControl(""),

    });
    this.get_detail_category();

  }
  setFormValues() {
    this.updatecategoryForm.patchValue({
      category_title: this.category.title,
      category_description: this.category.description,
    
    });
  }

    get_detail_category(id?: any) {
      this.categoryService.getCategoryById(this.id).subscribe({
        next: (res: any) => {
          console.log(res, ' category details');
          this.Detailcategory = res;

          this.info_category = this.Detailcategory
          this.updatecategoryForm.patchValue({
            category_title: this.info_category.category_title,
            category_description: this.info_category.category_description,           
          })
          console.log('message+++', this.updatecategoryForm.value)
        },
        error: (e) => {
          console.log('message', e)
        },
        complete: () => {
          console.info('category details returned')
        }
      })
    }



  updateCategory() {
    this.categoryService.updateCategory(this.id,this.updatecategoryForm.value).subscribe(() => {
    const updatedValues = this.updatecategoryForm.value;
    console.log('category updated11111111111:', this.updatecategoryForm.value);
    this.showSuccessAlert = true;
    this.router.navigate(['/categories']);// navigate to categories after the update is done
    });
}
logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}
}



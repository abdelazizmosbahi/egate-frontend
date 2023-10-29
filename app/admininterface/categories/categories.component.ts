import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/serv/category/category.model';
import { CategoryService } from 'src/app/serv/category/category.service';

@Component({
  selector: 'app-addc',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category_title: string = '';
  category_description: string = '';
  categories:any;
  addcategoryForm!: FormGroup;
  category: any;
  showDeleteAlert: boolean = false;
  showSuccessAlert: boolean = false;
  currentUser: any;

  categories_search : any ;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,

  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }
  ngOnInit(): void {
    this.getCategory();
    this.addcategoryForm = this.formBuilder.group({
      category_title:  new FormControl(""),
      category_description:  new FormControl(""),
      
    });
  }

  addcategory() {
    this.categoryService.addcategory(this.addcategoryForm.value).subscribe(
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
    });
  }

  deleteCategory(categoryId: string) {
    console.log(categoryId);
    this.categoryService.deleteCategory(categoryId).subscribe(
      () => {
        console.log('Category deleted successfully!');  this.showDeleteAlert = true;
        this.getCategory();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }
  getCategoryById(categoryId: string) {
    this.categoryService.getCategoryById(categoryId).subscribe((categoryId) => {
      this.categories = categoryId;
      console.log(this.categories, 'category id');
    });
  }
  search(category_title: string) {
    this.categoryService.search(category_title).subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories, 'category');
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}

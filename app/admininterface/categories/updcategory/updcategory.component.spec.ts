import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcategoryComponent } from './updcategory.component';

describe('UpdcategoryComponent', () => {
  let component: UpdcategoryComponent;
  let fixture: ComponentFixture<UpdcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcourseComponent } from './tcourse.component';

describe('TcourseComponent', () => {
  let component: TcourseComponent;
  let fixture: ComponentFixture<TcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

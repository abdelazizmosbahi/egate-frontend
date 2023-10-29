import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcComponent } from './updc.component';

describe('UpdcComponent', () => {
  let component: UpdcComponent;
  let fixture: ComponentFixture<UpdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

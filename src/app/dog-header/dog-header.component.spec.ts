import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogHeaderComponent } from './dog-header.component';

describe('DogHeaderComponent', () => {
  let component: DogHeaderComponent;
  let fixture: ComponentFixture<DogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

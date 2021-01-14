import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserHomepageComponent } from './view-user-homepage.component';

describe('ViewUserHomepageComponent', () => {
  let component: ViewUserHomepageComponent;
  let fixture: ComponentFixture<ViewUserHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

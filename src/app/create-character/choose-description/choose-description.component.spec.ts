import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDescriptionComponent } from './choose-description.component';

describe('ChooseDescriptionComponent', () => {
  let component: ChooseDescriptionComponent;
  let fixture: ComponentFixture<ChooseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

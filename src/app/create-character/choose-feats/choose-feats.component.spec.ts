import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFeatsComponent } from './choose-feats.component';

describe('ChooseFeatsComponent', () => {
  let component: ChooseFeatsComponent;
  let fixture: ComponentFixture<ChooseFeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

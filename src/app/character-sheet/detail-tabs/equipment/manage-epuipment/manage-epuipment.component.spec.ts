import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEpuipmentComponent } from './manage-epuipment.component';

describe('ManageEpuipmentComponent', () => {
  let component: ManageEpuipmentComponent;
  let fixture: ComponentFixture<ManageEpuipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEpuipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEpuipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

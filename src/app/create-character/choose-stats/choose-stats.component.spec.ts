import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStatsComponent } from './choose-stats.component';

describe('ChooseStatsComponent', () => {
  let component: ChooseStatsComponent;
  let fixture: ComponentFixture<ChooseStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

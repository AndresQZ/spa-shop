import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceViewComponent } from './nice-view.component';

describe('NiceViewComponent', () => {
  let component: NiceViewComponent;
  let fixture: ComponentFixture<NiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

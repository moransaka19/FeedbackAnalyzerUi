import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTagComponent } from './feedback-tag.component';

describe('FeedbackTagComponent', () => {
  let component: FeedbackTagComponent;
  let fixture: ComponentFixture<FeedbackTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSentenceComponent } from './tag-sentence.component';

describe('TagSentenceComponent', () => {
  let component: TagSentenceComponent;
  let fixture: ComponentFixture<TagSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSentenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

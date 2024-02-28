import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatejobComponent } from './createjob.component';

describe('CreatejobComponent', () => {
  let component: CreatejobComponent;
  let fixture: ComponentFixture<CreatejobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatejobComponent]
    });
    fixture = TestBed.createComponent(CreatejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

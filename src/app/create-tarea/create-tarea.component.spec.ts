import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTareaComponent } from './create-tarea.component';

describe('CreateTareaComponent', () => {
  let component: CreateTareaComponent;
  let fixture: ComponentFixture<CreateTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

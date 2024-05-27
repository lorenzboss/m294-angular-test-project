import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistComponent } from './datalist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DatalistComponent', () => {
  let component: DatalistComponent;
  let fixture: ComponentFixture<DatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
      ],
      providers: [provideAnimationsAsync()],
      declarations: [DatalistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogregverComponent } from './logregver.component';

describe('LogregverComponent', () => {
  let component: LogregverComponent;
  let fixture: ComponentFixture<LogregverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogregverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogregverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLikeBoxComponent } from './fb-like-box.component';

describe('FbLikeBoxComponent', () => {
  let component: FbLikeBoxComponent;
  let fixture: ComponentFixture<FbLikeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbLikeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLikeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

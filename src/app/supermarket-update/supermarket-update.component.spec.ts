import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketUpdateComponent } from './supermarket-update.component';

describe('SupermarketUpdateComponent', () => {
  let component: SupermarketUpdateComponent;
  let fixture: ComponentFixture<SupermarketUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermarketUpdateComponent]
    });
    fixture = TestBed.createComponent(SupermarketUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

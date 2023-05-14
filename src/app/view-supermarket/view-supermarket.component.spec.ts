import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupermarketComponent } from './view-supermarket.component';

describe('ViewSupermarketComponent', () => {
  let component: ViewSupermarketComponent;
  let fixture: ComponentFixture<ViewSupermarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSupermarketComponent]
    });
    fixture = TestBed.createComponent(ViewSupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

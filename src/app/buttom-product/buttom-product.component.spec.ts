import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomProductComponent } from './buttom-product.component';

describe('ButtomProductComponent', () => {
  let component: ButtomProductComponent;
  let fixture: ComponentFixture<ButtomProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

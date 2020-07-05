import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductScanPage } from './product-scan.page';

describe('ProductScanPage', () => {
  let component: ProductScanPage;
  let fixture: ComponentFixture<ProductScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

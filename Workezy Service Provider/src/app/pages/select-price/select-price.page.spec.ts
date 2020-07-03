import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPricePage } from './select-price.page';

describe('SelectPricePage', () => {
  let component: SelectPricePage;
  let fixture: ComponentFixture<SelectPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

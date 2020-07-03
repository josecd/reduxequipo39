import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetTimePage } from './set-time.page';

describe('SetTimePage', () => {
  let component: SetTimePage;
  let fixture: ComponentFixture<SetTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

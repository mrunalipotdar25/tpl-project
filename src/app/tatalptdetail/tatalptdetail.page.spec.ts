import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TatalptdetailPage } from './tatalptdetail.page';

describe('TatalptdetailPage', () => {
  let component: TatalptdetailPage;
  let fixture: ComponentFixture<TatalptdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatalptdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TatalptdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

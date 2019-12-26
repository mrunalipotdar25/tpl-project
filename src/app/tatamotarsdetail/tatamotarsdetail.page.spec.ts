import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TatamotarsdetailPage } from './tatamotarsdetail.page';

describe('TatamotarsdetailPage', () => {
  let component: TatamotarsdetailPage;
  let fixture: ComponentFixture<TatamotarsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatamotarsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TatamotarsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

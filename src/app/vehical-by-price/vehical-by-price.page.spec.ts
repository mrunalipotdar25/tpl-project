import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicalByPricePage } from './vehical-by-price.page';

describe('VehicalByPricePage', () => {
  let component: VehicalByPricePage;
  let fixture: ComponentFixture<VehicalByPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalByPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicalByPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

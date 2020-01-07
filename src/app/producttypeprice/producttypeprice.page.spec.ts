import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducttypepricePage } from './producttypeprice.page';

describe('ProducttypepricePage', () => {
  let component: ProducttypepricePage;
  let fixture: ComponentFixture<ProducttypepricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttypepricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducttypepricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

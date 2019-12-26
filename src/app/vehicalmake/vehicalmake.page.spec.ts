import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicalmakePage } from './vehicalmake.page';

describe('VehicalmakePage', () => {
  let component: VehicalmakePage;
  let fixture: ComponentFixture<VehicalmakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalmakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicalmakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

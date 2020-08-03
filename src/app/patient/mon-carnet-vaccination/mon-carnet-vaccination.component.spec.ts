import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonCarnetVaccinationComponent } from './mon-carnet-vaccination.component';

describe('MonCarnetVaccinationComponent', () => {
  let component: MonCarnetVaccinationComponent;
  let fixture: ComponentFixture<MonCarnetVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonCarnetVaccinationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonCarnetVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

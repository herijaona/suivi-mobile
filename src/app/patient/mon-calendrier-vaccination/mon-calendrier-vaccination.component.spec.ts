import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonCalendrierVaccinationComponent } from './mon-calendrier-vaccination.component';

describe('MonCalendrierVaccinationComponent', () => {
  let component: MonCalendrierVaccinationComponent;
  let fixture: ComponentFixture<MonCalendrierVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonCalendrierVaccinationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonCalendrierVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

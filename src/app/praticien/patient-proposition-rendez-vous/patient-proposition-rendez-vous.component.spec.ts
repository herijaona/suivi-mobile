import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientPropositionRendezVousComponent } from './patient-proposition-rendez-vous.component';

describe('PatientPropositionRendezVousComponent', () => {
  let component: PatientPropositionRendezVousComponent;
  let fixture: ComponentFixture<PatientPropositionRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPropositionRendezVousComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientPropositionRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

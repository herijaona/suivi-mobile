import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewVaccinationComponent } from './new-vaccination.component';

describe('NewVaccinationComponent', () => {
  let component: NewVaccinationComponent;
  let fixture: ComponentFixture<NewVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVaccinationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdvAnnulationComponent } from './rdv-annulation.component';

describe('RdvAnnulationComponent', () => {
  let component: RdvAnnulationComponent;
  let fixture: ComponentFixture<RdvAnnulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvAnnulationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdvAnnulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

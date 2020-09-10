import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RendezVousPage } from './rendez-vous.page';

describe('RendezVousPage', () => {
  let component: RendezVousPage;
  let fixture: ComponentFixture<RendezVousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RendezVousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropositionRdvPage } from './proposition-rdv.page';

describe('PropositionRdvPage', () => {
  let component: PropositionRdvPage;
  let fixture: ComponentFixture<PropositionRdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionRdvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropositionRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

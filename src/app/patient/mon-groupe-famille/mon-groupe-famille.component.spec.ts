import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonGroupeFamilleComponent } from './mon-groupe-famille.component';

describe('MonGroupeFamilleComponent', () => {
  let component: MonGroupeFamilleComponent;
  let fixture: ComponentFixture<MonGroupeFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonGroupeFamilleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonGroupeFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

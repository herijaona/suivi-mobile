import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RendrezVousFilterComponent } from './rendrez-vous-filter.component';

describe('RendrezVousFilterComponent', () => {
  let component: RendrezVousFilterComponent;
  let fixture: ComponentFixture<RendrezVousFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendrezVousFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RendrezVousFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

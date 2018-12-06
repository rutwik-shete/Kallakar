import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowmoreComponent } from './knowmore.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from 'src/environments/environment';

describe('KnowmoreComponent', () => {
  let component: KnowmoreComponent;
  let fixture: ComponentFixture<KnowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseconfig),
        AngularFireStorageModule,
        MDBBootstrapModule.forRoot(), ],
      declarations: [ KnowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

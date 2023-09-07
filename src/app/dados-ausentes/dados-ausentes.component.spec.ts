import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAusentesComponent } from './dados-ausentes.component';

describe('DadosAusentesComponent', () => {
  let component: DadosAusentesComponent;
  let fixture: ComponentFixture<DadosAusentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAusentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAusentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

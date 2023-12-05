import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeDadosPage } from './informe-dados.page';

describe('InformeDadosPage', () => {
  let component: InformeDadosPage;
  let fixture: ComponentFixture<InformeDadosPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(InformeDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

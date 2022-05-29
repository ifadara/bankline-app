import { ComponentFixture, TestBed } from '@angular/core/testing';

import { movimentacoesListComponent } from './movimentacoes-list.component';

describe('movimentacoesListComponent', () => {
  let component: movimentacoesListComponent;
  let fixture: ComponentFixture<movimentacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ movimentacoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(movimentacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

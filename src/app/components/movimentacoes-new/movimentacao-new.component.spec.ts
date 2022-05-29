import { ComponentFixture, TestBed } from '@angular/core/testing';

import { movimentacoesNewComponent } from './movimentacoes-new.component';

describe('movimentacoesNewComponent', () => {
  let component: movimentacoesNewComponent;
  let fixture: ComponentFixture<movimentacoesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ movimentacoesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(movimentacoesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

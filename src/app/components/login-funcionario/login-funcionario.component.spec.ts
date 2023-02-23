import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFuncionarioComponent } from './login-funcionario.component';

describe('LoginFuncionarioComponent', () => {
  let component: LoginFuncionarioComponent;
  let fixture: ComponentFixture<LoginFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

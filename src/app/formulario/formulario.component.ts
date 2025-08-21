import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  passwordRules = {
    length: false,
    number: false,
    uppercase: false,
    special: false,
    confirm: false
  };

  emailRules = {
    confirm: false
  }

  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]), //campo 'email'
    senha : new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]), //campo 'senha'
    verificaSenha: new FormControl('')
  });

  // Método de validação da senha
  validatePassword() {
    const password = this.form.get('senha')?.value ?? '';
    const isValid = this.passwordRegex.test(password);

    
    this.passwordRules.length = password.length >= 8 && password.length <= 16;
    this.passwordRules.number = /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
    this.passwordRules.uppercase = /[A-Z]/.test(password);
    this.passwordRules.special = /[^a-zA-Z0-9]/.test(password);

    return isValid;
  }

  validateEmail(){
    const email = this.form.get('email')?.value ?? '';
    const isValid = this.emailRegex.test(email);


    this.emailRules.confirm = isValid;

    return isValid;
  }

  validatePasswordConfirm(){
    const password = this.form.get('senha')?.value ?? '';
    const passwordConfirm = this.form.get('verificaSenha')?.value ?? '';

    this.passwordRules.confirm = password == passwordConfirm;
  }

  //capturar do evento submit
  onSubmit() {
    if (this.form.valid) {
    console.log('Formulário válido:', this.form.value);
  } else {
    console.log('Formulário Inválido!', this.form.value);
  }
  }

  // Método para verificar se o formulário é válido
  get isFormValid() {
    return this.form.valid;
  }
}

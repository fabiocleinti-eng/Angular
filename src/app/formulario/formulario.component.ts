import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;


  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl(''), //campo 'email'
    senha : new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]) //campo 'senha'
  });

  // Método de validação da senha
  validatePassword() {
    const password = this.form.get('senha')?.value ?? '';
    const isValid = this.passwordRegex.test(password);
    return isValid;
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

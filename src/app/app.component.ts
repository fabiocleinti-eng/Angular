import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";

@Component({
  selector: 'app-root',
  imports: [ListaUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tecweb';
}

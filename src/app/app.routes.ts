import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'formulario', component: FormularioComponent },
    
    { 
      path: 'lista-usuarios', 
      component: ListaUsuariosComponent,
      canActivate: [authGuard] 
    },
    
    { path: '**', redirectTo: 'login' },
];
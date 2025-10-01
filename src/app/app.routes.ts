import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'formulario', component: FormularioComponent },
    
    {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
    canActivate: [authGuard],
    },

    { path: '**', redirectTo: 'login' },
];

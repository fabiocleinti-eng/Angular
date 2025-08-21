import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';


export const routes: Routes = [
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'formulario', component: FormularioComponent },
    {
        path: '', /* raiz do projeto */
        pathMatch: 'full',
        redirectTo: 'formulario'
    }
];

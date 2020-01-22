import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

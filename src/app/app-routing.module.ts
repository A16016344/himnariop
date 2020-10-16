import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DonarComponent } from './components/donar/donar.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DescargasComponent } from './components/descargas/descargas.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'donar', component: DonarComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'descargas', component: DescargasComponent },
  { path: 'app', component: AplicacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

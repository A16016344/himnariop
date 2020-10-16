import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DonarComponent } from './components/donar/donar.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DescargasComponent } from './components/descargas/descargas.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DonarComponent,
    PreguntasComponent,
    DescargasComponent,
    AplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

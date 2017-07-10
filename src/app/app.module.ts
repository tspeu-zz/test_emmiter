import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
//import { MuestraComponent } from './muestra/muestra.component';
import {EmiterService} from './service/emiter.service';
import { BarrakkComponent } from './kkcomponents/barrakk/barrakk.component';
import { ListapelisComponent } from './kkcomponents/listapelis/listapelis.component';
import {MuestraModule} from './muestra/muestra.module';
import {InicioModule} from './inicio/inicio.module';
import { FooterComponent } from './footer/footer.component';
/*import{InicioComponent} from './inicio/inicio/inicio.component';
*/



@NgModule({
  declarations: [
    AppComponent,
  //  MuestraComponent,
    BarrakkComponent,
    ListapelisComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, //FormsModule,
    MaterialModule, MdNativeDateModule,
    InicioModule, MuestraModule
  ],
  providers: [EmiterService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }

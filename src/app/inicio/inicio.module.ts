import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {MdSelectModule} from '@angular/material';
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule, MdSelectModule, FormsModule
  ],
  declarations: [InicioComponent],
  exports:[InicioComponent]
})
export class InicioModule { }

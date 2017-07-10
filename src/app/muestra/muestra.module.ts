import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuestraComponent } from './muestra.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuestraComponent],
  exports: [MuestraComponent]
})
export class MuestraModule { }

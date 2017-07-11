import { Component, OnInit } from '@angular/core';
import { EmiterService } from "../../service/emiter.service";

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _emiterService : EmiterService) {

   }

  selectedValue: string;
  selectedNumber: number;
  selectedFalg : boolean= false;
  // @Output()
  // saleFood : EventEmitter<string> = new EventEmitter();

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit() {
    this.selectedNumber= 10;
    this.selectedValue=this.foods[0].value;
    this._emiterService.valor= this.selectedValue;
    this._emiterService.emitirString();
  }

  comidaSaliendo(newValor){
    // let valor = "hola tu";
    // this.saleFood.emit(valor);
    // console.log(`sale comida! ${valor}`);
    this._emiterService.valor=newValor;
    this._emiterService.emitirString();
    console.log(`selecc cambia ${newValor}`);
  }

  numSale(num: number){
    this._emiterService.numerico = num;
    this._emiterService.emitirNum();
  }
  
}

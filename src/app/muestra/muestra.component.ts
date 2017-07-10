import { Component, OnInit , Input} from '@angular/core';
import {MdSelectModule} from '@angular/material';



@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

		

  constructor() { }


  ngOnInit() {
  	console.log("muestraComponent creado");
  }

}


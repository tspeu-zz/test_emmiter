import { Component , EventEmitter, Output} from '@angular/core';
import {MdToolbarModule, MdIconRegistry} from '@angular/material';
import {InicioComponent} from './inicio/inicio/inicio.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title : string = 'appEmitter';
    recibe : string =null;
	refUrl =[
	{"title":"Tour of Heroes","url":"https://angular.io/tutorial"},
	{"title":"CLI Documentation","url":"https://github.com/angular/angular-cli/wiki"},
	{"title":"Angular blog","url": "http://angularjs.blogspot.ca"}
	];

	@Output()
	public emiteUrl :EventEmitter<any> = new EventEmitter();

goAngular(i, url) : void{
	
    //window.location.href=this.refUrl[i].url; NO FUNCIONA
   // window.open("https://www.google.com", "_blank");JSON.stringify(this.refUrl[i].url)
    window.open(this.refUrl[i].url,"_blank");
    this.emiteUrl.emit("hola");
    console.log(`indice:${i} url: ${url} emite esto: ${this.emiteUrl}`);
    this.recibe = this.refUrl[i].url;
}
// <button (click)="emitUrl.next(control.value)">Add</button>


}

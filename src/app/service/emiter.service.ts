import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class EmiterService {

	@Output()
	emite : EventEmitter<string> = new EventEmitter<string>();	

	@Output()
	emiteFlag: EventEmitter<boolean> = new EventEmitter<boolean>();	

	@Output()
	emiteNum: EventEmitter<number> = new EventEmitter<number>();	

	flag : boolean= false;
	valor: string = null;
	numerico: number=0;

	constructor() {}

	emitirString(){	
		this.emite.emit(this.valor);
		console.info(`emite string valor: ${this.valor}`);
	}

	emitirNum(){
		this.emiteNum.emit(this.numerico);
		console.info(`emite num valor: ${this.numerico}`);

	}

	emitirFlag(){
		this.emiteFlag.emit(this.flag);
		console.info(`emite string flag: ${this.flag}`);

	}



}

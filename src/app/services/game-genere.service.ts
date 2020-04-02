import { Injectable } from '@angular/core';
import { Genere } from '../model/genere-interface';

@Injectable({
  providedIn: 'root'
})
export class GameGenereService {

  
  private genereList: Genere []= [
    {id:0, description:'All'},
    {id:1, description:'Sparatutto'},
    {id:2, description:'Strategia'}
  ];
  

  constructor() { }

  getGameGenereList():Genere[]{
    return this.genereList;
  };

}

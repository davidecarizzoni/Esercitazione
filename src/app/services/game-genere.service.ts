import { Injectable } from '@angular/core';
import { Genere } from '../model/genere-interface';

@Injectable({
  providedIn: 'root'
})
export class GameGenereService {

  
  private genereList: Genere []= [
    {id:1, description:'sparatutto'},
    {id:2, description:'strategia'}
  ];
  

  constructor() { }

  getGameGenereList():Genere[]{
    return this.genereList;
  };

}

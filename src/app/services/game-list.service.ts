import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';

@Injectable({
  providedIn: 'root'
})

export class GameListService {

  dateMinecraft: Date = new Date('2009-05-17');
  dateFortnite: Date = new Date('2017-09-21');
  dateOverwatch: Date = new Date('2015-10-27');

  private gameListStored: GameItem [] = [
    {
      id: 1, 
      nome:'Minecraft', 
      description:'Minecraft è un videogioco di tipo sandbox originariamente creato e sviluppato dal programmatore svedese Markus Alexej Persson dal 2009 al 2011 e successivamente sviluppato e pubblicato dalla Mojang e dal capo sviluppatore Jens Bergensten dal 2011 a oggi.', 
      genere:1, 
      rating:2, 
      prezzo:50, 
      annoUscita: this.dateMinecraft
    },
    {
      id: 2, 
      nome:'Fortnite', 
      description:'Fortnite è un videogioco del 2017 sviluppato da Epic Games e People Can Fly. Il videogioco presenta tre modalità distinte che condividono lo stesso motore grafico: Salva il mondo, Modalità Creativa e Battaglia reale.', 
      genere:2, 
      rating:3, 
      prezzo:40, 
      annoUscita: this.dateFortnite
    },
    {
      id: 3, 
      nome:'Overwatch', 
      description:'Overwatch è un videogioco sparatutto in prima persona a squadre sviluppato da Blizzard Entertainment e pubblicato da Activision Blizzard uscito il 24 maggio 2016 per PlayStation 4, Nintendo Switch, Xbox One e Microsoft Windows.', 
      genere:1, 
      rating:4, 
      prezzo:30, 
      annoUscita: this.dateOverwatch
    }

  ];


  constructor() { }

  
  //ritorna la lista, attenzione a non modificarla perchè cosi modifico tutta li lista
  getGameList():GameItem[]{
    return this.gameListStored;
  };


  //ritorna un gioco
  getGameItem(id: number): GameItem { 
    return this.gameListStored.find(item =>{
      return item.id == id;
    });
  }

  getGameFilterByGenere(genere:number) : GameItem[] {
    return this.gameListStored.filter(item =>{
      return item.genere === genere;
    });
  }

  modifica(game: GameItem){
    this.gameListStored.forEach(element => {
      if(element.id === game.id){
        //funzione per modificare
        element.nome = game.nome;
        element.genere = game.genere;
        element.description = game.description;
        element.prezzo = game.prezzo;
        element.rating = game.rating;
      //aggiorna i singoli valori passato un elemento
      }
    });
  }


}

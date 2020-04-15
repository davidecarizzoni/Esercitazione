import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { Router } from '@angular/router';
import { Genere } from 'src/app/model/genere-interface';
import { GameGenereService } from 'src/app/services/game-genere.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  gameList: GameItem [] = []; 
  genereList: Genere [] = [];

  constructor(private _gameService : GameListService, private router:Router, private gameGenereList : GameGenereService, private httpService:HttpService){
    this.gameList = this._gameService.getGameList();
  }

  //USATO PER RITORNARE LA LISTA CON I GIOCHI PRESENTI NEL SERVICI

  // ngOnInit(): void {
  //   this.gameList = this._gameService.getGameList();
  //   this.genereList = this.gameGenereList.getGameGenereList();
  // }

  // filtra (genere:number) {
  //   Number(genere) === 0 ? this.gameList = this._gameService.getGameList() : this.gameList = this._gameService.getGameFilterByGenere(Number(genere));
  // }

  filtra (genere:number) {
    Number(genere) === 0 ? this.retrieveGames() : this.retrieveGamesFilterd(Number(genere));
  }


  retrieveGames(){
    this.httpService.getGames().subscribe(reponse => {
      this.gameList = reponse;
    }, err => {
      console.log('error');
    });
  }

  retrieveGamesFilterd(genere:number){
    this.httpService.getFilteredGenere(genere).subscribe(reponse => {
      this.gameList = reponse;
    }, err => {
      console.log('error');
    });
  }

  // FARE IL METODO CHE RITORNA I GENERI DELLA LISTA

  // USATO PER RITORNARE I GIOCHI CON LE RICHIESTE HTTP E I GIOCHI SU UN FILE JSON
  ngOnInit(): void {
    this.genereList = this.gameGenereList.getGameGenereList();
    this.retrieveGames();
  }

  

}

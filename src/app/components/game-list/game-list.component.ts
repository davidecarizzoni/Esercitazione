import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { Router } from '@angular/router';
import { Genere } from 'src/app/model/genere-interface';
import { GameGenereService } from 'src/app/services/game-genere.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  gameList: GameItem [] = []; 
  genereList: Genere [] = [];

  constructor(private _gameService : GameListService, private router:Router, private gameGenereList : GameGenereService){
    this.gameList = this._gameService.getGameList();
  }

  
  ngOnInit(): void {
    this.gameList = this._gameService.getGameList();
    this.genereList = this.gameGenereList.getGameGenereList();
  }

}

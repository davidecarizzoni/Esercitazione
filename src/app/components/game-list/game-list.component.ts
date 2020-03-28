import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  gameList: GameItem [] = []; 

  constructor(private _gameService : GameListService){}


  ngOnInit(): void {
    this.gameList = this._gameService.getGameList();
  }

}

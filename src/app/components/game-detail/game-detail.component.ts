import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() //
  gameId:number;
 
  game:GameItem;


  constructor(private gameListService: GameListService) { }

  ngOnInit(): void {
    //utilizzo metodo creato nel service,dato in ingresso l'id, ci ritorna il gioco da visualizzare. 
    this.game = this.gameListService.getGameItem(this.gameId);
  }

}

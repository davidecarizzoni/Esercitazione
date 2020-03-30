import { Component, OnInit} from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  game:GameItem;

  constructor(private gameListService: GameListService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params)
      this.game = this.gameListService.getGameItem(Number(params.get('id'))); //cast a number
    });
  }


}

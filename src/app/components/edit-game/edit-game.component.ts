import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/model/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  game: GameItem;
  gameForm: FormGroup;
  attivato: boolean;
  gameList: GameItem[];
  
  //istanzio il form
  constructor(private gameListService: GameListService, private fb: FormBuilder) { 
    this.gameForm = this.fb.group({
      id: '',
      nome: '', 
      description: '',
      genere: '',
      rating: '',
      prezzo: '',
      annoUscita: '',
    });
  }

  ngOnInit(): void {
    this.gameList = this.gameListService.getGameList();
    this.attivato = false;
  }


  showForm(id : number){
    this.game = this.gameListService.getGameItem(id);
    this.modifica(this.game);
    this.attivato = true;
  }

  //riempie la form
  modifica(game:GameItem){
    this.gameForm = this.fb.group({
      id: game.id,
      nome: game.nome,
      description: game.description, 
      genere: game.genere,
      rating: game.rating, 
      prezzo: game.prezzo,
      annoUscita: game.annoUscita
    });
  }

  //quando fa il submit invia e aggiorna i valori
  onSubmit(form){
    this.gameListService.modifica(form);
    this.gameList = this.gameListService.getGameList();
    window.alert('Modifica effettuata');

    this.attivato = false;
  }

}

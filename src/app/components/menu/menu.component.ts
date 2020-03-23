import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Component({
  selector: 'app-menu',  //poi lo richiamo nell'app menu, per poterlo utilizzare
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

@Output()
//oggetto di tipo observable, eventi su cui poter pubblicare valori su determinati eventi
selectMenuItem: EventEmitter<number> = new EventEmitter<number>();

  //dichiarazione variabile pubblica di questo 
  menuList: MenuItem[] = [
    {id:1,description:'Home',selected:true},
    {id:2,description:'Game List',selected:true},
    {id:3,description:'Edit games',selected:true},
    {id:4,description:'Games details',selected:true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedComponent(id:number){
    for(let menuItem of this.menuList){
      menuItem.selected = id === menuItem.id;
    }
    this.selectMenuItem.emit(id);
  }
}

//FILE ESTERNO PER ROUTING - permette di avere una gerarchia più ordinata, efficiente con molti component
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { NgModule } from '@angular/core';

//dichiarazione della routes, della path dei componenti
//array of Routes object
const appRoutes: Routes = [
    {path: 'home' ,component: HomeComponent},
    {path: 'menu' ,component: MenuComponent},
    {path: 'gameList' ,component: GameListComponent},
    {path: 'gameDetail' ,component: GameDetailComponent},
    {path:'' ,redirectTo: '/home', pathMatch:'full'}
    //ADD PAGE NOT FOUND COMPONENT
  ]

@NgModule({
    imports: [
        //way to create routes module
        RouterModule.forRoot(appRoutes)
        //forRoot: create module that contains all directives
    ],
    exports: [
        RouterModule
    ]
})

export class GameRoutingModule {}
//FILE ESTERNO PER ROUTING - permette di avere una gerarchia più ordinata, efficiente con molti component
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';


//dichiarazione della routes, della path dei componenti
//array of Routes object
const appRoutes: Routes = [
    {path: 'home' ,component: HomeComponent},
    {path: 'edit' ,component: EditGameComponent}, //pathDinamico, deve visualizzare il gioco che si desidera modificarre
    {path: 'list' ,component: GameListComponent}, //visualizza elenco giochi
    {path: 'detail/:id' ,component: GameDetailComponent}, //path: 'gameDetail':path dinamico, devo passare l'id del gioco da visualizzare
    {path:'' ,redirectTo: '/home', pathMatch:'full'},
    {path:'**', component: PageNotFoundComponent},
    //ADD PAGE NOT FOUND COMPONENT
  ]

@NgModule({
    //way to create routes module. forRoot: create module that contains all directives. Configurazione della RouteModule
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class GameRoutingModule {}
//FILE ESTERNO PER ROUTING - permette di avere una gerarchia più ordinata, efficiente con molti component
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MyRouteGuardService } from './services/my-route-guard.service';
import { EditRouteGuardService } from './services/edit-route-guard.service';


//dichiarazione della routes, della path dei componenti
//array of Routes object
const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home' ,component: HomeComponent, canActivate: [MyRouteGuardService] },
    {path: 'edit' ,component: EditGameComponent, canActivate: [MyRouteGuardService, EditRouteGuardService] }, //pathDinamico, deve visualizzare il gioco che si desidera modificarre
    {path: 'list' ,component: GameListComponent, canActivate: [MyRouteGuardService] }, //visualizza elenco giochi
    {path: 'detail/:id' ,component: GameDetailComponent, canActivate: [MyRouteGuardService] }, //path: 'gameDetail':path dinamico, devo passare l'id del gioco da visualizzare
    {path:'' ,redirectTo: '/login', pathMatch:'full'},
    {path:'**', component: PageNotFoundComponent,},
    //ADD PAGE NOT FOUND COMPONENT
  ]

@NgModule({
    //way to create routes module. forRoot: create module that contains all directives. Configurazione della RouteModule
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class GameRoutingModule {}
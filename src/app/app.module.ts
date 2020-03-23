import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

//dichiarazione della routes, della path dei componenti
const appRoutes: Routes = [
  {path: 'home' ,component: HomeComponent},
  {path: 'menu' ,component: MenuComponent},
  {path: 'gameList' ,component: GameListComponent},
  {path: 'gameDetail' ,component: GameDetailComponent},
  {path:'' ,redirectTo: '/home', pathMatch:'full'}
  //ADD PAGE NOT FOUND COMPONENT
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    MenuComponent,
    GameDetailComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

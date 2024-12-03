import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectLevelComponent } from './select-level/select-level.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '', // Root path
    component: HomeComponent, // App starts with HomeComponent
  },
  {
    path: 'select-level',
    component: SelectLevelComponent, // Component for selecting levels
  },
  {
    path: 'game',
    component: GameComponent, // Component for the game view
  },
  {
    path: '**', // Wildcard route for handling 404 (optional)
    redirectTo: '', // Redirect to home for unmatched paths
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

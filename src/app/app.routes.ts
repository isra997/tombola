import { Routes } from '@angular/router';
import { TombolaComponent } from './tombola/tombola.component';

export const routes: Routes = [
    {
        path: 'games',
        loadChildren:()=> import ('./games/games.module').then( m=>m.GamesModule),
      },
      { 
        path: '', 
        redirectTo: '/games/config', // Redirige a '/games/config' cuando la URL es el raíz
        pathMatch: 'full' // Solo redirige si la URL es exactamente el raíz
      },
      { 
        path: '**', 
        redirectTo: '/games/config' // Redirige a '/games/config' cuando ninguna otra ruta coincide
      }
];

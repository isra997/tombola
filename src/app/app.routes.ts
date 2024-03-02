import { Routes } from '@angular/router';

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

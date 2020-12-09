import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pags/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pags/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pags/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pags/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pags/noticias/noticias.module').then( m => m.NoticiasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

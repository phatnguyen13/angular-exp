import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'form',
    loadComponent: () => import('./components/form-ui/form-ui').then(m=>m.FormUi)
  },
  {
    path: 'tab',
    loadComponent: () => import('./tab-group-page/tab-group-page.component').then(m => m.TabGroupPage)
  },
  {
    path: 'rxplay',
    loadComponent: () => import('./rxplay/rxplay').then(m => m.Rxplay)
  },
  {
    path: 'changeplay',
    loadComponent: () => import('./change-detection-play/change-detection-play').then(m => m.ChangeDetectionPlay)
  },

  {
    path: 'dependency-play',
    loadComponent: () => import('./dependency-play/dependency-play').then(m=> m.DependencyPlay)
  },

  {
    path:'community-play',
    loadComponent: () => import('./communication-play/communication-play').then(m => m.CommunicationPlay)
  },
  {
    path:'store-play',
    loadComponent: () => import('./communication-play/store-simulate/store-simulate').then(m => m.StoreSimulate)
  },
  {
    path:'cart-play',
    loadComponent: () => import('./communication-play/store-simulate/cart-component/cart-component').then(m=> m.CartComponent)
  },
  {
    path:'news-play',
    loadComponent: () => import('./performance-play/news/news').then(m => m.News)
  },
  {
    path:'weather',
    loadComponent: () => import('./performance-play/weathers/weathers').then(m => m.Weathers)
  }

];

import { Routes } from '@angular/router';
import {FormUi} from './components/form-ui/form-ui';
import {TabGroupPage} from './tab-group-page/tab-group-page.component';
import {Rxplay} from './rxplay/rxplay';
import {ChangeDetectionPlay} from './change-detection-play/change-detection-play';
import {DependencyPlay} from './dependency-play/dependency-play';
import {CommunicationPlay} from './communication-play/communication-play';
import {StoreSimulate} from './communication-play/store-simulate/store-simulate';
import {CartComponent} from './communication-play/store-simulate/cart-component/cart-component';
import {News} from './performance-play/news/news';
import {Weathers} from './performance-play/weathers/weathers';

export const routes: Routes = [
  {
    path: 'form',
    component: FormUi
  },
  {
    path: 'tab',
    component: TabGroupPage
  },
  {
    path: 'rxplay',
    component: Rxplay
  },
  {
    path: 'changeplay',
    component: ChangeDetectionPlay
  },

  {
    path: 'dependency-play',
    component: DependencyPlay
  },

  {
    path:'community-play',
    component: CommunicationPlay
  },
  {
    path:'store-play',
    component: StoreSimulate
  },
  {
    path:'cart-play',
    component: CartComponent
  },
  {
    path:'news-play',
    component: News
  },
  {
    path:'weather',
    component: Weathers
  }

];

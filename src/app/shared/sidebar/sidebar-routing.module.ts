import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiserComponent } from 'src/app/module/advertiser/component/advertiser.component';
import { ContentComponent } from 'src/app/module/content/component/content.component';
import { DigitalPublisherComponent } from 'src/app/module/digital-publisher/component/digital-publisher.component';
import { ProductComponent } from 'src/app/module/product/component/product.component';
import { SidebarComponent } from './component/sidebar.component';

const routes: Routes = [
  {
    path: '', 
    component: SidebarComponent,
    children:[
      {
        path: '',
        component: ProductComponent,
        data:{
          title:"ProductComponent"
        }
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'digital-publishers',
        component: DigitalPublisherComponent
      },
      {
        path: 'advertisers',
        component: AdvertiserComponent
      },
      {
        path: 'content',
        component: ContentComponent
      },
      {
        path: 'charts',
        loadChildren: () => import('../../module/chart/chart.module').then(m => m.ChartModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }

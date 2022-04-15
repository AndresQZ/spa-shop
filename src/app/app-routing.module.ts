import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NiceViewComponent } from './nice-view/nice-view.component';

const routes: Routes = [
  { path: 'shop', component: AngularComponent },
  { path : 'shop/nice-view', component: NiceViewComponent},
   { path: '**', redirectTo: 'shop' ,pathMatch: 'full'}
 // { path: '**', redirectTo: 'shop' ,component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppRoutingModule { }

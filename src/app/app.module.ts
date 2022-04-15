import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NiceViewComponent } from './nice-view/nice-view.component';



@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    EmptyRouteComponent,
    NiceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

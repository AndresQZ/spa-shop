import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppProps, CustomProps } from 'single-spa';
import {
  SingleSpaProps,
} from 'src/single-spa/single-spa-props';
import { SandBoxComponent } from './sandbox/SandBoxComponent';

import { sendData, sharedData$} from "@web-taxco/spa-shared-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spa-shop';
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  subscriptionSharedData: Subscription;


  constructor(private sandbox: SandBoxComponent) {}

  ngOnInit(): void {

    this.subscriptionSharedData = sharedData$.subscribe((data: any) => {
      console.log("inside sharedDataSubcription , spa-shop", data);
    });
  }

  ngOnDestroy(): void {
   this.subscriptionSharedData.unsubscribe();
  }


  public navigate() {
    console.log("navigate, shared data information");
    sendData('This is fascinating', `${this.singleSpaProps?.name}`, 'React APP');
    this.sandbox.goToExternalUrl('/admin');
  }
}

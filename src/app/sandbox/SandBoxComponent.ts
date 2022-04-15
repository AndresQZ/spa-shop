import {  Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { CustomProps } from 'single-spa';
import {
  singleSpaPropsSubject,
  SingleSpaProps,
} from 'src/single-spa/single-spa-props';
import {Location} from '@angular/common';



@Injectable({providedIn : 'root'})
export class SandBoxComponent implements OnInit {


     singleSpaProps: SingleSpaProps; 
     sharedData : ReplaySubject<any>

    constructor(public router: Router, private location: Location) {}

    ngOnInit(): void { }

    public goToPath ( path: string) {
      console.log("path -> ", path )
      this.router.navigate([path]);
    }


    public goToExternalUrl (path: string) {
      console.log("goToExternalUrl -> ", path )
      this.location.go(path);;
    }

  
}  
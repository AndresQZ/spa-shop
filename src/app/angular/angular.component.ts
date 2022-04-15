import { Component, OnInit } from '@angular/core';
import { SandBoxComponent } from '../sandbox/SandBoxComponent';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

   private niceViewAngular : string= 'shop/nice-view';

  constructor( private sandbox: SandBoxComponent) { }

  ngOnInit(): void {
  }

  navigate() {
    this.sandbox.goToPath(this.niceViewAngular);
  }

}

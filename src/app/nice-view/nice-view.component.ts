import { Component, OnInit } from '@angular/core';
import { SandBoxComponent } from '../sandbox/SandBoxComponent';

@Component({
  selector: 'app-nice-view',
  templateUrl: './nice-view.component.html',
  styleUrls: ['./nice-view.component.css']
})
export class NiceViewComponent implements OnInit {
  private shopView : string= 'shop';

  constructor( private sandbox: SandBoxComponent) { }

  ngOnInit(): void {
  }

  public navigate() {
   this.sandbox.goToPath(this.shopView);
  }

}

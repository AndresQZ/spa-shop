import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-route',
  template: '',
})
export class EmptyRouteComponent implements OnInit{
  ngOnInit(): void {
   console.log('EmptyRouteComponent loaded')
  }

}

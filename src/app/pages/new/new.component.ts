import { Component } from '@angular/core';

@Component({
  selector: 'new',
  template: `<strong>My page content here; Rashim is confused</strong>
 
  <a routerLink="/pages/appsum">appsum</a>
  <a routerLink="/pages/new">new</a>

  
  `,
})
export class NewComponent {
  constructor() {}
}
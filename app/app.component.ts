import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 i18n>Hello {{name}}</h1>
  <app-cool></app-cool>`,
})
export class AppComponent  { name = 'Angular'; }

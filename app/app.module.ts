import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoolComponent } from 'angular2-component-module/lib/cool.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoolComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

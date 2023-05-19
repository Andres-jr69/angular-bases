import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CouterModule } from './counter/couter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CouterModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

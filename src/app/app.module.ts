import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CouterModule } from './counter/couter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CouterModule,
    HeroesModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

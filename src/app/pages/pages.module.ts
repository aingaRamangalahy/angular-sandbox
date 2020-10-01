import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeModule,

    // router
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }

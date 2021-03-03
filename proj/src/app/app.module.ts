import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourCardComponent } from './four-card/four-card.component';
import { PingComingSoonComponent } from './ping-coming-soon/ping-coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    FourCardComponent,
    PingComingSoonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

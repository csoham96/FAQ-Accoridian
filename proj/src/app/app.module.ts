import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourCardComponent } from './four-card/four-card.component';
import {PingComingSoonComponent} from './ping-coming-soon/ping-coming-soon.component';
import { FaqComponent } from './faq/faq.component'
const appRoutes :Routes=[
  {path: 'four-card',component: FourCardComponent},
  {path: 'ping-coming-soon',component:PingComingSoonComponent},
  {path: '',component:FaqComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FourCardComponent,
    PingComingSoonComponent,
    PingComingSoonComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

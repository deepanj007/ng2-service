import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from 'ng2-progressbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {AddServiceService} from './services/add-service.service';
import { HighlightDirective } from './highlight.directive';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgProgressModule
  ],
  providers: [AddServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

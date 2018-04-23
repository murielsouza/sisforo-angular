import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSrcModule} from 'ng-src';


import { AppComponent } from './app.component';
import { BemComponent } from './bem/bem.component';


@NgModule({
  declarations: [
    AppComponent,
    BemComponent
  ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        NgSrcModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

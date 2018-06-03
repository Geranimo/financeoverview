import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TransactionsService } from './transactions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  exports: [
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { TransactionsService } from "./transactions.service";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from './filterPipe';
import { AppRoutingModule } from './/app-routing.module';
import { TaggingComponent } from './tagging/tagging.component';
import { OverviewComponent } from './overview/overview.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TaggingComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }

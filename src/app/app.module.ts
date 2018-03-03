import { MarketCapService } from './services/marketcap.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencytableComponent } from './currencytable/currencytable.component';
import { CurrencyDataService } from './services/currencydata.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencytableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    MarketCapService,
    CurrencyDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

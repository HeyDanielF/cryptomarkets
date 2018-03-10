import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MarketCapService } from './services/marketcap.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencytableComponent } from './currencytable/currencytable.component';
import { CurrencyDataService } from './services/currencydata.service';
import { CurrencyComponent } from './currency/currency.component';
import { MarketsComponent } from './currency/markets/markets.component';
import { NewsComponent } from './currency/news/news.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencytableComponent,
    CurrencyComponent,
    MarketsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    MarketCapService,
    CurrencyDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

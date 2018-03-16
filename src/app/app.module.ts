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
import { ConvertDatePipe } from './pipes/convertdate.pipe';
import { HistoricalComponent } from './currency/historical/historical.component';
import { ChartsComponent } from './currency/charts/charts.component';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { SocialComponent } from './currency/social/social.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencytableComponent,
    CurrencyComponent,
    MarketsComponent,
    NewsComponent,
    ConvertDatePipe,
    HistoricalComponent,
    ChartsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    MarketCapService,
    CurrencyDataService,
    ConvertDatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

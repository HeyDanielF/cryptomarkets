import { News } from './models/newsdata.interface';
import { IExchanges } from './models/exchangedata.model';
import { ICurrencyData } from './models/currencydata.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';

const COINMARKET_API = `https://api.coinmarketcap.com/v1/ticker/`;


@Injectable()
export class CurrencyDataService {
  constructor(private http:HttpClient) {}


  getCurrencyData(){
    return this.http.get<ICurrencyData[]>(COINMARKET_API);
  }

  getCurrencyMarkets(symbol:string){
    const MARKETS_API = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${symbol}&tsym=USD`;

    return this.http.get<IExchanges[]>(MARKETS_API).map( (data) => data["Data"]["Exchanges"]);
  }

  getCurrencyNews(symbol:string){
    const NEWS_API = `https://min-api.cryptocompare.com/data/news/?categories=${symbol}`;
    return this.http.get<News[]>(NEWS_API);

  }



}

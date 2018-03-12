import { HistoricalData } from './models/historicaldata.model';
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
    return this.http.get<News[]>(NEWS_API)
                     .map(data => data.slice(0,15));

  }

  getHistoricalData(symbol: string){
    const limit = 20;
    const HISTORICALDATA_API = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=${limit}`

    return this.http.get<HistoricalData>(HISTORICALDATA_API)
                    .map((data:HistoricalData) => {


                      return {
                        timeTo: data["TimeTo"],
                        timeFrom: data["TimeFrom"],
                        data: data["Data"]
                      }
                    })

  }



}

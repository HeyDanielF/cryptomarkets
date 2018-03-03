import { MarketCap } from './models/marketcap.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import 'rxjs/add/operator/mergeMap';


const MARKETCAP_API = `https://chasing-coins.com/api/v1/std/marketcap`;

@Injectable()
export class MarketCapService {
  constructor(
    private http:HttpClient
  ) {}

  getMarketCap():Observable<MarketCap>{
    return this.http
               .get<MarketCap>(MARKETCAP_API)
               .map(data =>{
                return {
                  marketcap: data["market_cap"],
                  change:{ day:data.change["24h"], hour: data.change["1h"], week: data.change["7d"]},
                  dayVolume:data["24h_volume"]
                }
               })
  }

}

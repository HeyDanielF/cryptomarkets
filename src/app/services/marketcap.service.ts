import { MarketCap } from './models/marketcap.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

const MARKETCAP_API = `https://chasing-coins.com/api/v1/std/marketcap`;

@Injectable()
export class MarketCapService {
  constructor(
    private http:HttpClient
  ) {}

  getMarketCap(){
    return this.http
               .get(MARKETCAP_API)
               .map( (data:MarketCap) => {
                let result = data["market_cap"]
               })



  }

}

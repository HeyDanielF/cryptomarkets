import { MatTableDataSource } from '@angular/material';
import { IExchanges } from './../../services/models/exchangedata.model';
import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  @Input() symbol: string;

  displayedColumns = ["Exchange", "Volume","Price","High (24h)","Low (24h)","Change (24h)"]



  dataSource = new MatTableDataSource<IExchanges>();

  constructor(
    private dataService:CurrencyDataService
  ) { }

  ngOnInit() {
   this.getExchangeData();
  }

  getExchangeData(){
    this.dataService
    .getCurrencyMarkets(this.symbol)
    .subscribe(data => {
      this.dataSource.data = data })
  }




}

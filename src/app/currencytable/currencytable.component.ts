import { CurrencyData } from './../services/models/currencydata.interface';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-currencytable',
  templateUrl: './currencytable.component.html',
  styleUrls: ['./currencytable.component.css']
})
export class CurrencytableComponent implements OnInit,AfterViewInit {

  displayedColumns = ["Rank","Name","Market Cap","Price", "Volume (24)","Circulating Supply", "Change (24)"]
  dataSource:MatTableDataSource<CurrencyData>
  tempData:CurrencyData[] = [{rank: 1,name:"Bitcon",marketCap:100,price:100,volume: 100,circulatingSupply:100, change: 100}]   //   = ["1","Bitcon","100","100", "100","100", "100"]

  constructor() {
    this.dataSource = new MatTableDataSource(this.tempData);

   }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }

}

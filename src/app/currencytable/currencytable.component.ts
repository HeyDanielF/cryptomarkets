import { CurrencyDataService } from './../services/currencydata.service';
import { CurrencyData, ICurrencyData } from './../services/models/currencydata.interface';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-currencytable',
  templateUrl: './currencytable.component.html',
  styleUrls: ['./currencytable.component.css']
})
export class CurrencytableComponent implements OnInit,AfterViewInit {

  displayedColumns = ["Rank","Name","Market Cap","Price", "Volume (24)","Circulating Supply", "Change (24)"]
  dataSource:MatTableDataSource<ICurrencyData>
  tableData:ICurrencyData[] = [];//   = ["1","Bitcon","100","100", "100","100", "100"]

  currencyData:ICurrencyData[]



  constructor(private dataService:CurrencyDataService) { }

  ngOnInit() {

    this.getTableData();

  }

   getTableData(){
    this.dataService.getCurrencyData().subscribe( (data) =>{
      // this.tableData = data;
      // console.log("table data 2" ,this.tableData);
      this.dataSource = new MatTableDataSource(data);
    })

   };

  ngAfterViewInit(){

  }

}

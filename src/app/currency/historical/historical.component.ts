import { HistoricalData, TimePeriodData } from './../../services/models/historicaldata.model';
import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit,AfterViewInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() symbol: string;

  displayedColumns = ["Date","Open","High","Low","Close"];
  dataSource = new MatTableDataSource<TimePeriodData>();

  constructor(private currencyService:CurrencyDataService) { }

  ngOnInit() {
    this.getHistoricalTableData();
  }


  getHistoricalTableData(){
    this.currencyService
    .getHistoricalData(this.symbol)
    .subscribe((data:HistoricalData) => {
      this.dataSource.data = data.data;

    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

}

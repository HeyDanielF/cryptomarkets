import { CurrencyDataService } from './../services/currencydata.service';
import { CurrencyData, ICurrencyData } from './../services/models/currencydata.interface';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-currencytable',
  templateUrl: './currencytable.component.html',
  styleUrls: ['./currencytable.component.css']
})
export class CurrencytableComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;





  displayedColumns = ["Rank","Name","Market Cap","Price", "Volume (24h)","Circulating Supply", "Change (24h)", "Change (7d)","Change (1h)"]
  dataSource= new MatTableDataSource<ICurrencyData>();
  tableData:ICurrencyData[] = [];
  currencyData:ICurrencyData[]


  constructor(private dataService:CurrencyDataService) { }

  ngOnInit() {

    this.getTableData();
  }

   getTableData(){
    this.dataService.getCurrencyData().subscribe( (data:ICurrencyData[]) =>{
      this.dataSource.data = data;
      console.log(data[0]);
    })
   };

   applyFilter(filterValue:String){
     this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
   }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator

  }

}

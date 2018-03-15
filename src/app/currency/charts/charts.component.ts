import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { MatSelectChange } from '@angular/material';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  historicalLow: number[] = [];
  historicalHigh: number[] = [];
  historicalDates: string[] = [];
  timeFrame = { timeFrom:null , timeTo:null };
  isLoading = true;
  timeSelected = 14;

  chartData: Array<any> = [
    { data: [] },
    { data: [] },

  ];

  @ViewChild(BaseChartDirective) chart:BaseChartDirective;

  chartLabels =  [];

  @Input() symbol: string;

  @Output() selectionChange: EventEmitter<MatSelectChange>;

  chartOptions = {
    responsive: true
  };



  onChartClick(event) {
    console.log(event);
  }




  constructor(
    private currencyService:CurrencyDataService
  ) { }

  ngOnInit() {
    this.getHistoricalData();
  }

  ngTest($event: EventEmitter<MatSelectChange>){
    this.isLoading = true;
    this.getHistoricalData($event.toString());

  }

  getHistoricalData(time:string = null) {
    this.currencyService.getHistoricalData(this.symbol,this.timeSelected)
        .subscribe(data => {


          for(const index of data.data) {
            this.historicalHigh.push(index.high);
            this.historicalLow.push(index.low);

            // this.historicalDates.push(new Date(index.time * 1000).toLocaleDateString());
            this.chartLabels.push(new Date(index.time * 1000).toLocaleDateString());
          }

          this.chartData = [
            { data: this.historicalHigh, label: 'High' },
            { data: this.historicalLow , label: 'Low'},
          ];

          console.log(data);
          this.timeFrame = {
            timeFrom: new Date(data.timeFrom * 1000).toLocaleDateString(),
            timeTo: new Date(data.timeTo * 1000).toLocaleDateString()
          }


          this.isLoading = false;

          // console.log(this.timeFrame)

        });

  }





}

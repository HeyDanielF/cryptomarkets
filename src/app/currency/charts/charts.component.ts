import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  historicalLow: number[] = [];
  historicalHigh: number[] = [];
  historicalDates: string[] = [];

  chartData: Array<any> = [
    { data: [] },
    { data: [] },

  ];

  chartLabels =  [];

  @Input() symbol: string;

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

  getHistoricalData() {
    this.currencyService.getHistoricalData(this.symbol)
        .subscribe(data => {
          this.chartLabels.length = 0;

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

          console.log(data.data);

        });

  }





}

import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() symbol: string;

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  onChartClick(event) {
    console.log(event);
  }

  chartLabels = ['January', 'February', 'Mars', 'April'];

  historicalLow:number[] = [];
  historicalHigh:number[] = [];
  historicalDates:string[] = [];

  constructor(
    private currencyService:CurrencyDataService
  ) { }

  ngOnInit() {
    this.getHistoricalData();
  }

  getHistoricalData(){
    this.currencyService.getHistoricalData(this.symbol)
        .subscribe(data =>{

          for(let index of data.data){
            this.historicalHigh.push(index.high);
            this.historicalLow.push(index.low);
            this.historicalDates.push(new Date(index.time * 1000).toLocaleDateString());
          }

          console.log(this.historicalDates);

        });

  }

  formatDate(date:Date){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.toLocaleDateString('en-us', options)

    return date
  }



}

import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  @Input() symbol: string;

  displayedColumns = ["Date","Open","High","Low","Close","Volume"];

  constructor(private currencyService:CurrencyDataService) { }

  ngOnInit() {
    this.currencyService.getHistoricalData(this.symbol).subscribe(data =>console.log(data))
  }

}

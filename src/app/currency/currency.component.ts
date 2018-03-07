import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  symbol:string;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => this.symbol = params.get("symbol"))

  //  console.log(this.symbol)
  }


}

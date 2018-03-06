import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.paramMap.subscribe(params => console.log(params.get("symbol")))
  }

}

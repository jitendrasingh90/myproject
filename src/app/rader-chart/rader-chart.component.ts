import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rader-chart',
  templateUrl: './rader-chart.component.html',
  styleUrls: ['./rader-chart.component.css']
})
export class RaderChartComponent implements OnInit {

  public randarChartlabels=['Q1', 'Q2', 'Q3','Q4'];
  public randarChartData=[
    {data:[120, 90,60,30],labes:'2017'},
    {data:[90,150,70,60],labes:'2018'}
    ];
  public randarChartType='radar';
  constructor() { }

  ngOnInit() {
  }

}

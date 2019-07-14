import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

 
  public barChartOption ={
    scaleShowVerticalLines:false,
    responsive:true,
    scales: {
      xAxes: [{
          barPercentage: 0.8,
          barThickness: 6,
          maxBarThickness: 6,
          minBarLength: 2,
          gridLines: {
              offsetGridLines: true
          },

      }],
      yAxes: [{
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100
        }
    }]
 
  },
  layout: {
    padding: {
        left: 100,
        right: 0,
        top: 0,
        bottom: 0
    },
    legend: {
      display: true,
      labels: {
          fontColor: 'rgb(255, 99, 132)'
      }
  }
}

  
  };

  public barChartLabels =['2006','2007','2008','2009','2010','2012'];
  public barChartType ='bar';
  public barChartLegend = true;
  public barChartData =[
    {data: [65, 61,81,78,90,23,55], label:'Serias A' },
    {data: [28, 45,23,89,45,89,43], label:'Serias B' }
  ]
  constructor() { }

  ngOnInit() {
  
}
}
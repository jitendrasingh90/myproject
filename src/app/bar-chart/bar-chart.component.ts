import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { BarChartService } from './bar-chart.service';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public lebels:any[]=[];
  public  baradata:any[]=[];
  public barmass:any[]=[];
  constructor(private barchart: BarChartService) { }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartLabels: Label[]=this.lebels;
  public barChartData: ChartDataSets[] = [
    { data: this.baradata, label: 'Series A' },
    { data: this.barmass, label: 'Series B' }
  ];

  ngOnInit() {

    this.barchart.getbarChart().subscribe(
      data=>{
        for(let i=0;i<10;i++)
        {
        this.lebels.push(data['results'][i]['name']);

       this.baradata.push(data['results'][i]['height']);
       this.barmass.push(data['results'][i]['mass']);

        }
        console.log(this.barChartLabels);
      }
      
        
    )

  }

}
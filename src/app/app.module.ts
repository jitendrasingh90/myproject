import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RaderChartComponent } from './rader-chart/rader-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BarChartService } from './bar-chart/bar-chart.service';
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RaderChartComponent,
    PieChartComponent,
    DashboardComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [BarChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

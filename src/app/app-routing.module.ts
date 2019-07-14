import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RaderChartComponent } from './rader-chart/rader-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {path:'bar-chart', component:LineChartComponent},
  {path:'doughnut-chart', component:DoughnutChartComponent},
  {path:'rader-chart', component:RaderChartComponent},
  {path:'pie-chart', component:PieChartComponent},
  {path:'**', component:LineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

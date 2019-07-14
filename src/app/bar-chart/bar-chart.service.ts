import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData } from './ChartData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor(private http:HttpClient) { }

  getbarChart(){
 return this.http.get("https://swapi.co/api/people/")
  }
  
  
}

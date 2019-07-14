import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
postdata={
  name:'jeet',
  salary:123,
  age:23,
  id:719
}
url='https://api.myjson.com/bins/1gb9tf';
constructor(private http:HttpClient) {
  this.http.get(this.url).toPromise().then(data=>data)

 }


  ngOnInit() {

  }

}
import { Component, OnInit } from '@angular/core';
import { CourbeService } from '../courbe/courbe.service';
import { Data } from '../Model/data';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  datas:Data[]
  constructor(private _courbe:CourbeService) { }

  ngOnInit() {
    this._courbe.dailyForecast().subscribe(res => {
      this.datas = res;
  });

 }
}

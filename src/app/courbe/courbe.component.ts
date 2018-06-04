import { Component, OnInit } from '@angular/core';
import {Chart}                from 'chart.js';
import { CourbeService } from './courbe.service';
import { Data } from '../Model/data';




@Component({
  selector: 'app-courbe',
  templateUrl: './courbe.component.html',
  styleUrls: ['./courbe.component.css']
})
export class CourbeComponent implements OnInit {

  chart = []; // This will hold our chart info
  datas:Data[] ;
  constructor(private _courbe: CourbeService) { 
    //this.datas = new Data();
  }

  ngOnInit() {
    this._courbe.dailyForecast().subscribe(res => {
        this.datas = res;
        console.log(this.datas);
   
          let temp_max = [];
        let temp_min = [];
        let alldates =[]; //[1,2,3,4,5,6,7,8,9,10,11,12] //new Date("2018-05-31T09:57:13.740Z"); //this.datas.date;
        this.datas.forEach((item,index)=>{
          alldates.push(index);
        })
        for( let data of this.datas)
        {
          temp_max.push(Number(data.temperature));
          temp_min.push(Number(data.humidite));
        }

    let weatherDates =[];//["Jan","fev","Mars", "Avril","Mai","Juin","Juillet","Aout","Sept","Oct","Nov","Dec"]
    this.datas.forEach((item,index)=>{
      weatherDates.push(index);
    })
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp_max,
            borderColor: "#3cba9f",
            label:"Temperature",
            fill: false
          },
          { 
            data: temp_min,
            borderColor: "#ffcc00",
            label:"Humidite",
            fill: false
          },
        ]
      },
      options: {
        title: {
          display: true,
          text: "Courbe de la température et de l'humidité en fonction du temps(mois)"
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    alldates.forEach((resp) => {
        let jsdate = new Date(resp * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('fr', { year: 'numeric', month: 'short', day: 'numeric' }))
    })
      })
  }

 

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherapi-main',
  templateUrl: './weatherapi-main.component.html',
  styleUrls: ['./weatherapi-main.component.css']
})
export class WeatherapiMainComponent implements OnInit {


  WeatherData:any;
  constructor(){}

  ngOnInit() {

    this.WeatherData={
      main:{},
  //    isDay:true
    };

    this.getWeatherData();
    console.log(this.WeatherData);
  }
getWeatherData(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=pollachi&appid=6de7d4cb990121a70ef2510c44a2f5da')
  .then(response=>response.json())
  .then(data=>{this.setWeatherData(data);})
 // let data  = JSON.parse('{"coord":{"lon":77.0167,"lat":10.6667},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":304.12,"feels_like":303.26,"temp_min":301.73,"temp_max":304.12,"pressure":1011,"humidity":34,"sea_level":1011,"grnd_level":977},"visibility":10000,"wind":{"speed":4.75,"deg":72,"gust":5.54},"clouds":{"all":83},"dt":1675576793,"sys":{"type":2,"id":2040581,"country":"IN","sunrise":1675559689,"sunset":1675601817},"timezone":19800,"id":1259440,"name":"Pollachi","cod":200}')
 // this.setWeatherData(data);
}

setWeatherData(data: any){
  this.WeatherData=data;
  let sunsetTime = new Date(this.WeatherData.sys.sunset *1000);
  this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
  let currentDate= new Date();
  this.WeatherData.isDay=(currentDate.getTime() < sunsetTime.getTime());
  this.WeatherData.temp_celcius=(this.WeatherData.main.temp-273.15).toFixed(0);
  this.WeatherData.temp_min=(this.WeatherData.main.temp_min-273.15).toFixed(0);
  this.WeatherData.temp_max=(this.WeatherData.main.temp_max-273.15).toFixed(0);
  this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like-273.15).toFixed(0);
}

}

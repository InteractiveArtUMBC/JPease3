var x = 180;
var y = 180;
var windspeedx = 9;
var windspeedy = 10;
// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var weather;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=78ea8093425037360149387b0242c48e';
  weather = loadJSON(url);
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(weather);
}
function draw() {
  background(0,20,75);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var weathertemp = weather.main.temp;
  var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
  var cityname = weather.name;
  var windspeed = weather.wind.speed;
  var humidity = weather.main.humidity;
  var rain = weather.weather[0].description;
  //var earthquakeName = earthquakes.features[0].properties.place;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  stroke(255);
  fill(110,30,0);
  ellipse(250,350,windspeed*25,windspeed*75);
  fill(80,185,215);
  ellipse(300,300,windspeed*75,windspeed*25); 
  fill(210,135,0);
  ellipse(350,350,windspeed*25,windspeed*75);
  fill(144,0,219);
  rect(415,0,windspeed*90,windspeed*1000); 
  fill(25,155,180);
  rect(240,0,windspeed*90,windspeed*180); 
  fill(205,187,190);
  rect(240,460,windspeed*90,windspeed*250); 
  fill(205,155,0);
  rect(65,0,windspeed*90,windspeed*1000); 
  fill(205,155,0);
  rect(1088,380,windspeed*75,windspeed*25); 
  fill(103,44,81);
  rect(1068,296,windspeed*25,windspeed*75); 
  fill(240,0,198);
  rect(1088,278,windspeed*75,windspeed*25);
  fill(80,207,157);
  rect(1175,296,windspeed*25,windspeed*75);
  fill(84,90,12);
  ellipse(965,19,windspeed*90,windspeed*1000); 
  fill(18,192,117);
  ellipse(1136,-420,windspeed*90,windspeed*1000);
  fill(193,185,78);
  ellipse(1136,1120,windspeed*90,windspeed*1000);
  fill(205,15,72);
  ellipse(1317,670,windspeed*90,windspeed*1000);
  fill(225,160,4);
  ellipse(717,168,windspeed*122,windspeed*122); 
  fill(2,80,124);
  rect(702,40,windspeed*22,windspeed*185); 
  fill(158,219,82);
  rect(594,154,windspeed*185,windspeed*22);
  fill(255,255,55);
  rect(580,360,windspeed*200,windspeed*200);
  fill(40,265,150);
  rect(650,430,windspeed*100,windspeed*100);
      //distance from center of the screen
      fill(0,0,255);
      ellipse(x,y,windspeed*90,windspeed*60);
      fill(0,225,0);
      rect(x,y,windspeed*22,windspeed*50);
      fill(255,0,0);
      rect(x,y,windspeed*55,windspeed*20);
      stroke(205,15,72);
      line(x,y,1317,350);
      stroke(144,0,219);
      line(x,y,475,350);
      stroke(25,155,180);
      line(x,y,300,115);
      stroke(205,187,190);
      line(x,y,300,580);
      stroke(205,155,0);
      line(x,y,125,350);
      stroke(84,90,12);
      line(x,y,965,350);
      stroke(18,192,117);
      line(x,y,1136,115);
      stroke(193,185,78);
      line(x,y,1136,580);
  
      //bouncing horizontally
      x = x + windspeedx;
  
      if(x > windowWidth || x <0){
          windspeedx = -windspeedx
      }
  
      //bouncing vertically≠
      y = y + windspeedy;
  
      if(y > windowHeight || y <0){
          windspeedy = -windspeedy;
      }
  fill(0)    
  textAlign(CENTER);
  text(weathertemp, 0, height - 310, width, 30);
  textSize(24);
  text(cityname, 0, height - 106, width, 30);
  text(humidity, 0, height - 241, width, 30);
  text(rain, 0, height - 175, width, 30);
}


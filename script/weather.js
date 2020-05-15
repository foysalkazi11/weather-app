class Weather{
  constructor(city){
    this.apiKey='ce3f796ae4dbccef3c33369a28a0892a';
    this.city = city;
  }

  async getWeather(city){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
  
    return responseData;
    
    
  }
  

}


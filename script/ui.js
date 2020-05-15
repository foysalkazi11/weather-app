class Ui {
  constructor(){
    this.location = document.querySelector('#location');
    this.description = document.querySelector('#desc');
    this.string = document.querySelector('.string');
    this.icon = document.querySelector('#icon');
    this.humidity = document.querySelector('#humidity');
    this.temp_max = document.querySelector('#max-temp');
    this.temp_min = document.querySelector('#min-temp');
    this.feels_like = document.querySelector('#feels-like');
    this.wind = document.querySelector('#wind');
  }
  paint(data){
    this.location.textContent =` ${data.name}`;
    this.description.textContent =` ${data.weather[0].description}`;
    this.string.innerHTML =`<h3 class="string text-light">${data.main.temp} &deg;C</h3>`;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    this.humidity.textContent =`Humidity : ${data.main.humidity}`;
    this.temp_max.textContent =`Max-temp : ${data.main.temp_max}`;
    this.temp_min.textContent =`Min-temp : ${data.main.temp_min}`;
    this.feels_like.textContent =`Feels like : ${data.main.feels_like}`;
    this.wind.textContent =`Wind : ${data.wind.speed}`;

  }
  showAlert(message,classes){
    const container = document.querySelector('#alert');
    const row = document.querySelector('#location');
    const div = document.createElement('div');
    // div.setAttributes('class','alert alert-danger')
    div.className = classes;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div,row);
    setTimeout(()=>{
      this.clearAlert();
    },2000);
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove()
    }
  }

}
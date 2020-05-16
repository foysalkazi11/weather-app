const weather = new Weather;
const ui = new Ui;

const form = document.querySelector('form');
const input = document.querySelector('#input');


  
    weather.getWeather('dhaka')
  .then(data =>{
    ui.paint(data)
  })
  .catch(err =>console.log(err)
  );
  

  form.addEventListener('submit',e =>{
    e.preventDefault();
    let value = e.target.location.value;
      if (value !== '') {
        
        weather.getWeather(value)
        .then(data=>{
          console.log(data);
          if (data.cod === '404') {
            ui.showAlert('City is not found','alert alert-danger m-0')
          }else{
            ui.paint(data)
          }
        }).catch(err =>console.log(err));
        
        input.value = '';
      }else if(value === ''){
        ui.showAlert('Input a city name','alert alert-danger m-0');
        
    }
    
  });







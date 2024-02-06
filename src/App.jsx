import Section from './assets/main/Section'
import InfoWeather from './assets/main/InfoWeather'
import { useState } from 'react'
function App() {
  const [val, funct] = useState(false);
 
  function btnClick(value){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+value+"&units=metric&appid=17bcee4e03e45fe1e12611d07c283a60")
    .then(response => response.json())
    
    .then(json => {
      funct(json)
      
       
    })
    

    
  }
  return (
    <>
     <Section btncl = {btnClick}>{val&&<InfoWeather 
     cityName = {val&&val.name}
     maint ={val&&val.main.temp}
     maxt = {val&&val.main.temp_max}
     mint = {val&&val.main.temp_min}
     weather = {val&&val.weather[0].main}
     />}</Section>
    </>
  )
}

export default App

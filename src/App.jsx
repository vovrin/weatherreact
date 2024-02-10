import Section from './assets/main/Section'
import InfoWeather from './assets/main/InfoWeather'
import { useState } from 'react'
function App() {
  const [val, funct] = useState(false);
  async function fetchCity(cityn){
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityn}&units=metric&appid=17bcee4e03e45fe1e12611d07c283a60`)
    return weather.json();
   
  }
 
  async function btnClick(value){
    try{
      const dataprog = await fetchCity(value);
      funct(dataprog);
    }catch(error){
      funct(error)
    }
     
  }
  return (
    <>
     <Section btncl = {btnClick}>{val.name?<InfoWeather 
     cityName = {val.name}
     maint ={val.main.temp}
     maxt = {val.main.temp_max}
     mint = {val.main.temp_min}
     weather = {val.weather[0].main}
     windspeed = {val.wind.speed}
     humidity = {val.main.humidity}

     />:false}</Section>
    </>
  )
}

export default App

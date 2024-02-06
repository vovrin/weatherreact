import cloudy from '../imgs/cloudy.png';
import cloudyrainsun from '../imgs/cloudyrainsun.png';
import rainy from '../imgs/rainy.png';
import sunny from '../imgs/sunny.png';
import snowycloudysun from '../imgs/snowycloudysun.png'
export default function InfoWeather({cityName, maint, maxt, mint, weather}){
    let mainimg = cloudy;
    
    switch(weather){
        case "Clouds":
            mainimg = cloudy;
            break;
        case "Rain":
            mainimg = rainy;
            break;
        case "Snow":
            mainimg = snowycloudysun;
            break;
        case "Clear":
            mainimg = sunny;
            break;
        default:
            console.log("problem");
            break;
    }

    return(
        <div className="WeatherForecast">
            <div className='aboutCity'>
                <span className='fCityName'>{cityName}</span>
                <span className='fCityData'>Зараз</span>
            </div>
            
            <div className="iconOfWeather">
                <img src={mainimg} alt="imgofweather" className='imgOfWeather'/>
            </div>
            <div className="temp">
                <span>{maint}°</span>
                <span>{maxt}°</span>
                <span>{mint}°</span>
            </div>
        </div>
    )
}
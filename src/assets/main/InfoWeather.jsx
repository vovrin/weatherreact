import cloudy from '/imgs/cloudy.png';
import cloudyrainsun from '/imgs/cloudyrainsun.png';
import rainy from '/imgs/rainy.png';
import sunny from '/imgs/sunny.png';
import snowycloudysun from '/imgs/snowycloudysun.png'

export default function InfoWeather({cityName, maint, maxt, mint, weather, windspeed, humidity}){
    let mainimg;
    let windspeedab;
    let kmwindspeed = Math.round(windspeed *3600/1000);
    
    if (windspeed<=1.5){
        windspeedab = "Тихий";
    }else if (windspeed<=3.4){
        windspeedab = "Легкий";
    }else if (windspeed<=5.4){
        windspeedab = "Слабкий";
    }else if(windspeed<=7.9){
        windspeedab = "Помірний";
    }else if(windspeed<=10.7){
        windspeedab = "Свіжий";
    }else if(windspeed<=13.8){
        windspeedab = "Сильний";
    }else{
        windspeedab = "Дуже сильний";
    }
    windspeed = Math.round(windspeed)
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
                <div className='airinfo'>
                    <ul >
                            <li><svg className='airimg'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5Z" fill="#1C274C"/>
                                <path opacity="0.4" d="M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z" fill="#1C274C"/>
                                <path opacity="0.7" d="M14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5Z" fill="#1C274C"/>
                            </svg>
                            <span> {windspeed} м/c {kmwindspeed} км/г( {windspeedab} )</span>
                            </li>
                            <li><svg className='airimg' viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z" fill="#1A1A1A" /><path d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z" fill="#00B36A" /><path d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z" fill="#009957" /><path d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z" fill="#1A1A1A" /></svg>
                            <span> {humidity} %</span>
                            </li>
                    </ul>
                </div>
                <div className="temp">
                    <span>Середня {Math.round(maint)}°</span>
                    <span>Макс. {Math.round(maxt)}°</span>
                    <span>Мін. {Math.round(mint)}°</span>
                </div>
           
        </div>
    )
}
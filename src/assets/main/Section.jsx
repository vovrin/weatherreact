import InfoWeather from "./InfoWeather"
import { useState } from "react"
export default function Section({btncl, children}){
    const [inpv, func] = useState("");
    function chval(event){
        func(event.target.value);
    }
    return(
    <section className="weatherSect">
        <div className="weatherCont">
            <div className="weatheInpCont">
                <input type="text"  onChange={chval} placeholder="Введіть назву міста" className="cityName" />
                <button onClick={()=>{ inpv != ""?btncl(inpv):false}} className="srcButton">Пошук</button>
            </div>
            {children}
        </div>

    </section>
    )
    
}
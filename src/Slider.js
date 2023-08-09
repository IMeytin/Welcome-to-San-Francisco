import { data } from "./data";
import { useState } from "react";


export function Slider() {
    const [visitPlace, setVisitPlace] = useState(0);
    const {id, place, description, image} = data[visitPlace];

    const previousBtn = () => {
        setVisitPlace( visitPlace => {
            visitPlace--;
            if (visitPlace < 0){
                visitPlace = data.length -1;
            }
            return visitPlace;
        })
    }

    const nextBtn = () => { 
        setVisitPlace(visitPlace => {
            visitPlace++;
            if(visitPlace > data.length -1){
                visitPlace = 0;
            }
            return visitPlace;
        })
    }

    return (
    <div className='slider-container container'>
        <div>
            <h2>{id} - {place}</h2>
        </div>

        <div className='slider'>
            <button onClick={previousBtn} className='slider-btn'>←</button>
            <img className="slider-img" src={image} alt="Visit place, San Francisco" width="600"/>
            <button onClick={nextBtn} className='slider-btn'>→</button>
        </div>

        <div className="text">
            <p>{description}</p>
        </div>
    </div>
    );
}
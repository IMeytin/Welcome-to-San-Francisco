import { useState } from "react";
import { data } from "./data";

function Checklist(){
    const [checklist, setChecklist] = useState(data);
    const [showText, setShowText] = useState(false);

    const deleteItem = (id) => {
        let newArray = checklist.filter(place => place.id !== id);
        setChecklist(newArray);
        if (newArray.length === 0) {
            setShowText(true);
        }
    }

    return(
        <div className="container">
            <h2>Checklist</h2>
            <div className="checklist-list">
            <ul>
                {checklist.map(item => {
                    const {id, place} = item;
                    return(
                        <li key={id} onClick={() => deleteItem(id)} className="checklist-item hover-check">{id} - {place} <span className="hide-check">✓</span></li>
                    )
                })}
            </ul>
            <p className="hiddenText">{showText ? "All Done ✓" : ""}</p>
            </div>
        </div>
    )
}

export default Checklist;
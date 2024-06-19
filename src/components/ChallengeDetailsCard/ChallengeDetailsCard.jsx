import React from "react";
import './ChallengeDetailsCard.css'

const ChallenegDetailsCard = ({cardName,cardValue}) =>{
    return(
        <div className="card-details-container">
            <div className="cardname">{cardName}</div>
            <div className="cardvalue">{cardValue}</div>
        </div>
    );
};
export default ChallenegDetailsCard;
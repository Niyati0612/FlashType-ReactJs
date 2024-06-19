import React from "react";
import './ChallengeSection.css';
import TestContainer from './../TestContainer/TestContainer'

const ChallehgeSection = ({startagain,onInputChange,testInfo, timestarted,timeremaining,selectedparagraph,word,character,wpm,startAgain}) =>{
    return(
        <div className="challengesection-container">
            <div className="challengesection-header">
                Take a speed test now!
            <TestContainer startagain={startagain} onInputChange={onInputChange} testInfo={testInfo} timestarted={timestarted} timeremaining={timeremaining} selectedparagraph={selectedparagraph} word={word} character={character} wpm={wpm} startAgain={startAgain}/>
            </div>
        </div>
    )
};
export default ChallehgeSection;
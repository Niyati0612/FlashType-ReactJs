import React from "react";
import './TestContainer.css'
import Tryagain from './../Tryagain/Tryagain'
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({startagain,onInputChange,testInfo,timestarted,timeremaining,selectedparagraph,word,character,wpm,startAgain}) =>{
    return(
        <div className="test-container">

            {/* /change between the screen */}
            {timeremaining > 0 ? (
                <div className="typing-challenge-container">
                <TypingChallengeContainer 
                onInputChange={onInputChange}
                 testInfo={testInfo} 
                 timestarted={timestarted} 
                 timeremaining={timeremaining} 
                 selectedparagraph={selectedparagraph} 
                 word={word} 
                 character={character} 
                 wpm={wpm}/>
            </div>
            ):(
            
            <div className="try-again-cont">
                <Tryagain startagain={startagain} word={word} character={character} wpm={wpm} startAgain={startAgain}/> 
            </div>
            )}
        </div>

    )
}
export default TestContainer;
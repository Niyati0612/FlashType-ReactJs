import React from "react";
import "./TypingChallenge.css";
import TestLetter from './../TestLetter/TestLetter'

const TypingChallenge = ({
selectedparagraph,timeremaining,timestarted,testInfo,onInputChange
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:{timeremaining > 10 ? timeremaining : `0${timeremaining}`}
                </p>
                <p className="timer-info">
                 {!timestarted && "Start typing to start the test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <div className="textarea test-paragraph">
                        {/* selectedparagraph */}
                        {testInfo.map((individualletter,index)=>{
                            return <TestLetter 
                            key={index}
                            individualletter={individualletter}/>
                        })}
        
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e)=> onInputChange(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here"
                        
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;
import React from "react";
import './Tryagain.css'

const Tryagain =({startagain,word ,character ,wpm})=>{
    return(
        <div className="tryagain-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Words</b> {word}
                </p>
                <p>
                    <b>Character</b>{character}
                </p>
                <p>
                    <b>Speed</b>{wpm} wpm
                </p>
            </div>

            <div className="end-buttons ">
                <button className=" end-buttons start-again-btn"
                onClick = {() => startagain()}>
                    re-try
                </button>

                <button className="end-buttons share-btn"
                    onClick ={()=>{
                        window.open("https://github.com/Niyati0612/React_Projects/tree/main/src/components"); 
                    }}
                >
                    share
                </button>
                
                <button className="end-buttons tweet-btn">
                    twitter
                </button>
            </div>
        </div>
    )
}
export default Tryagain;
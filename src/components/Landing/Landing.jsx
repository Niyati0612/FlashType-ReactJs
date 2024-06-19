import React from "react";
import image from './../assests/image.png';
import './Landing.css';
import Typewriter from "typewriter-effect";


const Landing=()=>{
    return(
        <div className="landing-container">
            <div className="landing-left">
                <p className="landing-text">Can you type...</p>
                <div className="typewriter-container">
                {/* <Typewriter
                    onInit={(typewriter) => {
                        const loopTypewriter = () => {
                            typewriter
                                .typeString("Correct?")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Fast?")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Slow?")
                                .pauseFor(1000)
                                .deleteAll()
                                .callFunction(() => {
                                    loopTypewriter();  // Call the function again to loop
                                })
                                .start();
                        };

                        loopTypewriter(); // Start the loop
                    }}
                /> */}


                    {/* <p>Correct</p>
                    <p>Fast</p>
                    <p>Slow</p> */}
                </div>
            </div>
            <div className="landing-right">
                <img className="landing-image" src={image}/>
            </div>
        </div>

    );
}
export default Landing;
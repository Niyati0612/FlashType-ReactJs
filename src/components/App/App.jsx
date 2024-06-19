import React, { useEffect } from "react";
import './App.css';
import Nav from '../Nav/Nav';
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { useState } from "react";

const TotalTime=60;
const paragraphurl="http://metaphorpsum.com/paragraphs/1/9";

const App=()=>{

        const [selectedparagraph,setselectedparagraph]=useState("Hello World example")
        const [word,setword]=useState(0)
        const [character,setcharacter]=useState(0)
        const [wpm,setwpm]=useState(0)
        const [timestarted,settimestarted]=useState(false)
        const [timeremaining,settimeremaining]=useState(60)
        const [testInfo ,settestInfo]=useState([])
        const [onInputChange,setonInputChange]=useState()

    const fetchNewParagraphFallback=()=>{
        //     fetch(paragraphurl) 
        //     .then((response)=>response.text())
        //     .then((response) => {
        //         setselectedparagraph(response)
        //     })
            const selectedParagraphArray = selectedparagraph.split("");
            const testInfo = selectedParagraphArray.map((selectedLetter) => {
                return {
                    testLetter: selectedLetter,
                    status: "notAttempted",
                };
            });
            settestInfo(testInfo);
        }

    useEffect(() => {
            fetchNewParagraphFallback();
        },[]);


    const startagain = () => fetchNewParagraphFallback();


        const handleUserInput=(inputvalue)=>{
            if(!timestarted){starttime()};
            const character=inputvalue.length;
            const word = inputvalue.trim() ? inputvalue.trim().split(" ").length : 0; // Check if input is empty or only whitespace
            // const index=character-1;
            // if (index < 0){
            //     settestInfo([
            //         {
            //             testLetter:testInfo[0].testLetter,
            //             status:"notAttempted"
            //         },
            //         ...this.state.testInfo.slice(1),

            //     ],
            //     character,
            //     word,
            // )};
            setcharacter(character);
            setword(word);
        }

        const starttime =()=>{
            settimestarted(true);
            settimeremaining(60);
        }
        useEffect(()=>{
            if (timestarted && timeremaining > 0) {
                const timer=setInterval(()=>{
                    settimeremaining(timeremaining=>{
                        if(timeremaining>0){
                        // change wpm
                            const timespent=TotalTime-timeremaining;
                            const wpm=
                                timespent>0
                                    ?(word/timespent)*TotalTime
                                    :0;
                            setwpm(parseInt(wpm))
                        //for remaining time
                            return timeremaining-1;
                        }else{
                            clearInterval(timer);
                        }
                    });
                },1000);
            }},[settimeremaining,settimestarted,word])
            
        

    return(
        <div className="app-container">
            <Nav />
            <Landing />
            <ChallengeSection startagain={startagain} onInputChange={handleUserInput} testInfo={testInfo} timestarted={timestarted} timeremaining={timeremaining} selectedparagraph={selectedparagraph}  word={word} character={character} wpm={wpm} />
        </div>
    )
}
export default App;

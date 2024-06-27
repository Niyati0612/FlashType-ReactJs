import React, { useEffect } from "react";
import './App.css';
import Nav from '../Nav/Nav';
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { useState } from "react";

const TotalTime=60;
const paragraphurl="http://metaphorpsum.com/paragraphs/1/9";

const App=()=>{

        const [selectedparagraph,setselectedparagraph]=useState()
        const [word,setword]=useState(0)
        const [character,setcharacter]=useState(0)
        const [wpm,setwpm]=useState(0)
        const [timestarted,settimestarted]=useState(false)
        const [timeremaining,settimeremaining]=useState(60)
        const [testInfo ,settestInfo]=useState([])
        const [onInputChange,setonInputChange]=useState()

        const fetchNewParagraphFallback = () => {
            fetch(paragraphurl)
                .then((response) => response.text())
                .then((data) => {
                    const selectedParagraphArray = data.split("");
                    const testInfo = selectedParagraphArray.map((selectedLetter) => {
                        return {
                            testLetter: selectedLetter,
                            status: "notAttempted",
                        };
                    });
                    settestInfo(testInfo); 
                });
        };
        useEffect(() => {
            fetchNewParagraphFallback();
          }, []);
        
        const startagain = () => {
            fetchNewParagraphFallback();
            settimestarted(false);
            settimeremaining(60);
            setselectedparagraph(data)
          };
        


    const handleUserInput=(inputvalue)=>{
        if(!timestarted){starttime()};
            // const character=inputvalue.length;
            // const word = inputvalue.trim() ? inputvalue.trim().split(" ").length : 0; // Check if input is empty or only whitespace
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
            // setcharacter(character);
            // setword(word);
                    /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

        const characters = inputvalue.length;
        const words = inputvalue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
                settestInfo( [
                    {
                        testLetter:testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    testInfo.slice(1),
                ],
                setcharacter(characters),
                setword(words),
                )
            return;
        }

        if (index >= selectedparagraph.length) {
            settestInfo(
                setcharacter(characters),
                setword(words),
            );
            return;
        }

    };
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

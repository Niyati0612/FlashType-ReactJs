import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
    selectedparagraph,
    timeremaining,
    timestarted,
    testInfo,
    word,
    character,
    wpm,
    onInputChange,
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={word} />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={character}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            <div className="typewriter-container">
                <TypingChallenge
                    selectedparagraph={selectedparagraph}
                    timeremaining={timeremaining}
                    timestarted={timestarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;
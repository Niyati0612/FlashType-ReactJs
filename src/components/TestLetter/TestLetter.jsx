import React from "react";
import classNames from "classnames";
import "./TestLetter.css";

const TestLetter =({individualletter})=>{
    // const statusClassName = classNames({
    //     "test-letter-correct": individualletter.status === "correct",
    //     "test-letter-incorrect": individualletter.status === "incorrect",
    //     "test-letter-not-attempted": individualletter.status === "notAttempted",
    // });
    
// alternate of const
    const { status } = individualletter;
    let statusclass;
        if(status =="correct"){
            statusclass="test-letter-correct";
        }else if (status=='incorrect'){
            statusclass="test-letter-incorrect";
        }else{
            statusclass="test-letter-not-attempted";
        }

    return (
        <span className={`test-letter ${statusclass}`}>{individualletter.testLetter}</span>
    );
}
export default TestLetter;
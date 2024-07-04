import React, { useState } from 'react'
import QuizData from '../Data/QuizData.js';
import QuizResult from './QuizResult.jsx';

function Quiz() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const ChangeQuestion = (selectedOption) => {
        updateScore(selectedOption);
        if (current < QuizData.length - 1) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = (selectedOption) => {
        if (selectedOption === QuizData[current].answer) {
            setScore(score + 1);
        }
    };
    const tryagain = ()=>{
        setShowResult(false)
        setCurrent(0)
        setScore(0)

    }

    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalscore={QuizData.length} tryagain={tryagain}/>
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{current + 1}.</span>
                            <span id="question-txt">{QuizData[current].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[current].options.map((option, i) => (
                                <button
                                    className="option-btn"
                                    key={i}
                                    onClick={() => ChangeQuestion(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <p>Your Score: {score}</p>
        </div>
    );
}

export default Quiz;

import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div>
        SCore: {props.score} <br />
        Total Score : {props.totalscore}
    </div>
    <button id = "next-button" onClick={props.tryagain}>Try Again</button>
    </>
  )
}

export default QuizResult

import { useEffect, useState } from "react";
import useSound from "use-sound";//return music in array form , 
import play from "../sounds/kbcPlay.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";


import React from 'react'

const Qna = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");//for option alignment
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);
  // q set
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);


  // conclusion of user answer :  with wait run  , given function
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    // toogle selected anser for 2 sec
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(2000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    // current answ ka sound , next q , answer null
    delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        delay(2000, () => {
          // TODO: HOW IT IS WORKING (prev)
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        // wrong tune , timeOut
        wrongAnswer();
        delay(2000, () => {
          setTimeOut(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {/* display all option , onclick specific element , that option data pass  */}
        {question?.answers.map((a, key) => (
          <div
            key={key}
            //  for all option css : a have value then  give style of className answer
            // TODO:
            //is selectedAnswer === answer
            className={selectedAnswer === a ? className : "answer"}
            // selectedAnswer true then run
            onClick={() => !selectedAnswer && handleClick(a)}
          >
                {a.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Qna



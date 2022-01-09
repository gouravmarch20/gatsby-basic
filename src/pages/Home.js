import '../css/App.css';
import { useEffect, useMemo, useState } from "react";

import Start from "../components/Start";
import Timer from "../components/Timer";
import Qna from "../components/Qna";
import { data } from '../utils/Data';



const Home = () => {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);//end game time up
    const [questionNumber, setQuestionNumber] = useState(1);//map sai next question , question change -> timer reload , parimind level up
    const [earned, setEarned] = useState("₹ 0");//  question -1  

    // useMemo : render only once : it's value store in browser cache ->  i have give no case to re-render this
    // .reverse() sai : for id 15 to 1 items return
    const moneyPyramid = useMemo(
        () =>
            [
                { id: 1, amount: "₹ 1000" },
                { id: 2, amount: "₹ 1500" },
                { id: 3, amount: "₹ 3000" },
                { id: 4, amount: "₹ 4000" },
                { id: 5, amount: "₹ 5000" },
                { id: 6, amount: "₹ 7000" },
                { id: 7, amount: "₹ 9000" },
                { id: 8, amount: "₹ 11,000" },
                { id: 9, amount: "₹ 40,000" },
                { id: 10, amount: "₹ 1,00,000" },
                { id: 11, amount: "₹ 10,00,000" },
                { id: 12, amount: "₹ 25,00,000" },
                { id: 13, amount: "₹ 30,50,000" },
                { id: 14, amount: "₹ 50,00,000" },
                { id: 15, amount: "₹ 1,00,000,00" },
            ].reverse(),
        []
    );
    //  find item no he crossed , then extract anount key value --> & set earning state
    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber]);

    return (
        <div className="app">
            {/* ifempty then start component */}
            {!username ? (
                <Start setUsername={setUsername} />
            ) : (
                <>
                    <div className="main">
                        {timeOut ? (
                            // if time out : you earned display time
                            <h1 className="endText">Hi {username} you had earned: {earned}</h1>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        {/*  when ever question change time reload beggning*/}
                                        <Timer
                                            setTimeOut={setTimeOut}
                                            questionNumber={questionNumber}
                                        />
                                    </div>
                                </div>
                                <div className="bottom">
                                  {/* data : iterate which Q&A to display  ,  questionNumber : to display current question ==> data[questionNumber-1], setQuestionNumber: next question , setTimeOut: in wrong answer */}
                                    <Qna
                                        data={data}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                        setTimeOut={setTimeOut}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    {/* display all moneyPyramid data */}
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((m) => (
                                <li
                                    className={
                                        questionNumber === m.id
                                            ? "moneyListItem active"
                                            : "moneyListItem"
                                    }
                                >
                                    <span className="moneyListItemNumber">{m.id}</span>
                                    <span className="moneyListItemAmount">{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}


        </div>
    );
}

export default Home

import "./App.css";
import { useEffect, useMemo, useState } from "react";
// import Start from "./components/Start";
import Timer from "./components/Timer";
import WelcomeScreen from "./components/WelcomeScreen";
import Trivia from "./components/Trivia";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [isGameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
    // You can perform any other game initialization logic here
  };

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry potter in the movie \"Harry Potter\"?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What year was the very first model of the iPhone released?",
      answers: [
        {
          text: "2008",
          correct: false,
        },
        {
          text: "2000",
          correct: false,
        },
        {
          text: "2007",
          correct: true,
        },
        {
          text: "2022",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What was Twitter’s original name?",
      answers: [
        {
          text: "X",
          correct: false,
        },
        {
          text: "Y",
          correct: false,
        },
        {
          text: "Twitter",
          correct: false,
        },
        {
          text: "twttr",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is the hottest in the solar system?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Venus",
          correct: true,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What does DC (Comics) stand for?",
      answers: [
        {
          text: "District of Columbia",
          correct: false,
        },
        {
          text: "District Chicken",
          correct: false,
        },
        {
          text: "Detective Chicken",
          correct: false,
        },
        {
          text: "Detective Comics",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "How many films did Sean Connery play James Bond in?",
      answers: [
        {
          text: "Seven",
          correct: true,
        },
        {
          text: "Nineteen",
          correct: false,
        },
        {
          text: "Six",
          correct: false,
        },
        {
          text: "Five",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which cartoon character lives in a pineapple under the sea?",
      answers: [
        {
          text: "Scooby Doo",
          correct: false,
        },
        {
          text: "SpongeBob SquarePants",
          correct: true,
        },
        {
          text: "Minnie Mouse",
          correct: false,
        },
        {
          text: "Peter Griffin",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who did Forbes name the youngest self-made billionaire in 2019?",
      answers: [
        {
          text: "Mark Zuckerberg",
          correct: false,
        },
        {
          text: "Andrew Tate",
          correct: false,
        },
        {
          text: "Kylie Jenner",
          correct: true,
        },
        {
          text: "Adwait Gogte",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the longest-running Broadway show?",
      answers: [
        {
          text: "Odyssey",
          correct: false,
        },
        {
          text: "Phantom of Opera",
          correct: true,
        },
        {
          text: "Black Swan",
          correct: false,
        },
        {
          text: "The Opera Winfrey Show",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "In which period did ballet originate?",
      answers: [
        {
          text: "Italian Renaissance",
          correct: true,
        },
        {
          text: "French Revolution",
          correct: false,
        },
        {
          text: "Russian Revolution",
          correct: false,
        },
        {
          text: "The war of 1812",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What or who is the Ford Mustang named after?",
      answers: [
        {
          text: "A Horse",
          correct: false,
        },
        {
          text: "A fighter plane from WWII",
          correct: true,
        },
        {
          text: "A Bee",
          correct: false,
        },
        {
          text: "Random Name Generator",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
      answers: [
        {
          text: "9",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "8",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which kind of alcohol is Russia notoriously known for?",
      answers: [
        {
          text: "Vodka",
          correct: true,
        },
        {
          text: "Beer",
          correct: false,
        },
        {
          text: "Wine",
          correct: false,
        },
        {
          text: "Hennesey",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which continent is the largest?",
      answers: [
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Antarctica",
          correct: false,
        },
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "North America",
          correct: false,
        },
      ],
    },
  ];

  let shuffledata = shuffle(data)

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 500" },
        { id: 3, amount: "$ 1,000" },
        { id: 4, amount: "$ 5,000" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div>
      {!isGameStarted ? (
        <WelcomeScreen onStartGame={handleStartGame} />
      ) : (
        <>
      <div className="app">
      {
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={shuffledata}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
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
      }
    </div>
    <p className="signature">&copy; Advait Gogte</p>
    </>
      )}
    </div>
  );
}

export default App;


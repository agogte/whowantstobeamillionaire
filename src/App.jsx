import { useState } from 'react';
import './App.css'

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)

  const moneyPyramid = [
    {id: 1, amount: "$100"},
    {id: 2, amount: "$200"},
    {id: 3, amount: "$300"},
    {id: 4, amount: "$400"},
    {id: 5, amount: "$500"},
    {id: 6, amount: "$1,000"},
    {id: 7, amount: "$5,000"},
    {id: 8, amount: "$10,000"},
    {id: 9, amount: "$25,000"},
    {id: 10, amount: "$50,000"},
    {id: 11, amount: "$100,000"},
    {id: 12, amount: "$250,000"},
    {id: 13, amount: "$500,000"},
    {id: 14, amount: "$1,000,000"},
    {id: 15, amount: "$5,000,000"}
  ].reverse()

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">Question and answers</div>
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className='moneyListItemNumber'>{m.id}</span>
              <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
          ))}
          
          
        </ul>
      </div>
    </div>
  );
}

export default App;
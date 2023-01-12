import "./QandA.css";
import { useState } from 'react';
import { getQuestions } from '../../QuizData.jsx';
import Glacier from "../../Images/Glacier1.png";
import Bear from "../../Images/Bear.png";
import Confetti from 'react-confetti'

const QandA = () => {
  // definierar arrayen med frågorna till quizet // 
  const quizArray = getQuestions();
  // sätter utgångsvärdena för vilken fråga användaren är på och antalet poäng //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // hanterar svaret som användare klickar på, om svaret är rätt för frågan adderas ett poäng //
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // definierar antalet frågor gjorda + kvar att besvara, om alla frågor är besvarade visas totala poängen för quizet //
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizArray.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Återställer quizet till utgångsvärdena //
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

    // koden är uppdelad för att kunna hantera att sidan renderas om med annan kod vid avslutat quiz //
    // första delen hanterar visandet av antalet totalpoäng och en knapp som startar om quizet, //
    // andra delen innehåller allt för själva frågorna och svarsalternativen. //
    return ( 
 <>
    <div className="container quizContainer">
      <header>
          <h1 className="quizHeading bigHeading">Quiz</h1>
      </header> 
      
      <div className="quizWrapper">
        
      {showScore ? (
        <div className="quizScore">
          <Confetti width={window.innerWidth} height={window.innerHeight}/>
          <p className="scoreText smallHeading">
            Du fick {score} av {quizArray.length} rätt
          </p>
          <button className="btn restart-btn" onClick={() => restartGame()}>
            Starta om quizet
          </button>
        </div>
      ) : (
        <>
          <div className="quizLeft">
            <div className="largeText">
              {quizArray[currentQuestion].questionText}
            </div>
          </div>
          <div className="quizAnswer">
            {quizArray[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="btn smallHeading"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
            <div className="quizQuestionCount smallHeading">
              <span>Fråga {currentQuestion + 1}</span>/{quizArray.length}
            </div>
          </div>
        </>
      )}
    </div>
    </div>
    <div className="articFooter"><img className="glacier ice quizGlacier" alt="Glacier" src={Glacier}/></div>
  
</>
     );
}
 
export default QandA;
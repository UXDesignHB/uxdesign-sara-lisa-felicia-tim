import "./QandA.css";
import { useState } from 'react';
import { getQuestions } from '../../QuizData.jsx';
import Glacier from "../../Images/Glacier1.png";
import Bear from "../../Images/Bear.png";
import Confetti from 'react-confetti'

const QandA = () => {

  const quizArray = getQuestions();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizArray.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  /* Resets the quiz back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

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
            {/* <div className="quizQuestionCount smallHeading">
              <span>Fråga {currentQuestion + 1}</span>/{quizArray.length}
            </div> */}
            <div className="largeText">
              {quizArray[currentQuestion].questionText}
            </div>
            {/* {quizArray[currentQuestion].questionIcon} */}
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
    <img className="glacier ice quizGlacier" src={Glacier}/>
  
</>
     );
}
 
export default QandA;

import Sun from '../src/Images/ClimateIcons/Sun.png'
import Ice from '../src/Images/ClimateIcons/Ice.png'
import CO2 from '../src/Images/ClimateIcons/CO2.png'
import Water from '../src/Images/ClimateIcons/Water.png'


export function getQuestions() {
    return questions;
  }
  
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={Sun} />,
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={Ice} />,
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={CO2} />,
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
      questionIcon: <img className="quizIcon" src={Water} />,
    },
  ];
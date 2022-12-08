
import SolIkon from '../src/Images/ClimateIcons/SolIkon.png'
import IsbergIkon from '../src/Images/ClimateIcons/IsbergIkon.png'
import Co2Ikon from '../src/Images/ClimateIcons/Co2Ikon.png'


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
      questionIcon: <img className="quizIcon" src={SolIkon} />,
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={IsbergIkon} />,
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={Co2Ikon} />,
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
      questionIcon: <img className="quizIcon" src={SolIkon} />,
    },
  ];
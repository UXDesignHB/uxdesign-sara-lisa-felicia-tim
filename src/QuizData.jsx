
import Sun from '../src/Images/ClimateIcons/Sun.png'
import Ice from '../src/Images/ClimateIcons/Ice.png'
import CO2 from '../src/Images/ClimateIcons/CO2.png'
import Water from '../src/Images/ClimateIcons/Water.png'


export function getQuestions() {
    return questions;
  }
  
  const questions = [
    {
      questionText: 'Hur många grader har temperaturen ökat sedan år 1880?',
      answerOptions: [
        { answerText: '+0.7°C', isCorrect: false },
        { answerText: '+1°C', isCorrect: false },
        { answerText: '+5°C', isCorrect: true },
        { answerText: '+10°C', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={Sun} />,
    },
    {
      questionText: 'Hur många ton växthusgaser släpps ut i Sverige varje år?',
      answerOptions: [
        { answerText: '900 tusen ton', isCorrect: false },
        { answerText: '13 miljoner ton', isCorrect: true },
        { answerText: '48 miljoner ton', isCorrect: false },
        { answerText: '146 miljoner ton', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={Ice} />,
    },
    {
      questionText: 'Vilket stad förväntas ligga under vatten ifall havsnivåerna fortsätter att stiga i samma takt?',
      answerOptions: [
        { answerText: 'Tokyo', isCorrect: true },
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Los Angeles', isCorrect: false },
        { answerText: 'Amsterdam', isCorrect: false },
      ],
      questionIcon: <img className="quizIcon" src={CO2} />,
    },
    {
      questionText: 'Hur mycket av jordens yta är täckt av glaciärer?',
      answerOptions: [
        { answerText: '2 procent', isCorrect: false },
        { answerText: '10 procent', isCorrect: false },
        { answerText: '28 procent', isCorrect: false },
        { answerText: '43 procent', isCorrect: true },
      ],
      questionIcon: <img className="quizIcon" src={Water} />,
    },
  ];
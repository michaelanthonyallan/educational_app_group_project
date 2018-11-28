use educationApp;
db.dropDatabase();

db.lessons.insertMany([
  {
    topic: "Planets",
    content: {
      questions: [{
        question1: {
          info: "Our Solar System, Sol, has 8 planets including our planet, Earth. The others from closest to furthest from the sun are Mercury, Venus, Mars, Jupiter, Saturn, Uranus and Neptune.",
         text: "Which planet is closest to the Sun?",
         correctAnswer: "Mercury",
         incorrectAnswer: "Mars"
        }
        },
        {
        question2: {
          info: "Our planet is special and resides just far enough away from the Sun to be habitable. This zone is called the 'Goldilocks Zone' because it is just right!",
          text: "In what zone of the solar system can you find our planet?",
          correctAnswer: "The Goldilocks Zone",
          incorrectAnswer: "The Just-right Zone"
        }
        },
        {
        question3: {
          info: "We've already visited the moon - the closest celestial body to us, and it takes about 3 days to reach. Our next mission is to reach the planet Mars. It takes around 300 days to get to Mars when it is at it's closest distance from us. This happens every two years.",
          text: "How long does it take to get to Mars from Earth?",
          correctAnswer: "Three Hundred Days",
          incorrectAnswer: "Three Days"
       }
       }
     ],
    },
  }
 ,
 {
   topic: "Queens of England",
   content: {
     questions: [{
       question1: {
         info: "The first queen of England was crowned was Mary the First in 1553 and she was succeeded by Elizabeth the First, her half sister, when she died.",
         text: "Who was the first 'Queen of England' ? ",
         correctAnswer: "Mary the First",
         incorrectAnswer: "Elizabeth the First"
       }
       },
       {
       question2: {
         info: "Many queens are married before they are Queen or married after to create a political union. Elizabeth the First who ruled between 1558 and 1603 was the only queen of England not to marry. ",
         text: "When did Elizabeth the First take the throne of England?",
         correctAnswer: "1558",
         incorrectAnswer: "1603"
       }
       },
       {
       question3: {
         info: "The official religion of England has changed at various points of time in history (mostly due to Kings who wanted to do things differently to the Pope!). Queen Anne of Denmark was not born a Catholic and secretly converted to Catholicism after marrying James the First who was a Protestant. All other Queen Consorts of the 17th Century were born and raised Catholics",
         text: "To what religion did Anne of Denmark convert secretly in Scotland?",
         correctAnswer: "Catholicism",
         incorrectAnswer: "Protestantism"
      }
      }
    ],
   },
 }]
);

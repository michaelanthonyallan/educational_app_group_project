use educationApp;
db.dropDatabase();

db.lessons.insertMany([
  {
    topic: "Queens",
    content: {
      questions: {
        question1: {
          info: "info for question1",
          text: "the question for question 1",
          correctAnswer: "question1 correct answer",
          incorrectAnswer: "question1 incorrectanswer"
        },
        question2: {
          info: "info for question2",
          text: "the question for question 2",
          correctAnswer: "question2 correct answer",
          incorrectAnswer: "question2 incorrectanswer"
        },
        question3: {
          info: "info for question3",
          text: "the question for question 3",
          correctAnswer: "question3 correct answer",
          incorrectAnswer: "question3 incorrectanswer"
       },
      },
    },
  }
 ,
 {
   topic: "Planets",
   content: {
     questions: {
       question1: {
         info: "info for question1",
         text: "the question for question 1",
         correctAnswer: "question1 correct answer",
         incorrectAnswer: "question1 incorrectanswer"
       },
       question2: {
         info: "info for question2",
         text: "the question for question 2",
         correctAnswer: "question2 correct answer",
         incorrectAnswer: "question2 incorrectanswer"
       },
       question3: {
         info: "info for question3",
         text: "the question for question 3",
         correctAnswer: "question3 correct answer",
         incorrectAnswer: "question3 incorrectanswer"
      },
     },
   },
 }]
);

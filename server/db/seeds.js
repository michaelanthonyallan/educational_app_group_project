use educationApp;
db.dropDatabase();

db.lessons.insertMany([
  {
    Topic: "queens",
    Content: {
      Questions: {
        Question1: {
          info: "info for question1",
          text: "the question for question 1",
          correctAnswer: "question1 correct answer",
          incorrectAnswer: "question1 incorrectanswer"
        },
        Question2: {
          info: "info for question2",
          text: "the question for question 2",
          correctAnswer: "question2 correct answer",
          incorrectAnswer: "question2 incorrectanswer"
        },
        Question3: {
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
   Topic: "planets",
   Content: {
     Questions: {
       Question1: {
         info: "info for question1",
         text: "the question for question 1",
         correctAnswer: "question1 correct answer",
         incorrectAnswer: "question1 incorrectanswer"
       },
       Question2: {
         info: "info for question2",
         text: "the question for question 2",
         correctAnswer: "question2 correct answer",
         incorrectAnswer: "question2 incorrectanswer"
       },
       Question3: {
         info: "info for question3",
         text: "the question for question 3",
         correctAnswer: "question3 correct answer",
         incorrectAnswer: "question3 incorrectanswer"
      },
     },
   },
 }]
);









// Collection:
//
//     Topic: "queens"
//
//
//     Content:
//
//         Section_1:
//
//             paragraph_1: "lots of info put into a paragraph text"
//
//             Question: "string of text"
//
//
//             Right_ans: "string of text"
//
//
//             Wrong_Ans: "string of text"




//       {
//         Section_2: {
//           {
//             paragraph_2: "Lots of more interesting text"
//           },
//           {
//             Question: "string of text"
//           },
//           {
//             Right_ans: "string of text"
//           },
//           {
//             Wrong_ans: "string of text"
//           }
//         }
//       }
//
//     }
//   }
// }]

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  quiz: {
    type: Object,
    required: true,
  },
});

const Course = mongoose.model("COURSE", courseSchema);

module.exports = Course;

//Table structure of the schema
// const data = {
//   basic: [
//     {
//       topic1: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic2: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic3: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],
//   starter: [
//     {
//       topic1: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic2: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic3: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],
//   advnaced: [
//     {
//       topic1: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic2: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       topic3: [
//         {
//           chapter1: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter2: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//         {
//           chapter3: {
//             content: "<h1>Hello world!</h1>",
//             quiz: [
//               {
//                 question: "Question 1",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 2",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 3",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 4",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//               {
//                 question: "Question 5",
//                 options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//                 correct: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],
// };

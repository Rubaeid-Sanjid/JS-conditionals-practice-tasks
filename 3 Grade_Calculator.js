/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 65;

if (score >= 90) {
  console.log("Your grade: A");
} 
else if (score >= 80 && score < 90) {
  console.log("Your grade: B");
}
else if (score >= 70 && score < 80) {
  console.log("Your grade: C");
}
else if (score >= 60 && score < 70) {
  console.log("Your grade: D");
}
else{
  console.log("Your grade: F");
}

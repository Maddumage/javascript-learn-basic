function evaluateGrade(score) {
  let grade;
  let feedback;

  // checkin grades
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else if (score >= 0 && score < 60) {
    grade = "F";
  } else {
    return "Invalid score";
  }
  switch (grade) {
    case "A" || "B":
      feedback = "Excellent work!";
      break;
    case "B":
      feedback = "Good job!";
      break;
    case "C":
      feedback = "You can do better!";
      break;
    case "D":
      feedback = "Needs improvement.";
      break;
    case "F":
      feedback = "Failed. Try harder next time.";
      break;
    default:
      feedback = "Invalid grade";
  }

  // Return the score, grade, and feedback
  return `Score: ${score}, Grade: ${grade}, Feedback: ${feedback}`;
}

// results logging
console.log(evaluateGrade(95));
console.log(evaluateGrade(85));
console.log(evaluateGrade(75));
console.log(evaluateGrade(65));
console.log(evaluateGrade(55));
console.log(evaluateGrade(-5));
console.log(evaluateGrade(100));
console.log(evaluateGrade(105));
console.log(evaluateGrade(90));

console.log(evaluateGrade(0));
console.log(evaluateGrade("test"));

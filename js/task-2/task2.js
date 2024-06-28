function calculateSGPA(results) {
  // Function to check grade point on score
  function getGradePoint(score) {
    if (score >= 90 && score <= 100) return 10;
    if (score >= 80 && score < 90) return 9;
    if (score >= 70 && score < 80) return 8;
    if (score >= 60 && score < 70) return 6;
    if (score >= 50 && score < 60) return 5;
    if (score >= 40 && score < 50) return 4;
    if (score >= 30 && score < 40) return 3;
    if (score >= 20 && score < 30) return 2;
    if (score >= 10 && score < 20) return 1;
    if (score >= 0 && score < 10) return 0;
    return 0; // For scores outside the range of 0 to 100
  }

  const creditPoint = 10;
  let totalCreditPoints = 0;
  let totalGradePoints = 0;

  for (let score of results) {
    let gradePoint = getGradePoint(score);
    totalCreditPoints += creditPoint;
    totalGradePoints += gradePoint * creditPoint;
  }

  let sgpa = totalGradePoints / totalCreditPoints;
  return `Your SGPA is ${sgpa.toFixed(2)}`;
}

console.log(calculateSGPA([87, 56, 34, 90, 74, 63, 79, 93, 68, 50]));

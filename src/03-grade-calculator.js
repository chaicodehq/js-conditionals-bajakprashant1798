/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    console.log("Invalid score. Score must be a number between 0 and 100.");
    return "INVALID";
  }

  let addedScore = score;
  if (hasExtraCredit) {
    if (addedScore + 5 > 100) {
      addedScore = 100;
    } else {
      addedScore += 5;
    }
  }

  if (addedScore >= 90) {
    console.log("Grade: A");
    return "A";
  } else if (addedScore >= 80) {
    console.log("Grade: B");
    return "B";
  } else if (addedScore >= 70) {
    console.log("Grade: C");
    return "C";
  } else if (addedScore >= 60) {
    console.log("Grade: D");
    return "D";
  } else {
    console.log("Grade: F");
    return "F";
  }
}
calculateGrade(95, true);  // "A"
calculateGrade(85, false); // "B"
calculateGrade(45, true);  // "F"
calculateGrade(65, false); // "D"
calculateGrade(55, true);  // "D"
calculateGrade(-10, false); // "INVALID"
calculateGrade(110, true);  // "INVALID"
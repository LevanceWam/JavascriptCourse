// write a function that returns a grade of a student
// in an array we want to calculate the average of the array
// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const grades = [100, 100, 80];

function calculateGrade(grades) {
    let total = 0;
    for (grade of grades) {
        total += grade;
    }
    let average = total / grades.length;
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
}

console.log(calculateGrade(grades));
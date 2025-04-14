//check below for problem statement.
// 1. Student Data
let students = [
  { name: "Amit", roll: 101, marks: [85, 72, 90] },
  { name: "Riya", roll: 102, marks: [60, 58, 49] },
  { name: "John", roll: 103, marks: [30, 22, 18] },
  { name: "Vikas", roll: 104, marks: [75, 80, 78] }
];

// 2. Function to calculate total, average and grade
function evaluateStudent(student) {
  let total = student.marks.reduce((sum, mark) => sum + mark, 0);
  let average = total / student.marks.length;
  let grade = '';

  if (average >= 90) grade = 'A+';
  else if (average >= 75) grade = 'A';
  else if (average >= 60) grade = 'B';
  else if (average >= 35) grade = 'C';
  else grade = 'F';

  return {
    ...student,
    total,
    average: average.toFixed(2),
    grade
  };
}

// 3. Evaluate all students
let evaluatedStudents = students.map(evaluateStudent);

// 4. Print all results
console.log("📋 All Students Report:\n");
evaluatedStudents.forEach(s => {
  console.log(`Name     : ${s.name}`);
  console.log(`Roll No  : ${s.roll}`);
  console.log(`Marks    : ${s.marks.join(", ")}`);
  console.log(`Total    : ${s.total}`);
  console.log(`Average  : ${s.average}`);
  console.log(`Grade    : ${s.grade}`);
  console.log("--------------------------");
});

// 5. Print passed students
let passedStudents = evaluatedStudents.filter(s => s.average >= 35);
console.log("✅ Passed Students:");
passedStudents.forEach(s => {
  console.log(`${s.name} (Roll No: ${s.roll}) - Grade: ${s.grade}`);
});


/* Functional Requirements:
Store student details using an array of objects.

Calculate total and average marks for each student.

Assign grades based on average marks:

A+ → 90 and above

A → 75 to 89

B → 60 to 74

C → 35 to 59

F → Below 35

Display a detailed report of each student.

Filter and list only students who passed (average ≥ 35).*/
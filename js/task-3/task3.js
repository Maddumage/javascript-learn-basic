const students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    birthDate: "2000-01-15",
    grade: "A",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    birthDate: "1999-05-20",
    grade: "B",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    birthDate: "2001-03-10",
    grade: "A",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Brown",
    birthDate: "2002-07-25",
    grade: "C",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    birthDate: "2000-12-30",
    grade: "B",
  },
];

//search students based on fName, lName,grade
function searchStudents(searchText) {
  if (!searchText) return [];
  searchText = searchText.toLowerCase();
  return students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchText) ||
      student.lastName.toLowerCase().includes(searchText) ||
      student.grade.toLowerCase().includes(searchText)
  );
}

//  retrieve students older than 24 years
function getStudentsOlderThan24() {
  const currentYear = new Date().getFullYear();

  return students.filter((students) => {
    const birthYear = new Date(students.birthDate).getFullYear();
    return currentYear - birthYear > 24;
  });
}

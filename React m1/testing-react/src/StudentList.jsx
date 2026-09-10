export default function StudentList() {
    const students = [
  { id: 1, name: "Zahid", department: "CSE", present: true },
  { id: 2, name: "Ahmed", department: "EEE", present: false },
  { id: 3, name: "Rahim", department: "CSE", present: true }
];
return(
    <div>
        <h1>Student List</h1>
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    <li>{student.name} </li>
                       <li>Department: {student.department}</li>
                        <li>{student.present ? "Present" : "Absent"}</li>
                </li>
            ))}
        </ul>
    </div>
);
}
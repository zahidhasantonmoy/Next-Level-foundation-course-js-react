let students = [
  {
    id: 101,
    name: "Rahim",
    age: 20,
    department: "CSE",
    marks: {
      bangla: 75,
      english: 82,
      math: 90
    },
    skills: ["HTML", "CSS"]
  },
  {
    id: 102,
    name: "Karim",
    age: 22,
    department: "EEE",
    marks: {
      bangla: 65,
      english: 70,
      math: 72
    },
    skills: ["JavaScript"]
  },
  {
    id: 103,
    name: "Fahim",
    age: 21,
    department: "CSE",
    marks: {
      bangla: 88,
      english: 91,
      math: 85
    },
    skills: ["PHP", "MySQL"]
  }
];

function displayStudents(){
 for(let student of students)
    console.log(` ID: ${student.id} Name :${student.name} Department: ${student.department}`);


}
displayStudents();

let id=null;
let isfound=false;
function findStudent(id){
    for(student of students){
        if( student.id==id){
            console.log(` ID: ${student.id} Name :${student.name} Department: ${student.department}`);
            isfound=true;
            break;
        }
        

    }
        if(!isfound=false){
            console.log(" Student not found");
        }
}

findStudent(103);
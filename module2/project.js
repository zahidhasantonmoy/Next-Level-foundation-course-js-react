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

function findStudent(id){
    let isfound=false;
    for(student of students){
        
        if( student.id==id){
            console.log(` ID: ${student.id} Name :${student.name} Department: ${student.department}`);
            isfound=true;
            break;
        }
        

    }
        if(!isfound){
            console.log(" Student not found");
        }
}

findStudent(103);



// nested marks থেকে total বের করবে
// average বের করবে
// average 80+ → "Excellent"
// average 60+ → "Good"
// otherwise → "Need Improvement"

// 👉 এখানে অবশ্যই nested object + for...in + function ব্যবহার করবে।
function calculateResult(student){
 let total=0;
 let count=0;
 for(let subject in student.marks){
 total +=student.marks[subject];
 count++;
 }
console.log(`Total:${total}`);

let avg= total/count;
console.log(`AVG:${avg}`);
if(avg>=80){
    console.log("Excelent");
}
else if ( avg>=60){
    console.log("Good");
}
else{
    console.log("Need Improvement");
}
}
calculateResult(students[0]);
students[2].skills.pop();
students[2].skills.push("git");
students[2].skills.splice(1,0, "React");
students[2].skills.shift();
students[2].skills.unshift("HTML");
console.log(students[2]);


function addStudent(name, age, department){
    let newid=null;
   
    newid=students[students.length - 1].id+1;
    let newstudent={
        id: newid,
    name: name,
    age: age,
    department: department,
    marks: {
      bangla: 0,
      english: 0,
      math: 0
    },
    skills: ["PHP", "MySQL"]
  }

    }
   


addStudent("Zahid",25,"CSE");
console.log(students)
// const person = {
//   id: 101,
//   fullName: "Zahid Hasan",
//   city: "Dhaka"
// };

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// let {id,fullName,city}=person;
// console.log(fullName,city);
// let jointNum=[...numbers1,...numbers2];
// console.log(jointNum);


// const numbers = [10, 20, 30];

// numbers.forEach((num)=>{
//     console.log(num);
// });
// let newNum= numbers.map((num)=> num+5);
// console.log(newNum);



// const marks = [45, 80, 60, 90, 30];

// let big= marks.filter((num)=> num>50);

// let finded=marks.find((num)=> num<50);
// console.log(big);
// console.log(finded);

// const bills = [120, 300, 50, 450];


// let newBills=bills.reduce((accu, curr)=>{
//     return accu+curr+100;

// },0);
// console.log(newBills);


const student = {
  name: "Karim",
  marks: {
    bangla: 75
    // english নেই
  }
};

let englishMark=student.marks?.english;
console.log(englishMark);
let newEng=student.marks.english?? "0";
console.log(newEng);
let newAdd=student.address?.city?? "Dhaka";
console.log(newAdd);
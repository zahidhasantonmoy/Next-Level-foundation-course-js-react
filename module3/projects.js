const expenses = [
  {
    id: 1,
    title: "Lunch",
    amount: 250,
    category: "Food",
    paid: true
  },
  {
    id: 2,
    title: "Bus",
    amount: 80,
    category: "Transport",
    paid: true
  },
  {
    id: 3,
    title: "Book",
    amount: 600,
    category: "Education",
    paid: false
  },
  {
    id: 4,
    title: "Dinner",
    amount: 350,
    category: "Food",
    paid: true
  }
];

// let paid=expenses.filter((item)=>item.paid==true);
// console.log(paid);

// let newTitle=expenses.map((item)=>item.title);
// console.log(newTitle);
// let newAmount=expenses.reduce((accu,curr)=> {
//   return accu.amount>curr.amount ? accu : curr ;
// },expenses[0]);
// console.log(newAmount);
// let categories=expenses.map((item)=> item.category);

// let isFood= categories.includes("Food");
// console.log(isFood);

let {id,title,amount}=expenses[0];
console.log(id,title,amount);
const newExpense = {
  ...expenses[0],
  title: "Notun",
  amount: 500
};
console.log(newExpense);




const user = {
  name: "Zahid",
  profile: {
    city: "Dhaka"
  }
};


let newcity=user.profile?.city;
console.log(newcity);
let newphone=user.profile?.phone?? "Not available";
console.log(newphone);
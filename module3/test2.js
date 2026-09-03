////1111111111

const numbers1 = [12, 5, 8, 20, 15];
let total=numbers1.reduce((sum,item)=>{
    return sum+item;
},0);
console.log(total);
///////////////22222222222

const numbers2 = [45, 12, 78, 3, 29];
let min=numbers2.reduce((min,item)=>{
    return min<item ? min:item;
},numbers2[0]);
console.log(min);

////333333333333

const numbers3 = [2, 5, 2, 8, 2, 9, 5, 2];

let count=numbers3.reduce((count,item)=>{
    return item==2 ? count+1:count;
},0);
console.log(count);
//////44444444

const products = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 150 },
    { name: "Bag", price: 500 },
    { name: "Pencil", price: 10 }
];

let totalPrice=products.reduce((total,current)=>{
    return total+current.price;
},0);
console.log(totalPrice);


//////5555555

const students = [
    { name: "Rahim", marks: 72 },
    { name: "Karim", marks: 88 },
    { name: "Jamal", marks: 95 },
    { name: "Sakib", marks: 81 }
];

let highest=students.reduce((high,current)=>{
    return high>current.marks ? high : current.marks;

},students[0]);
console.log(highest);

////////////6666

const orders = [
    { id: 1, amount: 500, status: "paid" },
    { id: 2, amount: 800, status: "pending" },
    { id: 3, amount: 300, status: "paid" },
    { id: 4, amount: 1000, status: "cancelled" },
    { id: 5, amount: 700, status: "paid" }
];

let totalAmount=orders.filter((paid)=>paid.status=="paid").reduce((total,current)=>{
    return total+current.amount;
},0);
console.log(totalAmount);
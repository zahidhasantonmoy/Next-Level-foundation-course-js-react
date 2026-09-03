// const numbers1 = [10, 20, 30, 40, 50];

// let total=numbers.reduce((sum,item)=>{
//     return sum+item;
// },0);
// console.log(total);




const numbers = [5, 10, 15, 20, 25];

// let maximum=numbers.reduce((sum,item)=>{

//     return sum>item ? sum : item ;
// },0);

// console.log(maximum);
let minimum=numbers.reduce((sum,item)=>{
return sum<item ? sum:item},numbers[0]);
console.log(minimum);


// const numbers2 = [1, 2, 1, 3, 1, 4, 2];

// let one=numbers2.reduce((sum,item)=> {
//     return item==1 ? item+1 : sum;
// }0,);
//  console.log(one);

// const products = [
//   { name: "Pen", price: 20 },
//   { name: "Book", price: 200 },
//   { name: "Bag", price: 800 }
// ];


// let totalprice=products.reduce((sum,item)=>{
//     return item.price += sum; 
// }products[0],);

// console.loh(totalprice);

// let high=products.reduce.((sum,item)=> {
//     return sum>item.marks ? sum : item;
// },products[0]);
//  console.log(high);

//  const orders = [
//   { id: 1, amount: 500, delivered: true },
//   { id: 2, amount: 1000, delivered: false },
//   { id: 3, amount: 700, delivered: true },
//   { id: 4, amount: 300, delivered: true }
// ];

// let totalamount=orders.filter((num)=num.delivered==true).reduce((sum,item)=>{

//     return sum+item;
// },orders[0]);

// console.log(totalamount);

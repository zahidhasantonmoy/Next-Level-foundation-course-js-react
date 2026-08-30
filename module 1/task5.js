let productPrice = 500;
let quantity = 3;
let total=productPrice*quantity;
let discount;

if (total >= 2000){
    discount=total*(20/100);
}
else if (total >= 1000) {
    discount=total*(10/100);
}
else{
   discount=0;
}
final=total-discount;
console.log(` Total: ${total}
    Discount:${discount}
    Final:${final}`)
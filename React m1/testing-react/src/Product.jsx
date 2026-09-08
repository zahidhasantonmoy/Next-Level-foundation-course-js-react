export default function Product() {
    const productName = "Laptop";
    const price = 50000;
    const quantity = 2;
  return (
    <>
    <div>
      <h2>{productName}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: {price * quantity}</p>
    </div>
    </>
  );
}
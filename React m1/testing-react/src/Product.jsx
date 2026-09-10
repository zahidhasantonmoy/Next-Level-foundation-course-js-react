export default function Product(props) {
    const productName = props.name;
    const price = props.price ;

  return (
    <>
    <div>
      <h2>{productName}</h2>
      <p>Price: {price}</p>

    </div>
    </>
  );
}
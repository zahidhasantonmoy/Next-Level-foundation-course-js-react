export default function Order() {
    const product = "Laptop";
    const price = 60000;
    const quantity = 2;
    const discount = 5000;
    return(
        <>
        <div>
        <p>Product : {product}</p>
        <p>price: {price}</p>
            <p>quantity;{quantity}</p>
            <p>Subtotal:{quantity*price}</p>
        <p>discount: {discount}</p>
        <p>Final Price: {(quantity*price)-discount}</p>


        </div>
        
        </>
    );
}
import ProductCard from "./ProductCard";
import QuantityCounter from "./QuantityCounter";


export default function CartCard ({
id,
img,
productName,
productPrice,
productQuantity,
handleAddQuantity,
handleRemoveQuantity,
handleRemoveFromCart,
}) {

    console.log({ id, productName, productPrice, productQuantity });
    const formattedPrice = productPrice.replace("$", "");
    return (
        <div className="CartCard">
        
        <img src={img} alt="" />
        <p>{productName}</p>
        <QuantityCounter 
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        type="Cart"
        id={id}
        />
        <p>{productPrice}</p>
        <p>Total: ${(formattedPrice * productQuantity).toFixed(2)}</p>
        <button className="RemoveButtonn" onClick={() => handleRemoveFromCart({id, productQuantity, price})}>Remove</button>
        </div>
        

    );
}
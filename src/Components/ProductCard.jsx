import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
id,
img,
productName,
brand,
price,
productQuantity,
handleAddQuantity,
handleRemoveQuantity,
handleAddToCart,
}) {

// product quantity is undefined and I cant for the life of me fix it, it has broken all of the code and I cant figure it out.

    return (
        <div className="ProductCard">
            <h3>{productName}</h3>
            {/* product name */}
            <img src={img} alt="" />
            { /*image */}
            <h4>{brand}</h4>
            { /*brand name */}
            <QuantityCounter
            productQuantity={productQuantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            type="Product"
            id={id}
            />
            {/*item quantity */}
            <h3>{price}</h3>
            { /*item price */}
            <button onClick={() => handleAddToCart({id, productQuantity})}>Add to Cart</button>

        </div>
    
    );
}
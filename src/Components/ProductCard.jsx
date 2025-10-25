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


    const isFound = productQuantity.find((product) => product.id === id)
    const currentProductQuantity = isFound ? isFound.productQuantity : 0;

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
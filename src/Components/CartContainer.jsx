import CartCard from "./CartCard";

export default function CartContainer ({
cart,
handleAddQuantity,
handleRemoveQuantity,
handleRemoveFromCart,
handleEmptyCart,
}) {
    if (cart.length === 0) {
                return <div className="CartContainer"> <p>No items in cart</p> </div>
    }

    const totalPrice = cart.reduce((total, item) => {
        const formattedPrice = parseFloat(item.productPrice.replace("$", ""));
        return total += formattedPrice * (item.productQuantity)
    })
    return (
        <div className="CartContainer">
                {cart.map((item) => (
                    <CartCard
                        key={item.id}
                        img={item.image}
                        {...item}
                        productQuantity={item.productQuantity}
                        handleAddQuantity={handleAddQuantity}
                        handleRemoveQuantity={handleRemoveQuantity}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                ))
            }

            <button id="BuyButton">
                <p>Checkout: ${totalPrice}</p>
            </button>
            <button className="RemoveButton" onClick={handleEmptyCart}>Empty Cart</button>

        </div>
    );
}
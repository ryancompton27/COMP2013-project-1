import { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

export default function GroceriesAppContainer ({products}) {

    const [productQuantity, setProductQuantity] = useState(
        products.map((product) => ({
            id: product.id,
            ...product,
            productQuantity: 0,
            productPrice: product.price,
        }))
    );

    //create the cart array to hold the products
    const [cart, setCart] = useState([])


    //add to an amount of an item
    const handleAddQuantity = (productId, type) => {
        if (type === "Product") {
            const updateProductQuantity = productQuantity.map((product) => {
                // if the ids match, increase the quantity by 1
                if (product.id === productId) {
                    return {...product, productQuantity: product.productQuantity + 1}
                }
                return product
            });
            setProductQuantity(updateProductQuantity);
            return;
        }
        else if (type === "Cart"){
            const updateCartQuantity = cart.map((product) => {
                if (product.id === productId) {
                    return {...product, productQuantity: product.productQuantity + 1}
                }
                return product
            });
            setCart(updateCartQuantity);
            return;
        }
        
    }

    //removes to an amount of an item
    const handleRemoveQuantity = (productId, type) => {
        if (type === "Product") {
            const updateProductQuantity = productQuantity.map((product) => {
                //same but removes one to quantity
                if (product.id === productId && product.productQuantity > 1) {
                    return {...product, productQuantity: product.productQuantity - 1}
                }
                return product
            });
            setProductQuantity(updateProductQuantity);
            return;
        }
        else if (type === "Cart"){
            const updateCartQuantity = cart.map((product) => {
                if (product.id === productId && product.productQuantity > 0) {
                    return {...product, productQuantity: product.productQuantity - 1}
                }
                return product
            });
            setCart(updateCartQuantity);
            return;
        }
        
    }

    const handleAddToCart = (productToAdd) => {
        const currentProduct = products.find((product) => product.id === productToAdd.id)
        const productInCart = cart.find((product) => product.id === productToAdd.id)
        if (productToAdd.productQuantity === 0) {
            alert("Cannot add 0 items to cart, please increase their quantity before adding them");
            return;
        }
        //makes sure the item isnt in the cart and adds the 
        if (!productInCart) {
            setCart((previousCart) => {
                return [...previousCart, {...currentProduct}]
            })
        }
        else {
            const updateCart = cart.map((product) => {
                return product.id === productToAdd.id ? {...product, productQuantity: product.productQuantity + productToAdd.productQuantity} : product;
            });

            setCart(updateCart);
            return;
        }
    }

    const handleRemoveFromCart = (productToRemove) => {
        const updateCart = cart.filter((product) => product.id !== productToRemove.id);
        //https://www.geeksforgeeks.org/reactjs/how-to-delete-an-item-from-state-array-in-reactjs/
        //used this article to help me remove the product from the array
        setCart(updateCart);
    }

    const handleEmptyCart = () => {
        setCart([]);
    }

    return(

        <div className="GroceriesApp-Container">
            <NavBar cart={cart}/>

            <ProductsContainer 
            products={products} 
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleAddToCart={handleAddToCart}
            />

            <CartContainer 
            cart={cart} 
            productQuantity={productQuantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />

        </div>
        
    )
}
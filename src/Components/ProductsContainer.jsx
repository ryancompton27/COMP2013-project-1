import ProductCard from "./ProductCard";


export default function ProductsContainer({
    products,
    productQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart,
}) {

    return (

        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard
                key={product.id}
                img = {product.image}
                {...product}
                productQuantity={product.productQuantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                handleAddToCart={handleAddToCart}
                />
            ))}
        </div>
    )
}


export default function QuantityCounter({
id,
productQuantity,
handleAddQuantity,
handleRemoveQuantity,
type,
}) {
    return (
        <div className="ProductQuantityDiv">
            <button className="QuantityBtn" onClick={() => handleRemoveQuantity(id, type)}>-</button>
            <p>{productQuantity}</p>
            <button className="QuantityBtn" onClick={() => handleAddQuantity(id, type)}>+</button>
        </div>

    )
}
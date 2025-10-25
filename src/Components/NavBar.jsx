import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

export default function NavBar({
    cart,
}) {
    const isFull = cart.length > 0;
    const cartIcon = isFull ? cartFull : cartEmpty;
    return (
        <div className="NavBar">
            <h3 className="NavUser">Welcome, User</h3>
            <h2 className="NavTitle">Groceries App 🍎</h2>
            <div className="NavCart">
                <img src={cartIcon} alt="" />
            </div>
        </div>
    );
}
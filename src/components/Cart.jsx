import { useContext, use } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function Cart({onUpdateItemQuantity }) {
  // if you do this: 
  // const cartCtx = useContext(CartContext);
  // then you have to use cartCtx.item 

  // if you destruct, you can just use item:
  // const {item} = useContext{CartContext}
  const {items} = useContext(CartContext);
  {
    /*
  you can use import useContext and use it as such:
  const cartCtx = useContext(CartContext);

  OR 

  you can import use and use it as such:
  const cartCtx = use(CartContext);

  Which one to use? 

  use hook  is a littl more flexible: 
    -> It can only be used inside reach components 
    -> It can be use inside an If statement 
    -> Normally you can't use react hooks in loops or conditional statememnts 
    -> this can't be accomplished with useContext 
    -> use is only available with React v.19. If not, use useContext 
  */
  }

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

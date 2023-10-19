import Modal from '../UI/Modal'
import classes from "./cart.module.css";
import CartItem from './cartItem'
import { useTechItemsContext } from '../../store/context'

const Cart = ({ onClose }) => {
  const { items , totalPrice , addItem , removeItem }= useTechItemsContext()
  
  const finalprice = `$${totalPrice.toFixed(2)}`

  const cartRemManager = (id) => {
    removeItem(id)
  }

  const cartAddManager = (item) => {
    addItem({...item,amount:1})
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
        {items.map((item)=>(
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                image={item.image}
                onRem={cartRemManager.bind(null, item.id)}
                onAdd={cartAddManager.bind(null, item)}
            />
        ))}
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{finalprice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>Close</button>
      </div>
    </Modal>
  )
}

export default Cart

import React from 'react'
import styles from './Cart.module.scss'

const Cart = props => {
  const {
    quantity = 0,
    basketToggleVisibleHandler,
  } = props

  return (
    <div className={styles.Cart} onClick={basketToggleVisibleHandler}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  )
}

export default Cart

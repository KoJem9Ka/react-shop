import React from 'react'
import styles from './BasketList.module.scss'
import BasketItem from './BasketItem/BasketItem'
import Popup from '../../layout/Popup'
import Line from '../../layout/Line'

const BasketList = props => {
  const {
    order = [],
    basketToggleVisibleHandler,
    handlers,
  } = props

  let total = 0
  return (
    <Popup
      closeHandler={basketToggleVisibleHandler}
      contentClasses={styles.BasketListContent}
      outerClasses={styles.BasketListOuter}
      title='Корзина'
    >
      {order.length
        ? <>
          <div className={styles.ordersTable}>
            {order.map(orderItem => {
              total += orderItem.price * orderItem.quantity
              return (
                <BasketItem
                  key={orderItem.id}
                  {...orderItem}
                  handlers={handlers}
                />
              )
            })}
          </div>
          <Line className={styles.Line}/>
          <p className={styles.Summary}>
            Итого:
            <span>
              {total}
              {' '}
              $
            </span>
          </p>
        </>
        : <h3>Корзина пуста</h3>}
    </Popup>
  )
}

export default BasketList

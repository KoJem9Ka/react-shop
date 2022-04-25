import React from 'react'
import styles from './GoodsList.module.scss'
import GoodsItem from './GoodsItem/GoodsItem'

const GoodsList = props => {
  const {
    goods = [],
    addToBasket,
  } = props

  return (
    <div className={styles.GoodsList}>
      {goods
        ? goods.map(item => (
          <GoodsItem key={item.mainId} addToBasket={addToBasket} {...item}/>
        ))
        : <h3>fetch error!</h3>}
    </div>
  )
}

export default GoodsList

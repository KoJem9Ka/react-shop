import React, { useEffect, useState } from 'react'
import styles from './Shop.module.scss'
import Container from '../../layout/Container'
import { API_KEY, API_URL } from '../../config'
import Preloader from '../../components/Preloader/Preloader'
import GoodsList from '../../components/GoodsList/GoodsList'
import Cart from '../../components/Cart/Cart'
import BasketList from '../../components/BasketList/BasketList'
import Alerts from '../../layout/Alerts/Alerts'

const Shop = () => {
  const
    [ goods, setGoods ] = useState([]),
    [ loading, setLoading ] = useState(true),
    [ order, setOrder ] = useState([]),
    [ isBasketShow, setIsBasketShow ] = useState(false),
    [ alerts, setAlerts ] = useState([])


  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then(response => response.json())
      .then(data => {
        data.shop && setGoods(data.shop)
        setLoading(false)
      })
  }, [])

  const
    addToBasket = item => {
      console.warn('addToBasket')
      const
        orderItemIndex = order.findIndex(orderItem => orderItem.id === item.id),
        found = orderItemIndex !== -1
      let newOrder = order.slice()
      if (!found)
        newOrder.push({ ...item, quantity: 1 })
      else
        ++newOrder[orderItemIndex].quantity
      setOrder(newOrder)

      setAlerts([
        ...alerts.filter(alert => alert.visible && alert.id !== item.id),
        {
          id: item.id,
          visible: true,
          name: item.name,
          count: newOrder[found ? orderItemIndex : newOrder.length - 1].quantity,
        }
      ])
    },
    subFromBasket = id => setOrder(order
      .map(orderItem => ({
        ...orderItem,
        quantity: orderItem.quantity - (orderItem.id === id ? 1 : 0),
      }))
      .filter(orderItem => orderItem.quantity > 0)),
    delFromBasket = id => setOrder(order.filter(orderItem => orderItem.id !== id)),
    basketToggleVisibleHandler = () => {
      setAlerts([])
      setIsBasketShow(!isBasketShow)
    },
    removeAlert = id => setAlerts(alerts => alerts.filter(alert => (alert.id !== id)))

  useEffect(function alertsChange() {
    console.warn('alerts: ', alerts.length)
  }, [ alerts ])

  return (
    <Container
      gap={'2rem'}
      h2Text='Магазин'
      innerClasses={styles.ShopInner}
      outerClasses={styles.ShopOuter}
      outerTag='section'
    >
      <Cart basketToggleVisibleHandler={basketToggleVisibleHandler} quantity={order.length}/>
      {loading
        ? <Preloader/>
        : <GoodsList addToBasket={addToBasket} goods={goods}/>}
      {isBasketShow && <BasketList
        basketToggleVisibleHandler={basketToggleVisibleHandler}
        handlers={{ addToBasket, subFromBasket, delFromBasket }}
        order={order}
      />}
      <Alerts alertHandlers={{ removeAlert, basketToggleVisibleHandler }} alerts={alerts}/>
    </Container>
  )
}

export default Shop














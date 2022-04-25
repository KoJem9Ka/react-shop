import styles from './Shop.module.scss'
import Container from '../../layout/Container';
import {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../../config';
import Preloader from '../../components/Preloader/Preloader';
import GoodsList from '../../components/GoodsList/GoodsList';
import Cart from '../../components/Cart/Cart';
import BasketList from '../../components/BasketList/BasketList';
import Alerts from '../../layout/Alerts/Alerts';

const Shop = props => {
	const
		[goods, setGoods] = useState([]),
		[loading, setLoading] = useState(true),
		[order, setOrder] = useState([]),
		[isBasketShow, setIsBasketShow] = useState(false),
		[alerts, setAlerts] = useState([])


	useEffect(function getGoods() {
		fetch(API_URL, {headers: {'Authorization': API_KEY}})
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
			if (!found) {
				newOrder.push({...item, quantity: 1})
			} else
				++newOrder[orderItemIndex].quantity
			setOrder(newOrder)

			setAlerts([
				...alerts.filter(alert => alert.visible && alert.id !== item.id),
				{
					id: item.id,
					visible: true,
					name: item.name,
					count: newOrder[found ? orderItemIndex : newOrder.length - 1].quantity
				}
			])
		},
		subFromBasket = id => setOrder(order
			.map(orderItem => ({
				...orderItem,
				quantity: orderItem.quantity - (orderItem.id === id ? 1 : 0)
			}))
			.filter(orderItem => orderItem.quantity > 0)),
		delFromBasket = id => setOrder(order.filter(orderItem => orderItem.id !== id)),
		basketToggleVisibleHandler = () => {
			setAlerts([])
			setIsBasketShow(!isBasketShow);
		},
		removeAlert = id => setAlerts(alerts => alerts.filter(alert => (alert.id !== id)))

	useEffect(function alertsChange() {
		console.warn('alerts: ', alerts.length)
	}, [alerts])

	return (
		<Container
			outerTag='section'
			outerClasses={styles.ShopOuter}
			innerClasses={styles.ShopInner}
			h2Text='Магазин'
			gap={'2rem'}
		>
			<Cart quantity={order.length} basketToggleVisibleHandler={basketToggleVisibleHandler}/>
			{loading
				? <Preloader/>
				: <GoodsList goods={goods} addToBasket={addToBasket}/>}
			{isBasketShow && <BasketList
				order={order}
				basketToggleVisibleHandler={basketToggleVisibleHandler}
				handlers={{addToBasket, subFromBasket, delFromBasket}}
			/>}
			<Alerts alerts={alerts} alertHandlers={{removeAlert, basketToggleVisibleHandler}}/>
		</Container>
	)
}

export default Shop














import styles from './BasketList.module.scss'
import BasketItem from './BasketItem/BasketItem';
import Popup from '../../layout/Popup';
import Line from '../../layout/Line';

const BasketList = props => {
	const {
		order = [],
		basketToggleVisibleHandler,
		addToBasket,
		subFromBasket,
		handlers
	} = props

	let total = 0
	return (
		<Popup
			title='Корзина'
			closeHandler={basketToggleVisibleHandler}
			outerClasses={styles.BasketListOuter}
			contentClasses={styles.BasketListContent}
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
									handlers={handlers}/>
							);
						})}
					</div>
					<Line className={styles.Line}/>
					<p className={styles.Summary}>Итого: <span>{total} $</span></p>
				</>
				: <h3>Корзина пуста</h3>}
		</Popup>
	)
}

export default BasketList
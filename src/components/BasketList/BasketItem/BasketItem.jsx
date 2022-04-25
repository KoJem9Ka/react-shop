import styles from './BasketItem.module.scss'

const BasketItem = props => {
	const {
			id,
			name,
			price,
			quantity,
			handlers
		} = props,
		addToBasket = () => handlers.addToBasket({id}),
		subFromBasket = () => handlers.subFromBasket(id),
		delFromBasket = () => handlers.delFromBasket(id)

	return (
		<>
			<div>{name}</div>
			<div>{price}</div>
			<div>x {quantity}</div>
			<div>= {price * quantity} $</div>
			<div className={styles.btns}>
				<div onClick={addToBasket}>&#9650;</div>
				<div onClick={subFromBasket}>&#9660;</div>
				<div onClick={delFromBasket}>&times;</div>
			</div>
		</>
	)
}

export default BasketItem
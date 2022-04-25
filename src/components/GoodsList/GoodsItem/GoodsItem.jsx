import styles from './GoodsItem.module.scss'

const GoodsItem = props => {
	const
		card = {
			id: props.mainId,
			name: props.displayName,
			description: props.displayDescription,
			background: props.displayAssets[0].background,
			price: props.price.finalPrice
		},
		{addToBasket} = props

	return (
		<div className={styles.GoodsItem} id={card.id}>
			<div className={styles.GoodsItemImage}>
				<img src={card.background} width={300} height={300} alt='card poster'/>
				<span>{card.name}</span>
			</div>
			<p className={styles.GoodsItemDescription}>{card.description}</p>
			<div className={styles.actions}>
				<span>{card.price} $</span>
				<button onClick={addToBasket.bindArgs({
					id: card.id,
					name: card.name,
					price: card.price
				})}>Купить
				</button>
			</div>
		</div>
	)
}

export default GoodsItem
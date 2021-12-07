const StoreItems = (props) => {
    const logFunction = func => {
        console.log(func)
    }
    return(
        <ul className="item-list store--item-list">
            {props.storeItems.map(el => {
                return(
                    <li key={el.id}>
                        <div className="store--item-icon">
                            <img src={`/assets/icons/${el.id}.svg`} alt={el.name} />
                        </div>
                        <button
                            onClick={() => props.handleCart(el)}
                        >Add to cart</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default StoreItems
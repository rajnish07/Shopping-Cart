function Product({product, add, remove}) {
    return <div className="product">
        <div id="product-img">
            <img src="./img/product.png" alt="product-img"/>
        </div>
        <div id="product-desc">
            <p id="product-title">{product.title}</p>
            <p>{product.desc}</p>
        </div>
        <div className="quantity">
            <div>
            <button className="qnty-btn" onClick={() => remove(product.id)}>-</button>
            <input type="text" disabled value={product.quantity ? product.quantity : 1 }></input>
            <button className="qnty-btn" onClick={() => add(product.id)}>+</button>
            </div>
        </div>
        <div id="amount">
            <p>{`${product.currency} ${product.price}`}</p>
        </div>
    </div>
}

export default Product;
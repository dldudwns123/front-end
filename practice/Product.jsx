import React from 'react'

const Product = ({product}) => {
    const {id, name, price} = product;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{parseInt(price).toLocaleString()}</td>
        </tr>
    )
}
export default Product
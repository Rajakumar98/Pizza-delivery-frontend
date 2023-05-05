import React from 'react'
import "./SortComponent.css"
import { useContext } from 'react'
import { ProductContext } from '../../Context/product.context'
export default function SortComponent() {
    const { Filterthroughprice } = useContext(ProductContext);
    return (
        <div className='sort-component'>
            <select className='dropdowntag' onChange={Filterthroughprice} id="cars" >
                <option value="none" >All</option>
                <option value="increasing">Increasing</option>
                <option value="decreasing">Decreasing</option>


            </select>

        </div>
    )
}

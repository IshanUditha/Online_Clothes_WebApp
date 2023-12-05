 import React from 'react'
 import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt=''/>
            <p>{props.name}</p>
            <div className='item-price'>
                <div className='item-price-new'>
                    LKR {props.new_price}
                </div>
                <div className='item-price-old'>
                    LKR {props.old_price}

                </div>

            </div>
            <div className='star'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

            </div>
            
            
        </div>
    )
}

export default Item
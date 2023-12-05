 import React from 'react'
 import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
           <Link to={`/product/${props.id}`} style={{width:'350px',display:'flex',flexDirection:'column'  }}><img src={props.image} onClick={window.scrollTo(0,0)} alt=''/> </Link>
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
            <i class="fa-solid fa-star-half-stroke"></i>

            </div>
            
            
        </div>
    )
}

export default Item

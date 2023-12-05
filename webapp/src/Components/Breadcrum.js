import React from 'react'
import './Breadcrum.css'

const Breadcrum = ({b_product}) => {

    return (
        <div className='breadcrum'>
          Home <i class="fa fa-chevron-right" aria-hidden="true"></i> SHOP <i class="fa fa-chevron-right" aria-hidden="true"></i> {b_product.category} <i class="fa fa-chevron-right" aria-hidden="true"></i> {b_product.name}
            
        </div>
    )
}

export default Breadcrum

import { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContextProvider'


const ProductDisplay = ({d_product}) => {
    const {addToCart} =useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={d_product.image} alt=''/>
                    <img src={d_product.image} alt=''/>
                    <img src={d_product.image} alt=''/>
                    <img src={d_product.image} alt=''/>

                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={d_product.image} alt=''/>
                </div>

            </div>
            <div className='productdisplay-right'>
                <h1>{d_product.name}</h1>
            
                <div className='productdisplay-right-star'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>(120)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>LKR {d_product.old_price}</div>
                    <div className='productdisplay-right-prices-new'>LKR {d_product.new_price}</div>

                </div>
                <div className='productdisplay-right-description'>
                    <p>Model Height 5' 6" wearing size M Please bear in mind that the photo may be slightly different from the actual item in terms of colour due to lighting conditions or the display used to view</p>
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div> 
                    </div>
                </div>
                <button onClick={()=>{addToCart(d_product.id)}}>ADD TO CART</button>
                <div className='productdisplay-right-category-tag'>
                    <span>Category : </span>{d_product.category}<br />
                    <span>Tags : </span> Modern, Latest
                </div>
                
            </div>
        
        </div>
    )
}

export default ProductDisplay

import { useContext } from "react"
import { ShopContext } from "../Context/ShopContextProvider"
import './ShopCategory.css'
import Item from "../Components/Item"

const ShopCategory = (props) => {
    const {all_product} =useContext(ShopContext)
    return (
        <div className="shop-category">
            <div className="banner-container">
                <div className="banner">
                    <h1>FLAT 50% OFF</h1>
                    <p><span>12 </span>Hours<span> 20 </span>Mins</p>
                    <button>Explore Now</button>
                    

                </div>
                <div className="banner-image">
                    <img src={props.bannerImg} alt=""/>
                </div>
            
            </div>
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by <i class="fa-solid fa-caret-down"></i>

                </div>

            </div>
            <div className="shopcategory-products">
                {all_product.map((item,index)=>{
                    if(props.category===item.category){
                        return <Item
                        key ={index}
                        id ={item.id}
                        name ={item.name}
                        image ={item.image}
                        new_price ={item.new_price}
                        old_price ={item.old_price}
                        />
                    }else{
                        return null
                    }

                })}

            </div>
            <div className="shopcategory-loadmore">
                <button>Explore More</button>
            </div>

        </div>
       
    )
}

export default ShopCategory

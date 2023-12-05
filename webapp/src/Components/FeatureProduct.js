import './FeatureProduct.css'
import data_product from '../Assets/Data'
import Item from './Item'

const FeatureProduct = () => {
    return (
        <div className='feature-product'>
            <h1>FEATURE PRODUCT IN WOMEN</h1>
            <hr/>
            <div className='feature-item' >
                {data_product.map((item,index)=>{
                    return <Item
                    key ={index}
                    id ={item.id}
                    name ={item.name}
                    image ={item.image}
                    new_price ={item.new_price}
                    old_price ={item.old_price}/>

                })}

            </div>
        </div>
    )
}

export default FeatureProduct

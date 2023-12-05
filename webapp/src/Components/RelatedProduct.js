
import related_product from '../Assets/Related'
import Item from './Item'
import './RelatedProduct.css'

const RelatedProduct = () => {
    return (
        <div className='relatedproduct'>
            <h1>Related Products</h1>
            <hr />
            <div className='imagecollection'>
                {related_product.map((item,index)=>{
                    return <Item
                    key ={index}
                    id ={item.id}
                    name ={item.name}
                    image = {item.image}
                    new_price ={item.new_price}
                    old_price ={item.old_price}
                    />

                })}

            </div>
            
        </div>
    )
}

export default RelatedProduct

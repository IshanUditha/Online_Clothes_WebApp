import { useContext } from "react"
import { ShopContext } from "../Context/ShopContextProvider"
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import RelatedProduct from "../Components/RelatedProduct";


const Product = () => {
    const {all_product} =useContext(ShopContext);
    const {productId} =useParams();
    const product = all_product.find((e)=>e.id=== Number(productId))
    return (
        <div>
            <Breadcrum b_product={product}/>
            <ProductDisplay d_product={product}/>
            <RelatedProduct/>
        </div>
    )
}

export default Product

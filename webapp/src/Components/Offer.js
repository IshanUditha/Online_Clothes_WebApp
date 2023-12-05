import './Offer.css'
import ex_image from '../Assets/hero1.png'

const Offer = () => {
    return (
        <div className='offer'>
            <div className='offer-left'>
                <h1>Exclusive</h1>
                <h1>offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>

            </div>
            <div className='offer-right'>
                <img src={ex_image} alt=''/>

            </div>
            
        </div>
    )
}

export default Offer

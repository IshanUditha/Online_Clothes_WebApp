import './Hero.css'
import hero_image from '../Assets/hero.png'
import hero_image1 from '../Assets/hero1.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <i class="fa-solid fa-hand-sparkles"></i>

                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
    
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <i class="fa-solid fa-arrow-right"></i>

                </div>
                

            </div>
            <div className='hero-right'>
            <img src={hero_image1} alt=''/>
            <img src={hero_image} alt=''/>
            

            </div>
            
        </div>
    )
}

export default Hero

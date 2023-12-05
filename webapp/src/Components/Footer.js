import './Footer.css'
import footer_logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=''/>

            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            <div className='footer-social-icon'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>

            </div>
            <div className='footer-copyright'>
                <p>Copyright @ 2023 - All Right Reserved.</p>

            </div>
            
            
        </div>
    )
}

export default Footer

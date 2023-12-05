import './LoginSingUp.css'

const LoginSignUp = () => {
    return (
        <div className="loginsignup">
            <div className="loginsingup-container">
                <h1>Sign Up</h1>
                <div className="loginsingup-fields">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="password" placeholder="Enter Your Password"/>

                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsingup-agree">
                    <input type="checkbox" style={{color:'red'}} name="" id=""/>
                    <p>By continuing,i agree to the terms of use & privacy policy. </p>

                </div>
            </div>
            
            
        </div>
    )
}

export default LoginSignUp

import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container">
            <h1>Login</h1>
            <h2>Hey, Enter your details below</h2>
            <div>
            <input type="text" placeholder="Enter your Email"/>
            </div>
            <div>
            <input type="password" placeholder="Password"/>
            </div>
            <div>
                <p>Having trouble signing in?</p>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                <p>-Or Sign in with-</p>
            </div>
            <div>
                <span>
                    <button>Google</button>
                </span>
                <span>
                    <button>Apple ID</button>
                </span>
                <span>
                    <button>Facebook</button>
                </span>
            </div>
            <div>
                <span>Dont have an account?</span>
                <span>Sign up</span>
            </div>
        </div>
        <div>
        <p>Copyright @gantavya99 | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import { Axios } from '../../config/axios'

export const SignUp = () => {
    const handleSignup = async (email, password) =>{
        const data ={ email, password }
        await Axios.post('/create', data );
        console.log(data);
    }
    return (
        <div>
            <h1>Sign Up Page</h1>
            <form action="">
            <div>
                <label htmlFor="email">Email:</label>
                <input type='email' id="email"  name="name" placeholder="Enter your email" size="50" required/>
            </div><br/>
            <div>
                <label htmlFor="password">Password:</label>
                <input type='password' id="password" name="password" placeholder="Enter your password" size="50" required/>
            </div><br/>
            <div>
                <label htmlFor="password">Confirm Password:</label>
                <input type='password' id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" size="50" required/>
            </div><br/>
            <div>
                <div><button type="submit" value="Submit" onSubmit={handleSignup}>Sign Up</button></div><br/>
                <div><a href="/">Already have an account? Sign In</a></div>
                
            </div>
            </form>    
        </div>
    )
}

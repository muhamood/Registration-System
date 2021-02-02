import React from 'react'

export const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <form action="">
            <div>
                <label for="email">Email:</label>
                <input type='email' id="email" placeholder="Enter your email" size="50" required/>
            </div><br/>
            <div>
                <label for="password">Password:</label>
                <input type='password' id="password" placeholder="Enter your password" size="50" required/>
            </div><br/>
            <div>
                <button type="submit" value="Submit">Login</button>
            </div>
            </form>    
        </div>
    )
}

import React from 'react' 
import '../styles.css'

const LoginForm = ({ username, password, handleLoginChange, handleLogin,}) =>{
    return (
        <div className="container__login">
        <form className="login__form" method="POST" onSubmit={handleLogin}>
          <div className="form__group">
            <label className="form__label" htmlFor="username">Username:</label>
            <input className="form__field" 
              type="text"
              name="username" 
              value={username}
              onChange={handleLoginChange}></input>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">Password:</label>
            <input className="form__field" 
              type="password" 
              name="password"
              value={password}
              onChange={handleLoginChange}></input>
          </div>
          <button className="form__btn btn__submit" type="submit">Login</button>
        </form>
      </div>
    )
}

export default LoginForm
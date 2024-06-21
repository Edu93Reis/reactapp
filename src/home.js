import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        //to do
    }

    return (
        <div className="mainContainer">
            <div className="{'titleContainer'}">
                <div>Bem-vindo!</div>               
            </div>
            <div>Home Page</div>
            <div className={'inputButton'}
                 type="button"
                 onclick={onButtonClick}
                 value={loggeIn ? 'Log Out' : 'Log In'}
                >
                { loggedIn ? <div> Seu e-mail é: {email} </div> : <div/>}
            </div>
        </div>
    )

}

export default Home;
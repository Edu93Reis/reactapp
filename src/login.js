import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [ email, setEmail ] = useState('')
    const [ passwrod, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        //to do
    }

    return (
        <div className={'mainContainer'}>
           <div className={'titleContainer'}>
                <div>Login</div>
            </div> 
            <br/>
            <div className={'inputContainer'}>
                <input value={email}
                       placeholder="Enter your email here"
                       onChange={(ev) => setEmail(ev.target.value)}
                       className={'inputBox'}
                    />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input value={password}
                       placeholder="Enter your email here"
                       onChange={(ev) => setPassword(ev.target.value)}
                       className={'inputBox'} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    )

}

export default Login
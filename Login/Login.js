import React, { useState } from "react";
import './login.css';
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginInfoContext } from "../LoginContext/DataContext";
import { useContext } from "react";

export const Login = (props) => {

    const { CurrentAccount, SetCurrentAccount, Access, SetAccess } = useContext(LoginInfoContext)

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    const navigate = useNavigate();

    function handleClick() {
        navigate("/Register")
    }


    const connectWallet = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log('Metamask not detected')
                return
            }
            let chainId = await ethereum.request({ method: 'eth_chainId' })
            console.log('Connected to chain:' + chainId)
            const rinkebyChainId = '0x5'
            if (chainId !== rinkebyChainId) {
                alert('You are not connected to the Rinkeby Testnet!')
                return
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            SetCurrentAccount(accounts[0])
            SetAccess(true)
            if(Access){
                navigate(`/login/${props.name}`)
            }
        } catch (error) {
            console.log('Error connecting to metamask', error)
        }
    }
    

    return (
        <div className="auth-form-container1">
            <h2>{props.name}</h2>
            <form className="login-form1" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={connectWallet}>
                    LogIn
                </button>
            </form>
            <button className="link-btn1" onClick={handleClick}>Don't have an account? Register here.</button>
        </div>
    )
}


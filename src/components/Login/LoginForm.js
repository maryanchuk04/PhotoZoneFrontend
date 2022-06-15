import React, { useState } from 'react'
import { OutlinedInput } from '@mui/material'
import {Alert} from '@mui/material'
import UserService from '../../Services/UserService'
import { getErrorMessage } from '../../Services/Helpers';
import AlertWrapper from '../Shared/Alert/AlertWrapper';
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from './GoogleLogin';
import GoogleLogin from 'react-google-login';

const userServise = new UserService();

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] =useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [registerEmail, setRegisterEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [confirmPassord, setConfirmPassord] = useState('')
    const [registerName, setRegisterName] = useState('')
    const [isAlert,setIsAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')
    
    async function SignIn(e){
        e.preventDefault();
        const data = {
            email : loginEmail,
            password : loginPassword
        }
        userServise.Authentificate(data).then((res)=>{
            if(res.status !== 200){
                setIsAlert(true);
                setAlertMessage(res.data.error)
                setLoginPassword("");
                
            }
            if(res.status === 200){
                localStorage.setItem("token", JSON.stringify(res.data));
                navigate("/profile")
                props.onClose();
            }
        })
        
    }
    const SignUp =(e) =>{
        e.preventDefault();
        const data = {
            email : registerEmail,
            password : registerPassword,
            userName : registerName
        }
        userServise.Registration(data).then((res)=>{
            if (res.status !== 200){
                setIsAlert(true)
                setAlertMessage(res.data.error)
            }
            
            if(res.status === 200){
                localStorage.setItem("token", JSON.stringify(res.data));
                navigate("/profile")
                props.onClose();
            }   
        })
    }

    const googleLogin = (response) =>{
        console.log(response);
        console.log(response.profileObj);
        const data = {
            email : response?.profileObj?.email,
            avatar : response?.profileObj?.imageUrl,
            userName : response?.profileObj?.name
        }
        console.log(data)
        userServise.googleLogin(data).then((res)=>{
            console.log(res);
            if (res.status !== 200){
                setIsAlert(true)
                setAlertMessage(res.data.error)
               
            }
            
            if(res.status === 200){
                localStorage.setItem("token", JSON.stringify(res.data));
                navigate("/profile")
                props.onClose();
            }   
        }).catch((err)=>{
           console.log(err)
        })
       
    }

    const alertClose = () =>{
        setIsAlert(false);
    }
  return isSignInForm ?
  <>
    <form className ="form-login" onSubmit ={(e)=>SignIn(e)}>
        <h1>Sign In</h1>
        <p>You don't have an account yet? <span onClick ={()=>setIsSignInForm(false)}>Sign Up</span></p>
        <div className="field">
            <p>Email adress</p>
            <OutlinedInput placeholder ={"Enter email adress"} type='email'required onChange={(e)=>setLoginEmail(e.target.value)} value ={loginEmail}/>
        </div>
        <div className="field">
            <p>Password</p>
            <OutlinedInput placeholder ={"Password"} type='password' required onChange ={(e)=>setLoginPassword(e.target.value)} value = {loginPassword}/>
        </div>
        <p id = 'ErrorHandler'>{alertMessage}</p>
        <button id = 'SignIn' type='submit'>Sing In</button>
        <section id='title-wrapper'>
            <div class='line'></div>
            <div class='title'>or</div>
            <div class='line'></div>
        </section>
        <GoogleLogin
            clientId="898187581146-9rq8rn71544fu2r60nb2cfg0t4vi1i4l.apps.googleusercontent.com"
            buttonText="Login"
            render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} id = 'GoogleButton'>
                    <div className="line2">
                        <img src="https://img.icons8.com/color/344/google-logo.png" alt="" id="googleIcon"/>Continue with Google
                    </div>
                </button>
            )}
            
            onSuccess={googleLogin}
            isSingnedIn={true}
            onFailure={googleLogin}
            cookiePolicy={'single_host_origin'}/>
        
    </form>
    
    </>
    : <form className ='signUp-form' onSubmit ={(e)=>SignUp(e)}>
        <h1>Sign Up</h1>
        <p>Allready have account? <span onClick ={()=>setIsSignInForm(true)}>Sign In</span></p>
        <div className="field">
            <p>UserName</p>
            <OutlinedInput placeholder ={"Enter user name"}  required onChange ={e=> setRegisterName(e.target.value)} value = {registerName}/>
        </div>
        <div className="field">
            <p>Email adress</p>
            <OutlinedInput placeholder ={"Enter email adress"} required type = 'email' onChange ={e=> setRegisterEmail(e.target.value)} value ={registerEmail}/>
        </div>
        <div className="field_line">
            <div className="field">
                <p>Password</p>
                <OutlinedInput placeholder ={"Enter password"} type = 'password' required onChange ={e=>setRegisterPassword(e.target.value)} value ={registerPassword}/>
            </div>
            <div className="field">
                <p>Confirm password</p>
                <OutlinedInput placeholder ={"Confirm password"}type = 'password' required onChange={e=>setConfirmPassord(e.target.value)} value ={confirmPassord} />
            </div>
        </div>
        <p id = 'ErrorHandler'>{alertMessage}</p>
        <button id ="SignUp" type ='submit' >Sign Up</button>
    </form>
  
}

export default LoginForm
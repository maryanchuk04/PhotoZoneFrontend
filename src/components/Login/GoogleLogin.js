import React, { useEffect } from 'react'
import {GoogleLogin} from 'react-google-login';
import UserService from '../../Services/UserService';
import {useNavigate} from 'react-router-dom'

const GoogleLoginButton = () => {
    let navigate = useNavigate('');
    const service = new UserService();

    const googleLogin = (response) =>{
        console.log(response);
        console.log(response.profileObj);
        const data = {
            email : response?.profileObj?.email,
            avatar : response?.profileObj?.imageUrl,
            userName : response?.profileObj?.Name
        }
        // service.googleLogin(data).then((res)=>{
        //     if (res.status !== 200){
        //         setIsAlert(true)
        //         setAlertMessage(res.data.error)
        //     }
            
        //     if(res.status === 200){
        //         localStorage.setItem("token", JSON.stringify(res.data));
        //         navigate("/profile")
        //         Close();
        //     }   
        // })
       
    }
  return <GoogleLogin
  clientId="970054821358-csu9i12dkd45asv2prhjh6htcsifrhmj.apps.googleusercontent.com"
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
  cookiePolicy={'single_host_origin'}
/>
}

export default GoogleLoginButton
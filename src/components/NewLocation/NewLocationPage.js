import React, {useEffect, useState} from 'react';
import NewLocationForm from "./resources/NewLocationForm";
import './NewLocationPage.css'
import UserService from '../../Services/UserService';
import { ClockLoader } from 'react-spinners';

const NewLocationPage = (props) => {
    let service = new UserService();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        service.GetCurrentUserInfo().then((res)=>{
            setUser(res.data);
            setLoading(false);
        })
    },[])
    return (
        <div className={"new_location_container"}>
            {
                loading ? <div className = "loader"><ClockLoader size= "150" css = {{margin : "auto" }} color={"#A254FF"}/></div>  :
                    <NewLocationForm user = {user}/>
            }
        </div>
    )
};

export default NewLocationPage;
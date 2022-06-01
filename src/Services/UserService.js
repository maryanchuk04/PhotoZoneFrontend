import axios from "axios";
import PhotoZoneService from "./PhotoZoneService";

const base_service =  new PhotoZoneService();


const _baseUrl = 'http://localhost:5127/api/';





export default class UserService{

    Authentificate = data => base_service.setToken('User/Authentificate',data);

    ChangeAvatar = data => base_service.setResourceAuth('User/ChangeAvatar')

    Registration = data => {
        
        return axios.post(_baseUrl + "User/Registration",{
            userName : data.userName,
            email : data.email,
            password : data.password
        })
    }

    GetCurrentUserInfo = () => base_service.getAuthResource('User/GetCurrentUserInfo');
    
    
}
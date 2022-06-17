import axios from "axios";
import PhotoZoneService from "./PhotoZoneService";

const base_service =  new PhotoZoneService();


const _baseUrl = 'http://localhost:5127/api/';





export default class UserService{

    Authentificate = data => base_service.setToken('User/Authentificate',data);

    ChangeAvatar = data => base_service.setResourceAuth('User/ChangeAvatar',data);


    Registration = data => {
        
        return axios.post(_baseUrl + "User/Registration",{
            userName : data.userName,
            email : data.email,
            password : data.password
        })
    }

    GetCurrentUserInfo = () => base_service.getAuthResource('User/GetCurrentUserInfo');
    
    GetUsersInfoByIds = (data) => base_service.setResourceAuth("User/GetUsersInfoByIds", data);

    GetUserInfoById = (id) => base_service.getResourse(`User/GetUserInfoById/${id}`);

    GetAllUsers = ()=> base_service.getResourse('User/GetAllUsers');

    SearchUsers = (data) => base_service.setResource('User/SearchUsers', data);

    SaveUserInfo = (data)=>base_service.setResourceAuth('User/SaveUserInfo', data);

    SaveSocials = (data) => base_service.setResourceAuth('User/SaveUserSocials', data);

    googleLogin = (data) => base_service.setToken('User/GoogleLogin', data);

    sendFeedback = (data) =>base_service.setResource('User/SendFeedback',data);

}
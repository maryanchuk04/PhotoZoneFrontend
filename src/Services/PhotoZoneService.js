import axios from "axios";

export const jwtStorageKey = 'token';

export default class PhotoZoneService {
    //http://localhost:5127/api/
    _baseUrl = 'https://photozonemaks.herokuapp.com/api/';

    getResourceAuth = async url => {
        const call = _url => fetch(this._baseUrl + _url, {
            method: "get",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem(jwtStorageKey)).token}`
            }),
        });

        let res = await call(url);
        if (res.status === 401) {
            // one more try:
            res = await call(url);
        }
        return res;
    }

    getAuthResource = (_url) =>{
       return axios.get(this._baseUrl + _url,{
            headers:{
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem(jwtStorageKey)).token}`
            }
        })
    }

    setResourceAuth = (_url, data) => {
        return axios.post(this._baseUrl + _url, data, {
            headers:{
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem(jwtStorageKey)).token}`
            },
        })
    }

    setToken = (url, data) =>{
        return axios.post(
            this._baseUrl + url,data
        ).then((res)=>{
            return {
                data : res.data,
                status : res.status
            };
        }).catch((err)=>{
            return err.response
        })
       
    }

    getResourse = (_url) =>{
        return axios.get(this._baseUrl + _url)
    }

    setResource = (_url,data) => {
        console.log(data);
        return axios.post(this._baseUrl + _url, data);
    }

}
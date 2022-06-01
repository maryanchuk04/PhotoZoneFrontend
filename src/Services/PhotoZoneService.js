import axios from "axios";

export const jwtStorageKey = 'token';

export default class PhotoZoneService {
    _baseUrl = 'http://localhost:5127/api/';

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

    setResourceAuth = async (url, data) => {
        const call = (url, data) => fetch(
            this._baseUrl + url,
            {
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem(jwtStorageKey)}`
                }),
                body: JSON.stringify(data)
            }
        );

        let res = await call(url, data);

        if (res.status === 401) {
            // one more try:
            res = await call(url, data);
        }

        return res;
    }

    setResource = async (url, data) =>{
        const call = (url, data) => axios.post(
            this._baseUrl + url,data
        )
        let res = await call(url, data);

        return res;
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

}
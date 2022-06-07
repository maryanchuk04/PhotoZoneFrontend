import axios from "axios";

const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";


const defaultCenter = {
    lat: 48.2864702,
    lng: 25.9376532
};
export const getBrowserLocation = ()=>{
    return new Promise((resolve, reject)=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude : lat, longitude : lng} = position.coords;
                    resolve({lat, lng});
                },
                () =>{
                    reject(defaultCenter);
                },
            );
        }
        else{
            reject(defaultCenter)
        }
    })
}

export async function getReverse(center){
    const data = await ( await fetch(GEOCODE_URL+`${center.lng},${center.lat}`)).json();
    console.log(data.address);
    const addressLabel = (data.address !== undefined) ? data.address.Neighborhood +", "+  data.address.Region : "Unknown";
    return addressLabel;
}

export async function getReverseInDetale(center){
    const data = await ( await fetch(GEOCODE_URL+`${center.lng},${center.lat}`)).json();
    console.log(data.address);
    const addressLabel = (data.address !== undefined) ? data.address.LongLabel : "Unknown";
    return addressLabel;
}


export function calcDistance(p1, p2){  	
    var R = 6371; 
    var rlat1 = p1.lat * (Math.PI/180);
    var rlat2 = p2.lat * (Math.PI/180); 
    var difflat = rlat2-rlat1;
    var difflon = (p2.lng-p1.lng) * (Math.PI/180); 

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    console.log(d)
    return d.toFixed(2);
}

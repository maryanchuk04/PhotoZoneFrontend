
export const isAuth = () =>{
    let token = localStorage.getItem('token');
    if(token === null || token === undefined){
        return false;
    }
    else return true;
}
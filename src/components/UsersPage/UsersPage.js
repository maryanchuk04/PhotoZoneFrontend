import { TextField } from '@material-ui/core'
import React, {useState, useEffect}from 'react'
import { ClockLoader } from 'react-spinners'
import UserService from '../../Services/UserService'
import './userPage.css'
import UsersList from './UsersList'

const UsersPage = () => {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  let userService = new UserService();


  useEffect(() => {
    userService.GetAllUsers().then(res =>{
      console.log(res);
      setUsers(res.data);
      setLoading(false);
    });
  }, [])
  
  const handleSearch = (value) =>{
    setLoading(true);
    const data = {
      searchText : value
    }
    userService.SearchUsers(data).then(res =>{
      console.log(res);
      setUsers(res.data);
      setLoading(false);
    })

  } 

  return (
    <div className = "usersPage">
        <div className="search">

            <TextField variant = "outlined"  className ="inputSearch" placeholder = "Search..." onChange = {(e)=>handleSearch(e.target.value)}/>
        </div>
        <div className="users">
          {loading ? <ClockLoader size= "150" color={"#A254FF"}/> : 
            <UsersList users = {users}/>
          }
            
        </div>
    </div>
  )
}

export default UsersPage
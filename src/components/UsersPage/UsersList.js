import { Divider } from '@material-ui/core'
import React from 'react'
import UserShortInfoLine from '../Subscribers/userShortInfoLine'

const UsersList = ({users, setLoading, isAuth}) => {
  
  return users.length === 0 ? <h1 style = {{margin : "auto", display : "flex", alignItems : "center", justifyContent : "center"}}>Nothing found!</h1> :
  users?.map((user)=>
  <>
    <UserShortInfoLine user = {user} isAuth = {isAuth}/>
    <Divider/>
  </>
  )
}

export default UsersList
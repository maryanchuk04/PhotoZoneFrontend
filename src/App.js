import React,{ReactFragment, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import Menu from "./components/Shared/Menu/Menu";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
import './custom.css'
import ProfileFavourite from "./components/Profile/ProfileFavourite/ProfileFavourite";
import NewLocationPage from "./components/NewLocation/NewLocationPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from 'react-router-dom';
import SupportPage from './components/Support/SupportPage.js';
import NewMenu from './components/Shared/Menu/NewMenu.js';
import Profile from './components/Profile/ProfileWithEditing/profile.js';
import { isAuth } from './Services/SharedFunctions.js';
import { useNavigate } from 'react-router';
import SubscribersPage from './components/Subscribers/SubscribersPage.js';
import UsersPage from './components/UsersPage/UsersPage.js';
import PlacesPage from './components/PlacesPages/PlacesPage'
import PlacePage from './components/PlacePage/PlacePage.js';
import { gapi } from 'gapi-script'

function App() {
  useEffect(()=>{

    document.body.style.height = window.innerHeight + "px"
    function start(){
      gapi.client.init({
        clientId : "898187581146-9rq8rn71544fu2r60nb2cfg0t4vi1i4l.apps.googleusercontent.com",
        scope : ""
      })
    };

    gapi.load('client:auth2', start);
  },[])
    return (
      <div className = "App">
        <BrowserRouter>
            <div className ='all'>
             <NewMenu/>
              <Routes>
                <Route path ="/" exact element = {<MainPage/>}/>
                <Route path ="/userspages/:id" exact element ={<React.Fragment><ProfilePage/><Footer/></React.Fragment>}/>
                <Route path = '/profilepage/favourite' exact element ={<React.Fragment><ProfileFavourite/><Footer/></React.Fragment>}/>
                <Route path = '/newlocation' exact element = {<React.Fragment><NewLocationPage/><Footer/> </React.Fragment>}/>
                <Route path = '/auth/user' exact element = {<React.Fragment><Footer/></React.Fragment>}/>
                <Route path ='/support' exact element ={<React.Fragment><SupportPage/> <Footer/></React.Fragment>}/>
                <Route path ="profile" exact element ={<React.Fragment><Profile/><Footer/></React.Fragment>}/> 
                <Route path ="/subscribers" exact element ={<React.Fragment><SubscribersPage/><Footer/></React.Fragment>}/>
                <Route path = "/users" exact element = {<React.Fragment><UsersPage/><Footer/></React.Fragment>} />
                <Route path = "/places" exact element = {<React.Fragment><PlacesPage/><Footer/></React.Fragment>} />
                <Route path = '/place/:id' exact element ={<React.Fragment><PlacePage/><Footer/></React.Fragment>}/>
              </Routes>
            </div>
            
        </BrowserRouter>
      </div>

    );
}
export default App;
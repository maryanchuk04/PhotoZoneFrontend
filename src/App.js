import React,{ReactFragment} from 'react';
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

function App() {

    return (
      <div className = "App">
        <BrowserRouter>
            <div className ='all'>
             <NewMenu/>
              <Routes>
                <Route path ="/" exact element = {<MainPage/>}/>
                <Route path ="/profilepage/:id" exact element ={<React.Fragment><ProfilePage/><Footer/></React.Fragment>}/>
                <Route path = '/profilepage/favourite' exact element ={<React.Fragment><ProfileFavourite/><Footer/></React.Fragment>}/>
                <Route path = '/newlocation' exact element = {<React.Fragment><NewLocationPage/><Footer/> </React.Fragment>}/>
                <Route path = '/auth/user' exact element = {<React.Fragment><Footer/></React.Fragment>}/>
                <Route path ='/support' exact element ={<React.Fragment><SupportPage/> <Footer/></React.Fragment>}/>
                <Route path ="profile" exact element ={<React.Fragment><Profile/><Footer/></React.Fragment>}/> 
                
              </Routes>
            </div>
            
        </BrowserRouter>
      </div>

    );
}
export default App;
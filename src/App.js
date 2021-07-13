import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavSNContainer from "./components/Navigation/NavSNContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Route path={'/main'} render={ ()=> <HeaderContainer/>}/>
                <NavSNContainer/>
                <div className='content_app_wrapper'>
                    <Route path={'/messages'} render={ () => <MessagesContainer/>}/>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer/>}/>
                    <Route path={'/users'} render={ () => <UsersContainer />}/>
                    <Route path={'/login'} render={ () => <LoginPage />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
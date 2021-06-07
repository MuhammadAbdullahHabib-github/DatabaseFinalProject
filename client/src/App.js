import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from './components/pages/register/RegistrationForm'
import Login from './components/pages/login/Login';
import Dashboard from './components/pages/dashboard/Dashboard';
import Form from './components/pages/form/Form';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2EC771'
        },
        text: {
            primary:"#363636"
        },
        background: {
            paper:"#F9FAFB"
        }
    },
    typography: {
        fontFamily: "Poppins"
    }

})



function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (Boolean) => {
        setIsAuthenticated(Boolean);
    }

    const isAuth = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:5000/api/student/is-verify", { token: token })
            res.data === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        isAuth();
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                     <Route exact path='/' render={props => !isAuthenticated ? (<Login  {...props}  setAuth={setAuth}/>)  : (<Redirect to="/dashboard/form"/>) } />

                        <Route exact path='/signup' render={props => !isAuthenticated ? (<RegistrationForm {...props} setAuth={setAuth}/>) : (<Redirect to="/" />)} />
                        
                        <Route exact path='/dashboard/profile' render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} breadCrumb="Update"/> ) : (<Redirect to="/"/>)} />                    
                        
                        <Route exact path='/dashboard/form' render={props => isAuthenticated ? (<Form {...props} setAuth={setAuth} breadCrumb="Induction Form"/> ) :  (<Redirect to="/"/>)}/> 

                    {/* <Route exact path='/dashboard/form' render={props => (<Form {...props} setAuth={setAuth} breadCrumb="Induction Form" />)} /> */}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

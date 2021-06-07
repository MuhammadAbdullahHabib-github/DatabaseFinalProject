import React from 'react';
import Register from './Register';
import Header from '../../layout/Header';
import './RegistrationForm.css'
import { ReactComponent as YourSvg } from '../../../assets/images/signup.svg';

const RegistrationFrom = ({setAuth}) => {
    return (
        <>
        <Header />
        <div className="registrationform">
            <div className="registrationform_intro">
                <YourSvg className="registrationform__svg" />
                <p>By Clicking the&nbsp;&nbsp;<span className="registrationform__name">'Sign Up Now'</span>&nbsp;&nbsp;button, I confirm that all the information provided above is valid, truthful and belongs to me. Project Topi reserves the right to take necessary action for incorrect or misleading information.</p>
            </div>
            <Register setAuth={setAuth} />
        </div>
        </>
    )
}

export default RegistrationFrom

import React, { useState } from 'react';
import Header from '../../layout/Header'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({setAuth}) => {
    const [student_email, setStudent_email] = useState("");
    const [password, setPassword] = useState("")

    const submitForm = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/student/login", { student_email: student_email, password: password });
        localStorage.setItem('token', res.data.token);
        setAuth(true);
    }

    return (
        <>
        <Header />
            <div className="login">
                <form className="login__form" method="POST" onSubmit={submitForm}>
                    <h2> Log in </h2>
                    <h1>Welcome back! Log in to your account</h1>
                    <div className="login__input__email__password">
                        <input type="email" name="email" value={student_email}  onChange={(e) => setStudent_email(e.target.value)} className="login__input__email" placeholder="u20XXXXX@giki.edu.pk" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login__input__password" placeholder="Password" />
                        <p>Make sure your email matches with the email of your ZIMBRA</p>
                    </div>
                    <div className="login__submit">
                        <button type="submit"  className="login__submit__button">Log in</button>
                    </div>
                    <div className="login__seperator">
                        <span>
                            <p>OR</p>
                        </span>
                    </div>
                    <div className="login__new__account">
                        <p>New to Project Topi ? <Link to='/signup' className="login__new__account__link"> Sign up </Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login

import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Register.css';
import axios from 'axios';



const Register = ({setAuth}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [regNo, setRegNo] = useState(0);
    const [student_email, setStudent_email] = useState("");
    const [mobile, setMobile] = useState("");
    const [faculty, setFaculty] = useState("");
    const [hostel, setHostel] = useState(0);
    const [room_no, setRoom_no] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const space = " ";
    const name = firstName.concat(space,lastName);
   

    const submitForm = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match")
        }
        const res = await axios.post('http://localhost:5000/api/student/register', {regNo:regNo, name:name, contact_number:mobile, faculty:faculty, hostel:hostel, room_no:room_no, password:password, student_email:student_email});
        localStorage.setItem("token", res.data.token );
        setAuth(true);
    }

    function useRegex(input) {
        let regex = /^u\d\d\d\d\d\d\d@giki\.edu\.pk$/i;
        return regex.test(input);
    }

    const validEmail = useRegex(student_email);


    return (
        <div className='register'>
            <form className="register__form" onSubmit={submitForm}>
                <h2> Sign up </h2>
                <p>Let's get started!</p>
                <div className="register__name">
                    <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} className="register__name__firstname" placeholder='First Name' required />
                    <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} className="register__name__lastname" placeholder='Last Name' required />
                    <p>Make  sure it matches the name on your GIKI ID.</p>
                </div>
                <div className="register__regno">
                    <input type="number" name="regno" onChange={(e) => setRegNo(e.target.value)} placeholder='Registration Number' required />
                </div>
                <div className="register_email">
                    <input type="email" name="email" onChange={(e) => setStudent_email(e.target.value)} placeholder="u20XXXXX@giki.edu.pk" required />
                    {validEmail || student_email.length <= 20 || student_email === "" ?
                        <p>Make sure it matches the email of your ZIMBRA</p> :
                        <p style={{ color: "#ff0000" }}>You have entered an invalid e-mail address. </p>
                    }
                </div>
                <div className="register__mobile">
                    <input type="text" name="phone_number" onChange={(e) => setMobile(e.target.value)} placeholder="+92 3XX XXXXXXX" required />
                </div>
                <div className="register__faculty">
                    {/* <label for="faculty">Faculty </label> */}
                    <select name="faulty" id='faculty' onChange={(e) => setFaculty(e.target.value)} className="register__faculty__select" required>
                        <option className="register__faculty__option" value="NOT SELECTED" >Choose your faculty ...</option>
                        <option className="register__faculty__option" value="mechanical">Mechanical</option>
                        <option className="register__faculty__option" value="civil">Civil</option>
                        <option className="register__faculty__option" value="electronic">Electronic</option>
                        <option className="register__faculty__option" value="electrical">Electrical</option>
                        <option className="register__faculty__option" value="computer science">Computer Science</option>
                        <option className="register__faculty__option" value="computer engineering">Computer Engineering</option>
                        <option className="register__faculty__option" value="material">Material</option>
                        <option className="register__faculty__option" value="nano">Nano</option>
                        <option className="register__faculty__option" value="chemical">Chemical Engineering</option>
                        <option className="register__faculty__option" value="engineering sciences">Engineering scienes</option>
                        <option className="register__faculty__option" value="mgs">MGS</option>
                        <option className="register__faculty__option" value="other">Other</option>
                    </select>
                </div>
                <div className="regester__location">
                    <input type="number" name="hostel" onChange={(e) => setHostel(e.target.value)} className="regester__location__hostel" placeholder="Hostel" required />
                    <input type="number" name="room" onChange={(e) => setRoom_no(e.target.value)} className="regester__location__room" placeholder="Room" required />
                </div>
                <div className="register__password">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="register__password__one" placeholder="Password" required />
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="register__password__two" placeholder="Confirm Password" required />
                    <div className={password === confirmPassword &&  password.length === confirmPassword.length   ?   "register__password__noterror": "register__password__error"}>
                        <p > Please make sure your password match</p>
                    </div>
                </div>
                <div className="register__submit">
                    <button type="submit" className="register__submit__button">Sign Up Now</button>
                </div>
                <div className="register__seperator">
                    <span>
                        <p>OR</p>
                    </span>
                </div>
                <div className="register__already__account">
                    <p>Already have an account ? < Link to="/" className="register__already__account__link"> Log in</ Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register

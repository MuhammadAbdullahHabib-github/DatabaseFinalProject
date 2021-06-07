import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [faculty, setFaculty] = useState("");
    const [hostel, setHostel] = useState(0);
    const [room, setRoom] = useState(0);
    const [studentData, setStudentData] = useState({
        name: "",
        contact_number: "",
        faculty: "",
        hostel: 0,
        room_no: 0
    });

    const history = useHistory()

    useEffect(() => {
        async function responce() {
            const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:5000/api/dashboard/", {token: token});
            setStudentData(res.data);
            //eslint-disable-next-line
        }
        responce();      
    }, [])



    const submitform = async (e) => {
        e.preventDefault();
        

        if (name !== "") {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.put("http://localhost:5000/api/dashboard/update/name", { name: name, token: token })
                studentData.name = res.data[0].name
            } catch (error) {
                console.log(error.message);
            }
        }

        if (number !== "") {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.put("http://localhost:5000/api/dashboard/update/contact", { contact_number: number, token: token })
                studentData.contact = res.data[0].contact_number;
            } catch (error) {
                console.log(error.message);
            }
        }

        if (faculty !== "") {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.put("http://localhost:5000/api/dashboard/update/faculty", { faculty: faculty, token: token })
                studentData.faculty = res.data[0].faculty;
            } catch (error) {
                console.log(error.message);
            }
        }

        if (hostel !== 0) {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.put("http://localhost:5000/api/dashboard/update/hostel", { hostel: hostel, token: token })
                studentData.hostel = res.data[0].hostel;
            } catch (error) {
                console.log(error.message);
            }
        }

        if (room !== 0) {
            console.log("room_no")
            try {
                const token = localStorage.getItem("token");
                const res = await axios.put("http://localhost:5000/api/dashboard/update/room", { room_no: room, token: token })
                studentData.room_no = res.data[0].room_no
            } catch (error) {
                console.log(error.message);
            }

        }
    }


    return (
        <div className="profile">
            <div className="profile__update__text">
                <p>UPDATE PROFILE</p>
            </div>
            <form className="profile__form" onSubmit={submitform}>
                <div className="profile__name  flex">
                    <label htmlFor="name" className="profile__label">Full Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} placeholder={studentData.name} />
                </div>
                <div className="profile__number flex">
                    <label htmlFor="mobile" className="profile__label">Mobile Number</label>
                    <input type="text" name="mobile" id="mobile" onChange={(e) => { setNumber(e.target.value) }} placeholder={studentData.contact_number} />
                </div>
                <div className="profile__faculty flex">
                    <label htmlFor="faculty" className="profile__label">Faculty</label>
                    <input type="text" name="faculty" id="faculty" onChange={(e) => { setFaculty(e.target.value) }} placeholder={studentData.faculty} />
                </div>
                <div className="profile__location">
                    <div className="profile__hostel flex">
                        <label htmlFor="hostel" className="profile__label">Hostel</label>
                        <input type="text" name="hostel" id="hostel" onChange={(e) => { setHostel(e.target.value) }} placeholder={studentData.hostel} />
                    </div>
                    <div className="profile__room flex">
                        <label htmlFor="room" className="profile__label">Room</label>
                        <input type="text" name="room" id="room" onChange={(e) => { setRoom(e.target.value) }} placeholder={studentData.room_no} />
                    </div>
                </div>
                <div className="profile__submit">
                    <button type=" submit" onClick={() => {history.go(0)}} className="profile__submit__button">UPDATE</button>
                </div>
            </form>
        </div>
    )
}

export default Profile

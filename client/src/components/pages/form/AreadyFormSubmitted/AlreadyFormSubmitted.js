import React , {useEffect , useState} from 'react'
import './AlreadyFormSubmitted.css';
import axios from 'axios'

const AlreadyFromSubmitted = () => {
   
    useEffect(() => {
        const responcefun = async () => {
            const token = localStorage.getItem('token');
            try {
            const responce = await axios.post("/api/registrationform/",{token:token});
            setSocietyOne(responce.data.rows[0].society_one);
            setSocietyTwo(responce.data.rows[0].society_two);
            setSocietyThree(responce.data.rows[0].society_three);
            setSocietyFour(responce.data.rows[0].society_four);
            setStrength(responce.data.rows[0].strength);
            setWeakness(responce.data.rows[0].weakness);
            setWish(responce.data.rows[0].know_pt_wish);
            setPartOfCommunity(responce.data.rows[0].part_of_community);
            setProductiveInitiative(responce.data.rows[0].productive_initiatives);
            setFundRaisingIdea(responce.data.rows[0].fund_raising_idea);
            setPhotoshop(responce.data.rows[0].photoshop);
            setWebDev(responce.data.rows[0].web_dev);
            setVideoEditing(responce.data.rows[0].video_editing);
            setContentWriting(responce.data.rows[0].content_writing);
            setCommunicationSkills(responce.data.rows[0].communication_skills);
            setPersuasiveSkills(responce.data.rows[0].persuasion_skills);
            setTeamwork(responce.data.rows[0].teamwork);
            setEventManagementSkills(responce.data.rows[0].et_management_skills);
            setLeadershipSkills(responce.data.rows[0].leadership_skills)
        } catch (error) {
                console.log(error.message);
        }
        }
        responcefun();
    }, [])
    const [societyOne, setSocietyOne] = useState("");
    const [societyTwo, setSocietyTwo] = useState("");
    const [societyThree, setSocietyThree] = useState("");
    const [societyFour, setSocietyFour] = useState("");
    const [strength, setStrength] = useState("");
    const [weakness, setWeakness] = useState("");
    const [wish, setWish] = useState("");
    const [partOfCommunity, setPartOfCommunity] = useState("")
    const [productiveInitiative, setProductiveInitiative] = useState("");
    const [fundRaisingIdea, setFundRaisingIdea] = useState("");
    const [photoshop, setPhotoshop] = useState("");
    const [webDev, setWebDev] = useState("");
    const [videoEditing, setVideoEditing] = useState("");
    const [contentWriting, setContentWriting] = useState("");
    const [communicationSkills, setCommunicationSkills] = useState("");
    const [persuasiveSkills, setPersuasiveSkills] = useState("");
    const [teamwork, setTeamwork] = useState("");
    const [eventManagementSkills, setEventManagementSkills] = useState("");
    const [leadershipSkills, setLeadershipSkills] = useState("");
    return (
        <div className="already__form__submitted">
            <h2 className="already__form__submitted__heading">Your response</h2>
            <p className="already__form__submitted__questions">List of societies you are a part of or want to join this semester.</p>
            <p>{societyOne}</p>
            <p>{societyTwo}</p>
            <p>{societyThree}</p>
            <p>{societyFour}</p>
            <br />
            <p className="already__form__submitted__questions">Your strengths.</p>
            <p>{strength}</p>
            <br />
            <p className="already__form__submitted__questions">Your weaknesses.</p>
            <p>{weakness}</p>
            <br />
            <p className="already__form__submitted__questions">Your knowledge about Project Topi and your wishes to achieve through this platform.</p>
            <p>{wish}</p>
            <br />
            <p className="already__form__submitted__questions">Part of any community or welfare work.</p>
            <p>{partOfCommunity}</p>
            <br />
            <p className="already__form__submitted__questions">Productive initiatives for Project Topi.</p>
            <p>{productiveInitiative}</p>
            <br />
            <p className="already__form__submitted__questions">Fund raising idea.</p>
            <p>{fundRaisingIdea}</p>
            <br />
            <p className="already__form__submitted__questions">Technical skills and interpersonal skills.</p>
            <br />
            <ul className="already__form__submitted__list">
                <li><span className="already__form__submitted__span">Photoshop</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{photoshop}</li>
                <li><span className="already__form__submitted__span">Web Development</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{webDev}</li>
                <li><span className="already__form__submitted__span">Video Editing</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{videoEditing}</li>
                <li><span className="already__form__submitted__span">Content Writing</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contentWriting}</li>
                <li><span className="already__form__submitted__span">Communication Skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{communicationSkills}</li>
                <li><span className="already__form__submitted__span">Persuasion Skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{persuasiveSkills}</li>
                <li><span className="already__form__submitted__span">Teamwork</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{teamwork}</li>
                <li><span className="already__form__submitted__span">Event management Skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{eventManagementSkills}</li>
                <li><span className="already__form__submitted__span">Leadership Skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{leadershipSkills}</li>
            </ul>
        </div>
    )
}

export default AlreadyFromSubmitted

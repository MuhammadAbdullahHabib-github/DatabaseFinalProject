import React from 'react';
import './ReviewForm.css';
import axios from "axios";

const ReviewForm = ({ submit, values }) => {
    

    const submitData = async () => {
        submit(4);
        const token = localStorage.getItem("token")
        const societies = await axios.post("/api/registrationform/societies/", {token:token , society_one:values.firstSociety, society_two:values.secondSociety, society_three:values.thirdSociety, society_four:values.fourthSociety});
        console.log(societies.data);
        const forms = await axios.post("/api/registrationform/forms", {token:token ,  strength:values.strength , weakness:values.weakness , know_pt_wish:values.wish , part_of_community:values.partOfCommunity , productive_initiatives:values.productiveInitiative , fund_raising_idea:values.fundRaisingIdea})
        console.log(forms.data);
        const skills = await axios.post("/api/registrationform/skills", {token:token ,photoshop:values.photoshop , web_dev:values.Web_Development , video_editing:values.Video_Editing , content_writing:values.Content_Writing , communication_skills:values.Communication_Skills , persuasion_skills:values.Persuasion_Skills , teamwork:values.Teamwork , et_management_skills:values.Event_Management_Skills , leadership_skills:values.Leadership_Skills});
        console.log(skills.data);
    }

    return (
        <>
            <div className="review__form__stepper">
                <p className="review__form__stepper__question  review__form__stepper__question__margins">Societies</p>
                <ul className="review__form__stepper__ul">
                    <li>{values.firstSociety}</li>
                    <li>{values.secondSociety} </li>
                    <li>{values.thirdSociety}</li>
                    <li>{values.fourthSociety}</li>
                </ul>
                <p className="review__form__stepper__question review__form__stepper__question__margins">What are your strengths ?</p>
                <p>{values.strength}</p>
                <p className="review__form__stepper__question review__form__stepper__question__margins">What are your weaknesses ?</p>
                <p>{values.weakness}</p>
                <p className="review__form__stepper__question review__form__stepper__question__margins">What do you know about <span className="student__form__span">PROJECT TOPI</span> and what do you wish to achieve through this platform ?</p>
                <p>{values.wish}</p>
                <p className="review__form__stepper__question review__form__stepper__question__margins">Have you ever been a part of any community or welfare work ? If yes, briefly share your experience(s).</p>
                <p>{values.partOfCommunity}</p>
                <p className="review__form__stepper__question review__form__stepper__question__margins">Propose any productive initiatives Project Topi should consider to increase its impact.</p>
                <p>{values.productiveInitiative}</p>
                <p className="review__form__stepper__question review__form__stepper__question__margins">Propose at least one fund raising idea.</p>
                <p style={{ marginBottom: "1%" }}>{values.fundRaisingIdea}</p>
                <p className="review__form__stepper__question">Photoshop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="review__form__stepper__question__span">{values.photoshop}</span></p>
                <p className="review__form__stepper__question">Web Development&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="review__form__stepper__question__span">{values.Web_Development}</span></p>
                <p className="review__form__stepper__question">Video Editing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="review__form__stepper__question__span">{values.Video_Editing}</span></p>
                <p className="review__form__stepper__question">Content Writing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="review__form__stepper__question__span">{values.Content_Writing}</span></p>
                <p className="review__form__stepper__question">Communication Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="review__form__stepper__question__span">{values.Communication_Skills}</span></p>
                <p className="review__form__stepper__question">Persuasion Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="review__form__stepper__question__span">{values.Persuasion_Skills}</span></p>
                <p className="review__form__stepper__question">Teamwork&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="review__form__stepper__question__span">{values.Teamwork}</span></p>
                <p className="review__form__stepper__question">Event Management Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="review__form__stepper__question__span">{values.Event_Management_Skills}</span></p>
                <p className="review__form__stepper__question">Leadership Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="review__form__stepper__question__span">{values.Leadership_Skills}</span></p>
            </div>
            
                <div className="student__form__buttons__review">
                    <button className="student__form__back__button" onClick={() => submit(2)}>Back</button>
                    <button className="student__form__button__next" onClick={submitData} >Submit</button>
                </div>

        </>
    )
}

export default ReviewForm

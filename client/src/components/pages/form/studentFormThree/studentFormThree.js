import React from 'react';
import "./studentFormThree.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const studentFormThree = ({submit , setformValues , prevValues}) => {
    return (
        <Formik
    
            initialValues={ prevValues }
            validationSchema={Yup.object({
                fundRaisingIdea: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                submit(3);
                setformValues({...values , ...prevValues})
            }}
        >
            <div className="student__form">
                <Form className="student__form__mainform" >
                    <div className="student__form__field  flex">
                        <label htmlFor="fundRaisingIdea" className="student__from__label">Propose at least one fund raising idea. </label>
                        <Field as='textarea' className="student__from__input" type="text" name="fundRaisingIdea" id="fundRaisingIdea" />
                        <ErrorMessage name="fundRaisingIdea" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )} />
                    </div>

                    <div className="student__form__field  flex space">
                        <label htmlFor="name" className="student__from__label">Please rate your technical skills.</label>
                        <div className="student__form__checkboxes">
                            <label htmlFor="name" className="student__from__label student__form__span">Photoshop</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="photoshop" name="photoshop" value="Excellent" />
                                <label for="photoshop" className="student__from__label">Excellent</label>
                                <Field type="radio" id="photoshop" name="photoshop" value="Very Good" />
                                <label for="photoshop" className="student__from__label">Very Good</label>
                                <Field type="radio" id="photoshop" name="photoshop" value="Good" />
                                <label for="photoshop" className="student__from__label">Good</label>
                                <Field type="radio" id="photoshop" name="photoshop" value="Fair" />
                                <label for="photoshop" className="student__from__label">Fair</label>
                                <Field type="radio" id="photoshop" name="photoshop" value="Poor" />
                                <label for="photoshop" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">
                            <label htmlFor="name" className="student__from__label student__form__span">Web Development</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Web_Development" name="Web_Development" value="Excellent" />
                                <label for="Web_Development" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Web_Development" name="Web_Development" value="Very Good" />
                                <label for="Web_Development" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Web_Development" name="Web_Development" value="Good" />
                                <label for="Web_Development" className="student__from__label">Good</label>
                                <Field type="radio" id="Web_Development" name="Web_Development" value="Fair" />
                                <label for="Web_Development" className="student__from__label">Fair</label>
                                <Field type="radio" id="Web_Development" name="Web_Development" value="Poor" />
                                <label for="Web_Development" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Video Editing</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Video_Editing" name="Video_Editing" value="Excellent" />
                                <label for="Video_Editing" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Video_Editing" name="Video_Editing" value="Very Good" />
                                <label for="Video_Editing" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Video_Editing" name="Video_Editing" value="Good" />
                                <label for="Video_Editing" className="student__from__label">Good</label>
                                <Field type="radio" id="Video_Editing" name="Video_Editing" value="Fair" />
                                <label for="Video_Editing" className="student__from__label">Fair</label>
                                <Field type="radio" id="Video_Editing" name="Video_Editing" value="Poor" />
                                <label for="Video_Editing" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Content Writing</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Content_Writing" name="Content_Writing" value="Excellent" />
                                <label for="Content_Writing" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Content_Writing" name="Content_Writing" value="Very Good" />
                                <label for="Content_Writing" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Content_Writing" name="Content_Writing" value="Good" />
                                <label for="Content_Writing" className="student__from__label">Good</label>
                                <Field type="radio" id="Content_Writing" name="Content_Writing" value="Fair" />
                                <label for="Content_Writing" className="student__from__label">Fair</label>
                                <Field type="radio" id="Content_Writing" name="Content_Writing" value="Poor" />
                                <label for="Content_Writing" className="student__from__label">Poor</label>
                            </div>
                        </div>

                    </div>

                    <div className="student__form__field  flex space">
                        <label htmlFor="name" className="student__from__label">Please rate your interpersonal skills. </label>
                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Communication Skills</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Communication_Skills" name="Communication_Skills" value="Excellent" />
                                <label for="Communication_Skills" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Communication_Skills" name="Communication_Skills" value="Very Good" />
                                <label for="Communication_Skills" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Communication_Skills" name="Communication_Skills" value="Good" />
                                <label for="Communication_Skills" className="student__from__label">Good</label>
                                <Field type="radio" id="Communication_Skills" name="Communication_Skills" value="Fair" />
                                <label for="Communication_Skills" className="student__from__label">Fair</label>
                                <Field type="radio" id="Communication_Skills" name="Communication_Skills" value="Poor" />
                                <label for="Communication_Skills" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Persuasion Skills</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Persuasion_Skills" name="Persuasion_Skills" value="Excellent" />
                                <label for="Persuasion_Skills" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Persuasion_Skills" name="Persuasion_Skills" value="Very Good" />
                                <label for="Persuasion_Skills" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Persuasion_Skills" name="Persuasion_Skills" value="Good" />
                                <label for="Persuasion_Skills" className="student__from__label">Good</label>
                                <Field type="radio" id="Persuasion_Skills" name="Persuasion_Skills" value="Fair" />
                                <label for="Persuasion_Skills" className="student__from__label">Fair</label>
                                <Field type="radio" id="Persuasion_Skills" name="Persuasion_Skills" value="Poor" />
                                <label for="Persuasion_Skills" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Teamwork</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Teamwork" name="Teamwork" value="Excellent" />
                                <label for="Teamwork" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Teamwork" name="Teamwork" value="Very Good" />
                                <label for="Teamwork" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Teamwork" name="Teamwork" value="Good" />
                                <label for="Teamwork" className="student__from__label">Good</label>
                                <Field type="radio" id="Teamwork" name="Teamwork" value="Fair" />
                                <label for="Teamwork" className="student__from__label">Fair</label>
                                <Field type="radio" id="Teamwork" name="Teamwork" value="Poor" />
                                <label for="Teamwork" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Event Management Skills</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Event_Management_Skills" name="Event_Management_Skills" value="Excellent" />
                                <label for="Event_Management_Skills" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Event_Management_Skills" name="Event_Management_Skills" value="Very Good" />
                                <label for="Event_Management_Skills" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Event_Management_Skills" name="Event_Management_Skills" value="Good" />
                                <label for="Event_Management_Skills" className="student__from__label">Good</label>
                                <Field type="radio" id="Event_Management_Skills" name="Event_Management_Skills" value="Fair" />
                                <label for="Event_Management_Skills" className="student__from__label">Fair</label>
                                <Field type="radio" id="Event_Management_Skills" name="Event_Management_Skills" value="Poor" />
                                <label for="Event_Management_Skills" className="student__from__label">Poor</label>
                            </div>
                        </div>

                        <div className="student__form__checkboxes">

                            <label htmlFor="name" className="student__from__label student__form__span">Leadership Skills</label>

                            <div className="student__form__checkboxes__list">
                                <Field type="radio" id="Leadership_Skills" name="Leadership_Skills" value="Excellent" />
                                <label for="Leadership_Skills" className="student__from__label">Excellent</label>
                                <Field type="radio" id="Leadership_Skills" name="Leadership_Skills" value="Very Good" />
                                <label for="Leadership_Skills" className="student__from__label">Very Good</label>
                                <Field type="radio" id="Leadership_Skills" name="Leadership_Skills" value="Good" />
                                <label for="Leadership_Skills" className="student__from__label">Good</label>
                                <Field type="radio" id="Leadership_Skills" name="Leadership_Skills" value="Fair" />
                                <label for="Leadership_Skills" className="student__from__label">Fair</label>
                                <Field type="radio" id="Leadership_Skills" name="Leadership_Skills" value="Poor" />
                                <label for="Leadership_Skills" className="student__from__label">Poor</label>
                            </div>
                        </div>
                    </div>
                   
                    <div  className="student__form__buttons">
                    <button className="student__form__back__button" onClick={()=>submit(1)}>Back</button>
                    <button type="submit" className="student__form__button__next">Next</button>
                    </div>
                    
                </Form>
            </div>
        </Formik>
    )
}

export default studentFormThree

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './studentform.css';


const StudentForm = ({submit , setformValues , prevValues}) => {
    return (
        <Formik
       initialValues={
           prevValues
        }

       
       validationSchema={Yup.object({
        strength: Yup.string().required('Required'),
        weakness: Yup.string().required('Required'),
       })}

       onSubmit={(values) => {
         submit(1)
         setformValues({...values , ...prevValues})
       }}

     >
        <div className="student__form">
                <Form className="student__form__mainform" >
                    <div className="student__form__field  flex">
                        <label htmlFor="society" className="student__from__label">List the societies you are part of or want to join this semester in order of preference :</label>
                        <Field className="student__from__input" type="text" name="firstSociety" id="society" />
                        <ErrorMessage name="firstSociety" />
                        <Field className="student__from__input" type="text" name="secondSociety" id="society" />
                        <ErrorMessage name="secondSociety" />
                        <Field className="student__from__input" type="text" name="thirdSociety" id="society" />
                        <ErrorMessage name="thirdSociety" />
                        <Field className="student__from__input" type="text" name="fourthSociety" id="society" />
                        <ErrorMessage name="fourthSociety" />
                    </div>
                    <div className="student__form__field  flex">
                        <label htmlFor="strength" className="student__from__label">What are your strengths ?</label>
                        <Field as="textarea" className="student__from__input" rows="4" cols="50" name="strength" id="strength"/>
                        <ErrorMessage name="strength" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )}/>
                    </div>

                    <div className="student__form__field  flex">
                        <label htmlFor="weakness" className="student__from__label">What are your weaknesses ?</label>
                        <Field as="textarea" className="student__from__input" rows="4" cols="50" name="weakness" id="weakness" />
                        <ErrorMessage  name="weakness" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )}/>
                    </div>
                    <div className="student__form__buttons">
                    <button style={{color:"lightgrey" , border:"none" , fontSize:"0.8vw" , marginRight:"15px"}}>Back</button>
                    <button className="student__form__button__next" type="submit">Next</button>
                    </div>
                </Form>
            </div>
            </Formik>
    )
}

export default StudentForm

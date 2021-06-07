import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const studentFormTwo = ({ submit, setformValues, prevValues }) => {
    return (
        <Formik

            initialValues={prevValues}
            validationSchema={Yup.object({
                wish: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
                partOfCommunity: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
                productiveInitiative: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                submit(2);
                setformValues({ ...values, ...prevValues })
            }}
        >
            <div className="student__form">
                <Form className="student__form__mainform">
                    <div className="student__form__field  flex">
                        <label htmlFor="wish" className="student__from__label">What do you know about <span className="student__form__span">PROJECT TOPI</span> and what do you wish to achieve through this platform ?</label>
                        <Field as="textarea" className="student__from__input" rows="6" cols="50" name="wish" id="wish" />
                        <ErrorMessage name="wish" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )} />
                    </div>

                    <div className="student__form__field  flex">
                        <label htmlFor="partOfCommunity" className="student__from__label">Have you ever been a part of any community or welfare work ? If yes, briefly share your experience(s).</label>
                        <Field as="textarea" className="student__from__input" rows="6" cols="50" name="partOfCommunity" id="partOfCommunity" />
                        <ErrorMessage name="partOfCommunity" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )} />
                    </div>

                    <div className="student__form__field  flex">
                        <label htmlFor="productiveInitiative" className="student__from__label">Propose any productive initiatives Project Topi should consider to increase its impact.</label>
                        <Field as="textarea" className="student__from__input" rows="6" cols="50" name="productiveInitiative" id="productiveInitiative" />
                        <ErrorMessage name="productiveInitiative" render={(msg) => (
                            <span className="student__form__error">{msg}</span>
                        )} />
                    </div>

                    <div className="student__form__buttons">
                        <button className="student__form__back__button" onClick={() => submit(0)}>Back</button>
                        <button type="submit" className="student__form__button__next">Next</button>
                    </div>

                </Form>
            </div>
        </Formik>
    )
}

export default studentFormTwo

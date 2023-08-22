import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function FormComponent() {
    const initialValues = {
        name: '',
        email: '',
        message: '',
        gender: '',
        country: '',
        interests: [],
    };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log('Form submitted:', values);
            alert('Form submitted Successfully')
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="form-container">
            <h1>Form Component</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Name:</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Message:</label>
                            <Field as="textarea" name="message" />
                            <ErrorMessage name="message" component="div" className="error" />
                        </div>

                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Gender:</label>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <label>
                                    <Field type="radio" name="gender" value="male" />
                                    Male
                                </label>
                                <label style={{ marginLeft: '10px' }}>
                                    <Field type="radio" name="gender" value="female" />
                                    Female
                                </label>
                            </div>
                        </div>

                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Country:</label>
                            <Field as="select" name="country">
                                <option value="">Select Country</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                            </Field>
                        </div>

                        <div className="form-field">
                            <label style={{ textAlign: 'left' }}>Interests:</label>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <label>
                                    <Field type="checkbox" name="interests" value="music" />
                                    Music
                                </label>
                                <label style={{ marginLeft: '10px' }}>
                                    <Field type="checkbox" name="interests" value="sports" />
                                    Sports
                                </label>
                                <label style={{ marginLeft: '10px' }}>
                                    <Field type="checkbox" name="interests" value="reading" />
                                    Reading
                                </label>
                            </div>
                        </div>

                        <div className="form-field">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormComponent;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';

const FormComponent = () => {
    return (
        <div>
            <h1>Social Profiles</h1>
            <Formik
                initialValues={
                    {
                        social: {
                            facebook: 'Facebook',
                            twitter: 'Twitter',
                        },
                        alpha: {
                            myName: "alpha"
                        }
                    }
                }
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                <Form>
                    <Field name="alpha.myName" />
                    <Field name="social.twitter" />
                    <button type="submit">Submit</button>
                    {/* <Button color="primary" variant="contained" fullWidth type="submit"> Submit </Button> */}
                </Form>
            </Formik>
        </div>
    )
}


export default FormComponent;
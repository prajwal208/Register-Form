import React from 'react'
import './App.css'
import { useFormik } from 'formik';
import image from './rocket.png'



function RegistarForm() {

    const initialValues = {
        name: "",
        lastname: "",
        password: "",
        confirmpassword: "",
        email: "",
        phone: "",
        city: "",
        country: ""
    }

    const validate = values => {
        let errors = {}

        if ( !values.name ) {
            errors.name = "Name is Requried"
        }else if (values.name.length < 3){
            errors.name = "Name is too short"
        }

            if ( !values.lastname ) {
                errors.lastname = "Requried"
            }else if(values.lastname.length < 3){
                errors.lastname = "Enter valid Name"
            }

            if ( !values.password ) {
                errors.password = "Requried"
            }else if(values.password.length < 8){
                errors.password = "Password is too short"
            }

            if ( values.confirmpassword !== values.password) {
                errors.confirmpassword = "Password does not match"
            } else if (!values.confirmpassword){
                errors.confirmpassword = "Requried"
            }

            if(!values.email){
                errors.email = "Email Requried"
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

            if(!values.phone){
                errors.phone = "Phone number Requried"
            }
        
            if(!values.city){
                errors.city = "Requried"
            }   
        
            if(!values.country){
                errors.country = "Requried"
            }

        return errors

    }

    const onSubmit = ( values , onSubmitprops ) => {
        let data = values
        console.log( "value is:", data )
        alert( "submitted" )
        onSubmitprops.resetForm();

        fetch("https://localhost:3000/posts",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        })
    }



    const formik = useFormik( {
        initialValues,
        onSubmit,
        validate
    } )

   
    



    return (
        <>
            <div className="box">
                <form onSubmit={ formik.handleSubmit }>
                    <div className="container">

                        <div className="sideview">
                            <img src={ image } alt={ "rocket" } id="image" />
                            <h2>Welcome</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text</p>
                            <button id="btn">Login</button>
                        </div>


                        <div className="content">
                            <h1>Apply as a Employee</h1>
                            <div className="subcontent">
                                <div className="first-row">
                                    <input type="text" id="name" name="name" placeholder="First Name* "
                                        { ...formik.getFieldProps( 'name' ) } />
                                    { formik.touched.name && formik.errors.name ? ( <div className="errors">{ formik.errors.name }</div> ) : <div className="noerr"></div>}
                                    
                                    


                                    <input type="text" id="lname" name="lastname" placeholder="Last Name*"
                                        { ...formik.getFieldProps( 'lastname' ) } />
                                    { formik.touched.lastname && formik.errors.lastname ? ( <div className="errors">{ formik.errors.lastname }</div> ) : <div className="noerr"></div>}

                                    <input type="password" id="password" name="password" placeholder="Password"
                                        { ...formik.getFieldProps( 'password' ) } />
                                    { formik.touched.password && formik.errors.password ? ( <div className="errors">{ formik.errors.password }</div> ) :  <div className="noerr"></div> }

                                    <input type="password" id="confpassword" name="confirmpassword" placeholder="Confirm Password "
                                    {...formik.getFieldProps('confirmpassword')} />
                                    {formik.touched.confirmpassword && formik.errors.confirmpassword ? (<div className="errors">{formik.errors.confirmpassword}</div>):  <div className="noerr"></div>}

                                    <span>
                                        <label>Male</label>
                                        <input type="radio"/>

                                        <label>Female</label>
                                        <input type="radio" />
                                    </span>
                                </div>

                                <div className="second-row">
                                    <input type="email" id="email" name="email" placeholder="Your Email* " 
                                    {...formik.getFieldProps('email')}/>
                                    {formik.touched.email && formik.errors.email ? (<div className="errors">{formik.errors.email}</div>):  <div className="noerr"></div>}

                                    <input type="number" id="phone" name="phone" placeholder="Your Phone"
                                    {...formik.getFieldProps('phone')}/>
                                    {formik.touched.phone && formik.errors.phone ? (<div className="errors">{formik.errors.phone}</div>):  <div className="noerr"></div>}
                                    
                                    <input type="text" id="city" name="city" placeholder="City"
                                    {...formik.getFieldProps('city')}/>
                                    {formik.touched.city && formik.errors.city ? (<div className="errors">{formik.errors.city}</div>):  <div className="noerr"></div>}
                                    
                                   
                                    <input type="text" id="country" name="country" placeholder="Country"
                                    {...formik.getFieldProps('country')}/>
                                    {formik.touched.country && formik.errors.country ? (<div className="errors">{formik.errors.country}</div>):  <div className="noerr"></div>}
                                    
                                    
                                    <button type="btn">Register</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default RegistarForm

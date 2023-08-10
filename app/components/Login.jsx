'use client'
import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBTypography
} from 'mdb-react-ui-kit';
import Link from 'next/link'


const Login = () => {
    return ( 
        <MDBContainer fluid className='h-100 d-inline-block'>
         <MDBRow className='d-flex h-100 justify-content-center align-items-center'>
            <MDBCol xl='3' lg='6' md='8' sm='12' className=''>
        <form className='p-5 shadow-5-strong rounded-3'>
            <MDBTypography variant='h1' className='text-center'>Login</MDBTypography>
                    <hr />
            <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
            <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

            <MDBRow className='mb-4'>
                <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                </MDBCol>
                <MDBCol>
                <a href='#!'>Forgot password?</a>
                </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' className='mb-4 text-strong' block>
                Sign in
            </MDBBtn>

            <div className='text-center'>
                <p>
                Not a member? <Link href="/register">Register</Link>
                </p>
                <p>or sign up with:</p>

                 <MDBBtn color="secondary" className='mx-1'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>
                
                <MDBBtn color="secondary" className='mx-1'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
        </form>
        </MDBCol></MDBRow>
        </MDBContainer>
     );
}
 
export default Login;
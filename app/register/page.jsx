'use client'

import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBTypography
} from 'mdb-react-ui-kit';
import Link from 'next/link'

export default function Register() {
  return (
    <MDBContainer fluid className='h-100 d-inline-block'>
        <MDBRow className='d-flex h-100 justify-content-center align-items-center'>
            <MDBCol xl='3' lg='6' md='8' sm='12' className=''>
            <form className='p-5 shadow-5-strong rounded-3'>
                <MDBTypography variant='h1' className='text-center'>Register</MDBTypography>
                <hr />
                <MDBInput className='mb-4' id='username' label='Username' />
                <MDBInput className='mb-4' type='email' id='email' label='Email address' />
                <MDBInput className='mb-4' type='password' id='password' label='Password' />
                <MDBInput className='mb-4' type='password' id='confirmPassword' label='CofirmPassword' />


            <MDBBtn type='submit' className='mb-4' block>
               Register
            </MDBBtn>

            <div className='text-center'>
                  <p>
                    Already have an account? <Link href="/">Log-in</Link>
                  </p>
                <p>or continue with:</p>

                <MDBBtn floating color="secondary" className='mx-1'>
                <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
            </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  
   
  );
}
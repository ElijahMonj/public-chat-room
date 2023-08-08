'use client'

import React from 'react';
import { MDBContainer,MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Image from 'next/image'
import vercel from '@/public/vercel.svg'
export default function About() {
  return (
    <>
      <MDBContainer breakpoint="md" className='text-center bg-primary text-light'>
        <MDBContainer>
            <div>
                <h1>About us</h1>
            </div>
            <div>
                <p>lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd </p>
            </div>
            <MDBRow className='mb-3'>
                <MDBCol  md='4'>
                    <Image
                        src={vercel}
                        width={500}
                        className='img-fluid shadow-2-strong'
                        alt="Picture of the author"
                    />
                    <p>lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd </p>
                </MDBCol>
                <MDBCol  md='4'>
                    <Image
                        src={vercel}
                        width={500}
                        className='img-fluid shadow-2-strong'
                        alt="Picture of the author"
                    />
                    <p>lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd </p>
                </MDBCol>
                <MDBCol  md='4'>
                    <Image
                        src={vercel}
                        width={500}
                        className='img-fluid shadow-2-strong'
                        alt="Picture of the author"
                    />
                    <p>lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd 
                    lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd lorem asd </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </>
  )
}
'use client'

import React from 'react';
import { MDBRipple,MDBTypography } from 'mdb-react-ui-kit';
import Image from 'next/image';
import Link from 'next/link';
const Room = (props) => {
    return (
        <MDBRipple className='bg-image hover-zoom rounded-5' rippleTag='div' rippleColor='light'>
            <Image
                src={props.src}
                width={350}
                style={{maxHeight: 196.875,minHeight:196.875, objectFit:"cover"}}
                className='img-fluid shadow-2-strong'
                alt={props.alt}
            />
            <Link href={props.link}>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <MDBTypography className='text-light fs-4 strong'>{props.name}</MDBTypography>
                </div>
                </div>
                <div className='hover-overlay'>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.05   )' }}></div>
                </div>
            </Link>
        </MDBRipple>
        )
}
 
export default Room;
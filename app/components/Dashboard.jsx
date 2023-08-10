'use client'
import Gaming from '@/public/images/gaming.jpg'
import Politics from '@/public/images/politics.jpg'
import Anime from '@/public/images/anime.png'
import Business from '@/public/images/business.jpg'
import Coding from '@/public/images/coding.jpg'
import General from '@/public/images/general.jpg'
import Sports from '@/public/images/sports.jpg'
import Entertainment from '@/public/images/entertainment.jpg'
import React from 'react';
import { MDBRipple,MDBTypography,MDBContainer,MDBRow,MDBCol } from 'mdb-react-ui-kit';

import Room from './Room';
const Dashboard = () => {
    const rooms =[
        {
            src:General,
            alt:"Gaming Room",
            link:"/room/gaming",
            name:"General",
        },
        {
            src:Sports,
            alt:"Gaming Room",
            link:"/room/sports",
            name:"Sports",
        },
        {
            src:Politics,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Politics",
        },
        {
            src:Gaming,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Gaming",
        },
        {
            src:Anime,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Anime",
        },
        {
            src:Coding,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Coding",
        },
        {
            src:Entertainment,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Entertainment",
        },
        {
            src:Business,
            alt:"Gaming Room",
            link:"/gaming",
            name:"Business",
        },

    ]

    return ( 
        <>
        <div>
           
        </div>
        <MDBContainer breakpoint="md" className='d-flex justify-content-center bg-dark'>
            <MDBRow center>
            {rooms.map((room,index)=>{
                return  <MDBCol key={index} lg='4' md='6' className='text-center p-4'>
                            <Room  
                                src={room.src}
                                alt={room.alt}
                                link={room.link}
                                name={room.name}
                            />    
                        </MDBCol>
            })}
            </MDBRow>
        </MDBContainer>  
        </>
    );
}
 
export default Dashboard;
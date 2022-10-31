import React from 'react';
import styled from 'styled-components';
import '../Assets/styles/houses.css';

import search1 from '../Assets/images/search1.png';
import search2 from '../Assets/images/search2.png';

import rectangle1 from '../Assets/images/Rectangle1.png';
import rectangle2 from '../Assets/images/Rectangle2.png';
import rectangle3 from '../Assets/images/Rectangle3.png';

import frame1 from '../Assets/images/frame1.png';
import frame2 from '../Assets/images/frame2.png';
import frame3 from '../Assets/images/frame3.png';


const H1 = styled.h1`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #1B1C57;
`;
const Div = styled.div`
    display:flex;
    padding-top:8%;
    justify-content:space-between;

`;
const Location = styled.div`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #0E1735;
`
const Houses = () => {
    return (
        <>
        <Div className='container'>
                <H1 className='mx-auto'>Featured Houses</H1>
                <div className='search '>
                        <img src={search2} alt='search1'></img>
                        <img src={search1} alt='search2'></img>
            </div>
            </Div>
            <div className='all d-flex justify-content-center'>
                <div className='card1' style={{ backgroundImage: `url(${rectangle1})` , width:'340px',height:'382px',backgroundRepeat:'no-repeat',padding:'10%' }}  >
                    <div className='img'>
                        <img src={frame1} alt='frame'></img>
                    </div>
                </div>
                <div className='card1' style={{ backgroundImage: `url(${rectangle2})` , width:'340px',height:'382px',backgroundRepeat:'no-repeat',padding:'10%' }}>
                    <div className='img'>
                        <img src={frame2} alt='frame'></img>
                    </div>
                    </div>
                <div className='card1' style={{ backgroundImage: `url(${rectangle3})` , width:'340px',height:'382px',backgroundRepeat:'no-repeat',padding:'10%' }}>
                    <div className='img'>
                        <img src={frame3} alt='frame'></img>
                    </div>
                    </div>
            </div>
            <Location className='d-flex justify-content-evenly'>
                <p >Ngong, Kajiado</p>
                <p>Kawangware</p>
                <p>Uthiru</p>
            </Location>
            
        </>
    );
}

export default Houses;

import React from 'react';
import styled from 'styled-components';

import '../Assets/styles/customers.css'
import ellipse1 from '../Assets/images/ellipse1.png'
import ellipse2 from '../Assets/images/ellipse2.png'

import house1 from '../Assets/images/house1.png'
import house2 from '../Assets/images/house2.png'
import house3 from '../Assets/images/house3.png'

import star from '../Assets/images/star.png'

// import shape1 from '../Assets/images/shape1.png'
// import shape2 from '../Assets/images/shape1.png'
// import shape3 from '../Assets/images/shape1.png'
// import shape4 from '../Assets/images/shape3.png'

import rect1 from '../Assets/images/rect1.png'
import rect2 from '../Assets/images/rect2.png'
import rect3 from '../Assets/images/rect3.png'
import rect4 from '../Assets/images/rect4.png'




const H1 = styled.h1`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #1B1C57;
    text-align:center;
`;
const Content = styled.div`
    position: absolute;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    bottom: 0px;
    cursor: pointer;
    text-align: center;
    background: rgb(220, 217, 217);
    box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
`;
const Hr = styled.hr`
    width:32px;
    height:1px;
    background: #F59E0B;
`;
const P = styled.p`
    width: 155px;
    height: 18px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #F59E0B;
`;
const Book = styled.h1`
    width: 329px;
    height: 40px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    text-transform: capitalize;
    color: #1B1C57;
    margin-left:17%;
`;
const P1 = styled.p`
    width: 390px;
    height: 56px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #626687;
    opacity: 0.75;
    margin-left:17%;
`;
const H2 = styled.h2`
    width: 413px;
    height: 28px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #1B1C57;
    opacity: 0.75;
    margin-left:17%;
`;
const Customers = () => {
    return (
        <div>
            <div className='container occupation d-flex'>
                <Hr className='hr'>
                </Hr>
                <div className='title'>
                    <P>Ready For Occupation</P>
                </div>
            </div>
            <div className='tour'>
                <Book>Book a tour with us</Book>
                <P1>Houses recommended by our partners that have been curated to become the home of your dreams!</P1>
                <H2>House Detail</H2>
            </div>
            <div className='container rooms'>
                {/* <div className='room1 d-flex '>
                <div className='d-flex'>
                <img src={shape1} alt='search1'></img>
                    <p>2 Bedrooms</p>
                </div>
                <div className='d-flex'>
                <img src={shape2} alt='search1'></img>
                    <p>2 Bathrooms</p>
                    </div>
                    </div>
                <div className='d-flex'>
                <div className='d-flex'>
                <img src={shape3} alt='search1'></img>
                    <p>1 Carport</p>
                </div>
                <div className='d-flex'>
                <img src={shape3} alt='search1'></img>
                    <p>1 Floors</p>
                    </div>
                </div> */}
                <div className='rooms d-flex justify-content-enter'>
                    <div>
                    <div className='rect'>
                <img src={rect1} alt='rect1'></img>
                </div> 
                </div>
                    <div className='d-flex'>
                <img src={rect2} alt='rect2'></img>
                    </div>
                <div>
                <img src={rect3} alt='rect3'></img>
                    </div> 
                <div>
                <img src={rect4} alt='rect4'></img>
                </div>     
                </div>
            </div>
            
            <div>
            </div>
            <H1 className='p-5'>What customers say about us</H1>
            <div className='d-flex justify-content-evenly'>
                <div class="box">
                <div class="imageBox">
                    <img src={house3} alt='search1'></img>
        </div>
            <Content class="contentBox">
            <h2>Best! I got the house </h2>
                        
        <p class="tittle">
            I was finally able to sell my house quickly through Hounter by immediately setting me
            up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!
                        </p>
            <div className='d-flex'>
                <img src={ellipse2} alt='search1'></img>
                <div>
                <p>John Maina</p>
                <blockquote>Manager Director, </blockquote>
                            </div>
                            <div>
                                <img src={star} alt='star'></img>
                            </div>
            </div>
        </Content>
            </div>
            <div class="box">
                <div class="imageBox">
                        <img src={house1} alt='search1'></img>
                    
        </div>
                    <Content class="contentBox">
                        <h2>Best! I got the house I wanted through Pata keja</h2>
        <p class="tittle">
            Through this website I can get a house with the type and specifications I want very easily,
            without a complicated process to be able to find information on the house we want.
        </p>
        <div className='d-flex'>
                <img src={ellipse1} alt='search1'></img>
                <div>
                <p>Esther Howard</p>
                <blockquote>Head of Marketing </blockquote>
                            </div>
                            <div>
                                <img src={star} alt='star'></img>
                            </div>
            </div>
        </Content>
            </div>
            <div class="box">
                <div class="imageBox">
                        <img src={house2} alt='search1'></img>
        </div>
            <Content class="contentBox">
            <h2>Through the Hounter, I can get a house for my self</h2>
        <p class="tittle">
            By looking for information about what kind of house we want,
            we managed to get the house we wanted very quickly, and directly
            connected with the seller to be able to ask about the details, very helpful!
                        </p>
                        <div className='d-flex'>
                <img src={ellipse2} alt='search1'></img>
                <div>
                <p>John Maina</p>
                <blockquote>Manager Director, </blockquote>
                            </div>
                            <div>
                                <img src={star} alt='star'></img>
                                {/* <p>4.6</p> */}
                            </div>
            </div>
        </Content>
                </div>
            </div>
            
        </div>
    );
}

export default Customers;

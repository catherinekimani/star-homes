import React from 'react';
import styled from 'styled-components';

import '../Assets/styles/customers.css'
import ellipse1 from '../Assets/images/ellipse1.png'
import ellipse2 from '../Assets/images/ellipse2.png'

import house1 from '../Assets/images/house1.png'
import house2 from '../Assets/images/house2.png'
import house3 from '../Assets/images/house3.png'

import star from '../Assets/images/star.png'

import first from '../Assets/images/first.png'



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
const Customers = () => {
    return (
        <div>
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
            <H1 className='p-5'>Find out more about selling and buying homes</H1>
            <div >
            <div>
                <img src={first} alt='search1'></img>
                <div>
                    <div >
                <img src={ellipse2} alt='search1'></img>
                <div>
                <p>John Maina</p>
                    </div>
            </div>
                </div>
            </div>
            <div>
                <img src={first} alt='search1'></img>
                <div>
                    <div >
                <img src={ellipse2} alt='search1'></img>
                <div>
                <p>John Maina</p>
                    </div>
            </div>
                </div>
            </div>
            <div>
                <img src={first} alt='search1'></img>
                <div>
                    <div >
                <img src={ellipse2} alt='search1'></img>
                <div>
                <p>John Maina</p>
                    </div>
            </div>
                </div>
                </div>
                </div>
        </div>
    );
}

export default Customers;

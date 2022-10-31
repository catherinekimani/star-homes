import React from 'react';
import styled,{css} from 'styled-components';
import logo from '../Assets/images/Rectangle.png'
import navimg from '../Assets/images/nav-img.png'
import '../Assets/styles/main.css'
import '../Assets/styles/mediaquery.css'
import one from '../Assets/images/icon1.png'
import two from '../Assets/images/icon2.png'
import three from '../Assets/images/icon3.png'
import four from '../Assets/images/icon4.png'

const Section = styled.section`
display:flex;
justify-content:space-between;

`
const Container = styled.div`
padding-left:5%

`
const Logo = styled.div`
    display:flex;
    `
const H1 = styled.h1`
    margin-bottom:0 !important;
    padding-top:5%;
    text-transform: capitalize;
    font-family: 'Lexend';
    font-style: normal;
    color: #1B1C57;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 20px;
    text-align: justify;
    ${props => props.primary && css`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 70px;
    text-transform: capitalize;
    text-align: justify;
    padding-top:10%;
    flex-grow: 0;
    width: 450px;
`}
`

const Descr = styled.p`
    width: 500px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 28px;
    color: #626687;
    opacity: 0.75;
    padding-top:10%;
    text-align: justify;
`
const Content = styled.div`

`
const Nav = styled.nav`
border-radius: 2px;
width: 720px;
height: 720px;
margin-left:auto;

`
const Button = styled.button`
    background: rgba(209, 250, 229, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #047857;

    margin: 0.5em 1em;
    padding: 0.25em 1em;
    box-sizing: border-box;
    ${props => props.primary && css`
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.1);
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #F0F3FD;
    border-radius: 32px;

`}
`;
const P1 = styled.p`

    font-family: 'Lexend';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #888B97;
    padding-top:5%;
`
const Buttons = styled.div`
display:flex;
justify-content:start
`
const Div = styled.div`
background: linear-gradient(90deg, rgba(0, 167, 81, 0.74) 3.16%, rgba(209, 250, 229, 0.5254) 64.68%, rgba(209, 250, 229, 0) 82.97%);
border-radius: 0px 4px 4px 0px;
width: 364px;
height: 96.7px;
margin-top:80.5%;
`
const P = styled.p`
font-family: 'Lexend';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
color: #FFFFFF;
`
const Span = styled.span`
font-family: 'Lexend';
font-style: normal;

font-size: 18px;
line-height: 20px;
color: #FFFFFF;
`
const Images = styled.div`
display:flex;
justify-content:space-between;
`
const Main = () => {
    return (
        <div>
            <Section>
                <Container>
                    <Logo>
                        <img src={logo} alt='logo'></img>
                        <H1>StarHomes</H1>
                    </Logo>
                    <Content>
                        <H1 primary>Get A Home to live your dreams with StarHomes</H1>
                        <Descr>No matter your budget. You will always get a
                        safe and sound place for yourself or your family.</Descr>
                    </Content>
                    <form>
                        <input type="text" class="radius" placeholder='Weka location around Nairobi' />
                        <button className='btn'>Search</button>
                    </form>
                    <P1>Our Partnership </P1>
                    <Images>
                        <img src={one} alt='one'></img>
                        <img src={two} alt='two'></img>
                        <img src={three} alt='three'></img>
                        <img src={four} alt='four'></img>
                    </Images>
                </Container>
                <Nav style={{ backgroundImage: `url(${navimg})` }}>
                    <Buttons className='btnn'>
                    <div className='right-btn'>
                    <Button primary>About Us</Button>
                    <Button primary>Article</Button>
                        <Button primary>Property</Button>
                        </div>
                    <div className='left-btn mx-auto'>
                        <Button>Sign Up!</Button>
                        <Button>Login</Button>
                    </div>
                    </Buttons>
                    <Div className=''>
                        <P>Location:<Span>Nairobi West</Span></P>
                        <P>Size:<Span>1 Bedroom</Span></P>
                        <a href='/'>View Details</a>
                    </Div>
                </Nav>
            </Section>
        </div>
    );
}

export default Main;
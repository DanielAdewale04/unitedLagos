import React from 'react'
import { DisplayImage } from './style';
import styled from 'styled-components';
import FadeIn from './wayPoint';

const Quote = () => {
    return(
        <>
            <div style={{width:'100%'}}>
                <FadeIn>
                <div className='quote-widget flex apart centralized-v'>
                    <div>
                        <h1>“United Lagos has made it easier for me to know what is happening in my constituency.”</h1>
                        <p>— Temitope, Banker</p>
                    </div>
                    <DisplayImage 
                        src='app/Group 5.svg'
                        alt='Image'
                    />
                </div>
                <FullImage 
                    src='app/Group 9.png'
                    alt='Danfo Bus Image'
                />
                </FadeIn>
            </div>
        </>
    )
}

export default Quote;

const FullImage = styled.img`
    width:100%;
`
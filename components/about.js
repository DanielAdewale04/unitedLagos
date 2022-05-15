import React from 'react'
import { DisplayImage } from './style';
import FadeIn from './wayPoint';

function About() {
    return(
        <>
            <div className='about-widget'>
                <DisplayImage 
                    src='app/united lagos logo 2.svg'
                    alt='Logo'
                />
                {
                    AboutItems.map((item, index) => (
                        <FadeIn key={index} >
                            <div className={item.reverse ? 'about-card flex apart reversed centralized-v' : 'about-card flex apart centralized-v' }>
                                <DisplayImage 
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                }
            </div>
        </>
    )
}

export default About;

export const AboutItems = [
    {
        title: 'Political Advocacy',
        text: 'United Lagos makes political particiption simple for busy people. We give citizens the information they need to get involved on important issues like security, sanitation, traffic, education, and welfare.  ',
        reverse: false,
        img: './app/Group 6.svg'
    },
    {
        title: 'Public Discourse',
        text: 'There is too much at stake for constituents to not get their voice heard. We create platforms that help to bridge the gap between public officials and the people they serve.',
        reverse: true,
        img: './app/Group 7.svg'
    },
    {
        title: 'Charity',
        text: 'Many educational materials in local languages are often out of date. We work with school leaders and publishers to ensure that students have access to current textbooks that are age appropriate and written in their primary language.',
        reverse: false,
        img: './app/Group 8.png'
    },
]
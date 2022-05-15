import React from 'react'
import FadeIn from './wayPoint';

const Contact = ({contactRef}) => {
    return(
        <>
            <FadeIn>
                <div className='contact-widget flex apart' ref={contactRef}>
                    <div>
                        <div>
                            <h1>Contact</h1>
                            <p>Feel free to contact us with any questions.</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>contact@unitedlagos.org.</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+234 81 8902 1113</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Name</h3>
                            <div className='flex inputs-flex'>
                                <input placeholder='First Name' className='short-input' />
                                <input placeholder='Last Name' className='short-input' />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <input placeholder='Enter your email here' className='long-input' />
                            </div>
                            <div>
                                <h3>Message</h3>
                                <textarea placeholder='What do you want to talk to us about?' className='long-input'></textarea>
                            </div>
                            <button style={{margin:'1rem 0 0 0'}}>Submit</button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </>
    )
}

export default Contact;
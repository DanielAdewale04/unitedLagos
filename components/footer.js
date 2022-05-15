import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => {
    return(
        <>
            <footer className='footer-widget flex apart'>
                <div>
                    <Logo 
                        src='/app/united lagos logo 1.svg' 
                        alt='Logo'
                    />
                    <p>34 Isaac Jones Street <br /> Ikeja, Lagos.</p>
                </div>
                <div className='flex right-widget apart'>
                    <div>
                        <h4>About</h4>
                        <p>
                            <a>
                                <Link href='/vision'>
                                    Our vision
                                </Link>
                            </a>
                        </p>
                        <p>Donate</p>
                    </div>
                    <div>
                        <h4>Social Media</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

const Logo = styled.img`
    width:5rem;
    height:5rem;
`
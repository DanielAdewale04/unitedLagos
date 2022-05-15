import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Header = ({scrollToElement, custom}) => {

    return(
        <>
            <div className='header-main'>
                <div className='flex apart centralized-v'>
                    <div>
                        <a>
                            <Link href='/'>
                                <Logo
                                    src='app/united lagos logo 1.svg'
                                    alt='Ortho Logo'
                                />
                            </Link>
                        </a>
                    </div>
                    <div className='flex header-btns'>
                        <button style={{color: custom}}>Our vision</button>
                        <button style={{color: custom}} onClick={() => scrollToElement()}>Contact Us</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header;

const Logo = styled.img`
    width:5rem
`
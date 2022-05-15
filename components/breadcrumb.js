import React from 'react'
import { useSpring, animated } from 'react-spring';

const Breadcrumb = () => {

    const props = useSpring({
        from: {
            marginTop: '20rem',
            opacity: '0'
        },
        to: {marginTop: '0', opacity: '1'},
        config: {duration: '500', delay: '3000'}
    })

    return(
        <>
            <animated.div className='info-section' style={props}>
                <h1><span>One Lagos <br />One United People.</span></h1>
            </animated.div>
        </>
    )
}

export default Breadcrumb;
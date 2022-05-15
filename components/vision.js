import React from 'react'
import FadeIn from './wayPoint'
import Link from 'next/link'
// import { DisplayImage } from './style'

const Vision = () => {
    return(
        <>
        <FadeIn>
                <div className='vision-widget flex apart'>
                    <div>
                        <h1>Our diversity is our strength</h1>
                        <a>
                            <Link href='/vision'>
                                <button>Our Vision</button>
                            </Link>
                        </a>
                    </div>
                    <div>
                        <p>Lagos is the most populous city in Nigeria, the second fastest-growing city in Africa and the seventh in the world. . In a country with so many challenges, Lagos is thriving — attracting investment and private enterprise. However, more can still be achieved.
                                    <br /><br />
                            At United Lagos, we strive for more. More from our people and more from our government. We believe in celebrating our victories and finding strength in our differences. We work to ensure that the voice of the people is heard through effective dialogue and public communication.</p>
                    </div>
                </div>
            </FadeIn>
        </>
    )
}

export default Vision;
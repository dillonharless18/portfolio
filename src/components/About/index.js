import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const titleArray= ['A','b','o','u','t',' ','M','e',]
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={titleArray}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <p>
                    I'm a very versatile developer with multiple years of experience in the cloud. 
                </p>
                <p>
                    I'm always looking to improve my skillset and am open to learning anything and everything.
                </p>
                <p>
                    In my free time I work on personal projects, surf, skate, play guitar, and hang out with family.
                </p>
            </div>
        </div>
    )
    
}

export default About
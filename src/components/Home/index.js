import LetterD from '../../assets/images/LetterD.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'l', 'l', 'o', 'n']
    const jobArray  = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <img src={LetterD} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={16}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={23}
                    />
                </h1>
                <h2>Fullstack Developer / AWS Solutions Architect</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>
        </div>
    )
}

export default Home
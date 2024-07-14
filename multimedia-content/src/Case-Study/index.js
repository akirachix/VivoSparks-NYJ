import './index.css'
import React from 'react';
const Apex = () => {
    return (
        <div className='container'>
            <h1>The Blind Life, supported by Apex Simulation</h1>

            <div>
                <p className='apex'>
                Giving teachers access to cutting-edge technology, Apex Simulation transforms teaching
                for students with visual impairments. Our platform helps teachers become proficient in
                using assistive technologies by transforming learning experiences through realistic exercises
                and immersive simulations. Join us in fostering inclusivity and innovation in classrooms
                around the world as we bridge the gap between technology and education.
                </p>
            </div>

            <div className='potential'>

                <div className='elevate'>
                    <p>"ELEVATE YOUR TEACHING ELEVATE YOUR POTENTIAL"</p>
                </div>
            </div>

            <div>
                <p className='course-heading'>Our Courses</p>

                <div className='course'>
                    <div>
                    <div>
                        <img src='./Images/text to speech.png' alt='brail' className='image' />
                    </div>

                    <div>
                        <p className='course-type'>Screen Reader</p>
                    </div>
                    </div>
                   
                   <div className='screen'>
                    <div>
                        <img src='./Images/braille.png' alt='screen' className='image' />
                    </div>
                    <div>
                        <p className='course-type'>Braille</p>
                    </div>
                    </div>
                    <div className='screen'>
                    <div>
                        <img src='./Images/screen reader.png' alt='text' className='image' />
                    </div>
                    <div>
                        <p className='course-type'>Text-to-speech</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Apex;
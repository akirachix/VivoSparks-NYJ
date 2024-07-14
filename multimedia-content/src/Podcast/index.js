import './index.css'
import React from 'react';
const Podcast = () =>{
return(
    
        <div className="container">
      
          <div className="main">
            <div>
                <img src='./Images/microphone.png' alt='mike' className='mike'/>
            </div>
            <div>
                <p className='podcast-section'> <span className='podcast'>Podcast </span> <br></br> 
                <span className='vivo'> WITH VIVOSPARKS</span><br></br> <br></br> <span className='real'>REAL TALK</span> <br/> <br/> <br/> <br/> <br/>
                 
                 <span className='play'>COMING SOON</span></p>
            </div>

          </div>
          <footer className="footer">
            <p>&copy; 2024 VIVOSPARK DEVELOPERS</p>
          </footer>
        </div>
      );
    }
export default Podcast


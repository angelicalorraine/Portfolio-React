import React from 'react';
import '../components/styles/footer.css';
import github from './assets/gitHub.png';
import linkedIn from './assets/linkedIn.png';
import resume from './assets/AngelicahernandezResume2.pdf';

function Footer() {
    return (
        <div className=" container-fluid footer">
            <div className="flex-row social justify-space-around justify-content-center">

                <div className="icons">
                    <a href="https://www.linkedin.com/in/angelica-hernandez-301369130/">
                        <img className="socialicon" src={linkedIn} />  </a>
                </div>

                <div className="icons">
                    <a href="https://github.com/angelicalorraine">
                        <img className="socialicon" src={github} /> </a>
                </div>


                <div className="icons">
                    <div className="lead"> <span className="icon material-icons">
                        forward_to_inbox
          </span>
          gel.lorraine@gmail.com</div>
                </div>
                <div className="icons">
                    <div className="lead"> <span className="icon material-icons">
                        phone_callback
          </span>
          (562) 321-0713</div>
                </div>

                <div className="icons">
                    <div className="lead"> <span className="icon material-icons">
                        file_download
          </span> <a href={resume} target="_blank">Angelica's Resume</a></div>
                </div>
            </div>
        </div>



    )
}

export default Footer;
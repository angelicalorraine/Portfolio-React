import React from 'react';
import '../components/styles/footer.css';

function Footer() {
    return (
        <div className=" container-fluid footer">
            <div className="flex-row social justify-content-center">

                <div className="icons">
                    <a href="https://www.linkedin.com/in/angelica-hernandez-301369130/">
                        <img className="socialicon" src="Images/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png" />  </a>
                </div>

                <div className="icons">
                    <a href="https://github.com/angelicalorraine">
                        <img className="socialicon" src="Images/iconfinder_Group_4747499.png" /> </a>
                </div>
            </div>

            <div className="col-md-4 col-sm-12">
                <p className="lead"> <span className="icon material-icons">
                    forward_to_inbox
          </span>
          gel.lorraine@gmail.com</p>
                <p className="lead"> <span className="icon material-icons">
                    phone_callback
          </span>
          (562) 321-0713</p>
                <p className="lead"> <span className="icon material-icons">
                    file_download
          </span> <a href="AngelicahernandezResume2.pdf" target="_blank">Angelica's Resume</a></p>

            </div>
            <h5> Footer</h5>
            <p>Social Icons Here</p>
        </div>

    )
}

export default Footer;
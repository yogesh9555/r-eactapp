import React from 'react';
import '../index.css';
import '../Css/index.css';
import { NavLink } from 'react-router-dom';
const Footer =()=>{
    return(<><div>
        <section className="paralax-mf footer-paralax bg-image route" styles="background-image: url(Assete/backgroundImg.jpg); ">
            <div className="overlay-mf "></div>
            <div className="container ">
                <div className="row ">
                    <div className="col-sm-12 ">
                        <div className="contact-mf ">
                            <div id="contact " className="box-shadow-full ">
                                <div className="row ">
                                    <div className="col-md-6 ">
                                        <div className="title-box-2 ">
                                            <h5 className="title-left ">Send Message Me</h5>
                                        </div>
                                        <div>
                                            {/* <!-- Your message has been sent. Thank you! --> */}
                                            <div id="sendmessage "></div>
                                            <div id="errormessage "></div>
                                            <div className="row ">
                                                <div className="col-md-12 mb-3 ">
                                                    <div className="form-group "><input type="text " name="name " className="form-control " id="name " placeholder="Your Name " data-rule="minlen:4 " data-msg="Please enter at least 4 chars " value=" " />
                                                        <div className="validation "></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3 ">
                                                    <div className="form-group "><input type="email " className="form-control " name="email " id="email " placeholder="Your Email " data-rule="email " data-msg="Please enter NavLink valid email " value=" " />
                                                        <div className="validation "></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3 ">
                                                    <div className="form-group "><input type="text " className="form-control " name="subject " id="subject " placeholder="Subject " data-rule="minlen:4 " data-msg="Please enter at least 8 chars of subject" value=" " />
                                                        <div className="validation "></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3 ">
                                                    <div className="form-group "><textarea className="form-control " name="message " rows="5 " data-rule="required " data-msg="Please write something for us " placeholder="Message "></textarea>
                                                        <div className="validation "></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 "><button className="button button-NavLink button-big button-rouded"><a href="/">Send Message</a></button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"><br />
                                        <div className="title-box-2 pt-4 pt-md-0 ">
                                            <h5 className="title-left ">Get in Touch</h5>
                                        </div>
                                        <div className="more-info ">
                                            <ul className="list-ico ">
                                                <li><span className="ion-ios-location "></span> 1576, NIT Faridabad</li>
                                                <li><span className="ion-ios-telephone "></span> <NavLink to="tel:+917042449373 ">+91 7042449372</NavLink></li>
                                                <li><span className="ion-email "></span> <NavLink to="yt4049952@gmail.com ">yt4049952@gmail.com</NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="socials flex "><NavLink to="/ " target="_blank "><span className="ico-circle "><i className="ion-social-linkedin "></i></span></NavLink>
                                            <h4><NavLink to="/ " target="_blank ">My LinkedIn Profile</NavLink></h4>
                                        </div>
                                        <div className="socials flex pt0 "><NavLink to="/ "><span className="ico-circle "><i className="ion-android-attach "></i></span></NavLink>
                                            <h4><NavLink to="https://drive.google.com/file/d/1EMQSVACwHKCzSVqIodSrP46kKCcw_gSi/view?usp=sharing">Download My CV</NavLink></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/><br/><br/>
            <footer>
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm-12 ">
                            <div className="copyright-box ">
                                <p className="copyright ">©Copyright <strong>YogeshRajput</strong>. All Rights Reserved</p>
                                <div className="credits ">Designed by YogeshRajput</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        <NavLink to="# " className="back-to-top " styles="display: inline; "><i className="ion-android-arrow-up f32 "></i></NavLink>
    </div>

    </>);
}
export default Footer;
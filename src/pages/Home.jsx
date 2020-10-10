import React from 'react';
import '../Css/index.css';
import Comman from './Comman';
import Footer from './Footer';
// import $ from "jquery";

const Home = () => {
    return (
        <>
            <div>
                <div className="sect-pt4 mt24 ">
                    <div id="home " className="intro route bg-image overflowh">
                        <div className="sq1 "></div>
                        <div className="sq2 "></div>
                        <div className="overlay-itro "></div>
                        <div className="intro-content display-table ">
                            <div className="table-cell ">
                                <div className="container ">
                                    <h1 className="intro-title mb-4 ">I am YogeshRajput</h1>
                                    <p className="intro-subtitle "><span className="front ">Frontend Developer</span><strong className="text-slider "></strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-counter paralax-mf bg-image " styles="/background-image: url(/Assete/office.jpg); ">
                    <div className="overlay-mf "></div>
                    <div className="container ">
                        <Comman/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
export default Home;
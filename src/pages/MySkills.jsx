import React from 'react';
import '../Css/index.css';
const MySkills = ()=>{
    return(<>
    <br/><br/>
    <br/><br/>
    <div className="section-counter paralax-mf bg-image " styles="/background-image: url(/Assete/office.jpg); ">
    <div className="row pt40 ">
    <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
        <div className="counter-box flex ">
            <div className="counter-ico flex ">
                <div className="flex alignCenter"><img src={require("../Assete/html5.png")} alt="HTML" /></div>
            </div>
        </div>
    </div>
    <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
        <div className="counter-box flex ">
            <div className="counter-ico flex ">
                <div className="flex alignCenter "><img src={require("../Assete/css.png")} alt="CSS" /></div>
            </div>
        </div>
    </div>
    <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
        <div className="counter-box flex ">
            <div className="counter-ico flex ">
                <div className="flex alignCenter "><img src={require("../Assete/javascript.png")} alt="JavaScript " /></div>
            </div>
        </div>
    </div>
    <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
        <div className="counter-box flex ">
            <div className="counter-ico flex ">
                <div className="flex alignCenter "><img src={require("../Assete/React.png")} alt="React" /></div>
            </div>
        </div>
    </div>
</div>
    <div className="row pt30 ">
        <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
            <div className="counter-box flex ">
                <div className="counter-ico flex ">
                    <div className="flex alignCenter "><img src={require("../Assete/jquery.png")} alt="Jquery" /></div>
                </div>
            </div>
        </div>
        <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
            <div className="counter-box flex ">
                <div className="counter-ico flex ">
                    <div className="flex alignCenter "><img src={require("../Assete/bootstrap.png")} alt="Bootstrap" /></div>
                </div>
            </div>
        </div>
        <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
            <div className="counter-box flex ">
                <div className="counter-ico flex ">
                    <div className="flex alignCenter "><img src={require("../Assete/java1.png")} alt="Java" /></div>
                </div>
            </div>
        </div>
        <div className="col-sm-3 col-lg-3 col-6 flex justifyCenter ">
            <div className="counter-box flex ">
                <div className="counter-ico flex ">
                    <div className="flex alignCenter "><img src={require("../Assete/python.png")} alt="Python" /></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>);
}
export default MySkills;
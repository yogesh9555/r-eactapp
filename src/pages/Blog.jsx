import React from 'react';
import '../Css/Blog.css';
import { NavLink } from 'react-router-dom';
const Blog =()=>{
    return(<>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="Blog">
        <div className="container">
        <div className="box">
            <p>How to download Visual studio code in windows 7/8/10...and install. Than Proper Working ?
            </p>
        </div>
    </div>
    <div>
        <div className="textbox">
            <p>Step1-:<a href="https://aka.ms/win32-x64-user-stable">Download Visual studio code</a> and install.<br/> Step by Step Click Next Next!
            </p>
        </div>
        <div className="imagebox">
            <img src={require("../Assete/vscode.jfif")} alt="vscode"/>
            <p>
                <a href="https://aka.ms/win32-x64-user-stable">Visual Studio code!</a>
            </p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step2-:<a href="https://osdn.net/frs/redir.php?m=plug&f=mingw%2F68260%2Fmingw-get-setup.exe">Download MingW</a> and install. Step by Step..
                <br/> Click Next and Next.!</p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/mingwgetinst1.png")} alt="mingwgetinst1"/>
            <p>
                <a href="https://osdn.net/frs/redir.php?m=plug&f=mingw%2F68260%2Fmingw-get-setup.exe">MingW</a> and install.!
            </p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step3-:Go to Your
                <a href=""> Local Disk (C:)</a> drive see the MingW <br/>Folder Like this image..!
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/locationMinGw.png")} alt="locationMinGw"/>
            <p>
                See The MingW Folder! </p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step4-:Go to Your
                <a href=""> Local Disk (C:)</a> drive and Open the<br/> MingW folder than bin folder copy the bin folder<br/>location like this image..!
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/binLocation.png")} alt="binLocation"/>
            <p>
                See The MingW Folder than bin folder! </p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step5-:Go to Your
                <a href=""> This Pc</a> and right click on <a href=""> This Pc</a><br/> Than Click a Properties!
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/properties.png")} alt="properties"/>
            <p>
                See Than Click a Properties!</p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step6-:Go to<a href=""> This page</a> and click<a href=""> Advanced System Settings</a><br/> See this image on Your screen highlighted this section!
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/AdvancedSystem.png")} alt="AdvancedSystem"/>
            <p>
                See this image on Your screen!</p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step7-:Go to<a href=""> This page</a> Open this Screen See this image
                <br/>on Your screen like this Image click on Enviroment Variables!
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/gotoAdvance.png")} alt="gotoAdvance"/>
            <p>
                See this image on Your screen!</p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step7-: Click on Enviroment Variables and goto this page see
                <br/> a image than click a path on (system Variable section)
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/path.png")} alt="path"/>
            <p>
                See this image on Your screen!</p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step8-: DblClick a path on (system Variable section)<br/> And see this page on your screen a image and<br/> click new button on your screen!</p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/setpath.png")} alt="setpath"/>
            <p>
                See this image on Your screen!</p>
        </div>
    </div>
    <br/>
    <div>
        <div className="textbox2">
            <p>Step8-:Click New Button On Your Screen and Paste<br/> a Address(Path).Your Bin Folder Like this Image! <br/>See tha last Path
            </p>
        </div>
        <div className="imagebox2">
            <img src={require("../Assete/mingwpath.png")} alt="mingwpath"/>
            <p>
                See this image on Your screen!</p>
        </div>
    </div>
    <br/>
    <div className="container">
        <div className="box">
            <p>ThankYou So Much See This Page I Hope This Page Helpfull For You. and Proper Working!
            </p>
        </div>
    </div>
    </div>
    <br/>
    </>)
}
export default Blog;
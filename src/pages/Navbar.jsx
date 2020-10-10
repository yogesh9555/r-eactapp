import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
// import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';
import '../Css/index.css';
const Navbar =()=>{
    return (<>
        <div>
        <nav className="navbar navbar-b navbar-reduce navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <h1 styles="color: rgb(175, 175, 175);">&lt;<span styles="color: rgb(12, 118, 250);">YogeshRajput</span> /&gt;</h1><button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span><FilterListIcon className="ReorderOutlinedIcon"/></button>
                <div className="navbar-collapse justify-content-end collapse" id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link js-scroll active" to="/Home" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/About">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/MySkills">My Skills</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/AddList">React Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/JsProject">JS Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/Blog">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll" to="/Login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
        </>
    );
}
export default Navbar;
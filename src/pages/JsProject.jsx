import React from 'react';
import '../Css/project.css';
const JsProject = () => {  
    return (<>
        <br />
        <br />
        <br />
        <br />
        <div id="container">
            <div id="calculator">
                <p id="name">JAVASCRIPT CALCULATOR</p>
                <p id="homes">(Comming Soon)</p>
                <div id="result">
                    <div id="history">
                        <div id="history">
                            <p id="history-value"></p>
                        </div>
                        <div id="output">
                            <p id="output-value"></p>
                        </div>
                    </div>
                </div>
                <div id="keyboard">
                    <button className="operator" id="clear" >C</button>
                    <button className="operator" id="backspace">CE</button>
                    <button className="operator" id="%">%</button>
                    <button className="operator" id="/">&#247;</button>

                    <button className="number" id="7" >7</button>
                    <button className="number" id="8">8</button>
                    <button className="number" id="9">9</button>

                    <button className="operator" id="*">&times;</button>
                    <button className="number" id="4">4</button>
                    <button className="number" id="5">5</button>
                    <button className="number" id="6">6</button>

                    <button className="operator" id="-">-</button>
                    <button className="number" id="1" >1</button>
                    <button className="number" id="2">2</button>
                    <button className="number" id="3">3</button>
                    
                    <button className="operator" id="+">+</button>
                    <button className="empty" id="empty"></button>
                    <button className="number" id="0">0</button>
                    <button className="empty" id="empty"></button>
                    <button className="operator" id="=">=</button>
                </div>
            </div>
        </div>
    </>
    );
}
export default JsProject;
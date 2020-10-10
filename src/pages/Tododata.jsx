import React from 'react';
import '../Css/index.css';
import DeleteIcon from '@material-ui/icons/Delete';
const Tododata = (props) => {
    return (<>
        <div className="todo_style">
            <i onClick={()=>{
                props.onSelect(props.id);
            }}><DeleteIcon className="deleteIcon"/></i>
            <li>{props.text}</li>
        </div>
    </>);
}
export default Tododata;
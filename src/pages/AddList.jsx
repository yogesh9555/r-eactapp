import React from 'react';
import { useState } from 'react';
import '../Css/AddList.css';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Tododata from './Tododata';


const AddList =()=> {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
 
  }
  const listInItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  const deleteItem =(id)=>{
    setItems((oldItems) =>{
      return oldItems.filter((arrElem , index)=>{
        return id!== index;
      })
    })
  }
  function inputs(){
    if(document.getElementById("input")==""){
      inputList("");
    }
  }

  return (<>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" id="input"  placeholder="Add a item" 
        value={inputList}
        onChange={itemEvent} />
        <Button className="newBtn" onClick={listInItem}><AddIcon/></Button>
        <ol>
          {/* <li>{inputList}</li> */}
          {
            Items.map((itemval,index) => {
            return <Tododata key={index}
            id={index}
            onSelect = {deleteItem}
             text = {itemval}/>
            })
          }
        </ol>
      </div>
    </div>
  </>
  );
}

export default AddList;

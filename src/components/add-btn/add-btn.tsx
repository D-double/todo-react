import './add-btn.css'
import useNotes from "../../hooks/useNotes";
import { editImg } from '../../assets/images';
import React from 'react';

function AddBtn() {
  const {setModal} = useNotes();
  return ( 
    <button className="add" onClick={()=>{
      setModal(true)
    }}>
      <img src={editImg} alt=""/>
    </button>
  );
}

export default AddBtn;
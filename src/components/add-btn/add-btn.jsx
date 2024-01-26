import './add-btn.css'
import useNotes from "../../hooks/useNotes";
import { editImg } from '../../assets/images';

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
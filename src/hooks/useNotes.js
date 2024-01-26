import { useContext } from "react"
import { NotesContext } from "../context/notesContext"

const useNotes = ()=>{
  const value = useContext(NotesContext);
  return value;
}
export default useNotes
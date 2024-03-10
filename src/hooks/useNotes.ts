import { useContext } from "react"
import { NotesContext } from "../context/notesContext"

const useNotes = ()=>{
  const value = useContext(NotesContext);
  if (!value) { throw new Error("useGetComplexObject must be used within a Provider") }
  return value;
}
export default useNotes
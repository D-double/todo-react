/* eslint-disable react/prop-types */
import useNotes from "../../hooks/useNotes";

function NoteItem({ grid, note }) {
  const { delNote, editNote } = useNotes();
  return (
    <div className="card">
      <div className={grid ? "" : "card__content"}>
        <h3 className="card__title">{note.title}</h3>
        <p className="card__date">{note.date}</p>
      </div>
      <p className="card__desc">{note.desc}</p>
      <div className="card__controls">
        <button className="card__btn" onClick={() => editNote(note.id)}>
          <img src="@/assets/img/edit.svg" alt="" />
          {/* <span>{ words.editbtn[lang] }</span> */}
          <span>Редактировать</span>
        </button>
        <button className="card__btn card__btn_red" onClick={() => delNote(note.id)}>
          <img src="@/assets/img/delete.svg" alt="" />
          {/* <span>{ words.deledit[lang] }</span> */}
          <span>Удалить</span>
        </button>
      </div>
    </div>
  );
}

export default NoteItem;

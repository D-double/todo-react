import './navbar.css'

const Navbar = ()=>{
  return (
    <header className="header">
    {/* <Transition nameN="header"> */}
      <div className="header__content">
        <button className="header__lang">UZ</button>
        <button className="header__lang">RU</button>
        {/* <h1 className="header__title">{words.appbartitle[lang]}</h1> */}
        <h1 className="header__title">заметки</h1>
        <button className="header__search">
          <img src="@/assets/img/search.svg" alt=""/>
        </button>
      </div>
    {/* </Transition> */}
    {/* <Transition name="header"> */}
      <div className="header__form">
        <button className="header__back">
          <img src="@/assets/img/back.svg" alt=""/>
        </button>
        <input type="text" className="header__input container" placeholder="Поиск..."/>
        <button className="header__close">
          <img src="@/assets/img/close.svg" alt=""/>
        </button>
      </div>
    {/* </Transition> */}
  </header>
  )
}

export default Navbar
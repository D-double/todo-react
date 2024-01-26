import { useEffect, useRef } from "react";

function Transition({showClass, hide, children, onClick}) {
  const elem = useRef(null);
  useEffect(()=>{
    if(elem && hide) {
      elem.current.classList.add(`${showClass}_hide`)
      setTimeout(() => {
        elem.current.style.display = 'none'
      }, 500);
    } 
    else if(elem && !hide) {
      elem.current.removeAttribute('style')
      setTimeout(() => {
        elem.current.classList.remove(`${showClass}_hide`)
      }, 100);
    }
  })
  return ( 
    <div ref={elem} className={showClass} onClick={onClick}>
      {children}
    </div>
  );
}

export default Transition;
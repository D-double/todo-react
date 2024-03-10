import { useEffect, useRef, useState } from "react";

function Transition({showClass, hide, children, onClick}) {
  // const elem = useRef(null);
  const [elem, setElem] = useState(hide);
  // useEffect(() => {
  //   if(elem && hide) {
  //     elem.current.style.display = 'none'
  //   } 
  // }, []);
  let show = true;
  console.log(hide);
  useEffect(()=>{
    if(hide) {
      setTimeout(() => {
        // setElem(false)
        show = false;
      }, 500);
    } 
    else {
      // setElem(true)
      show = true;
    }
  }, [hide])
  
  return ( 
    elem && <div className={show ? `${showClass} ${showClass}_hide` : `${showClass}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Transition;
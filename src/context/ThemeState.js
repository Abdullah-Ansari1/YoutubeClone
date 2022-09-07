import { useState } from "react";
import ThemeContext from "./Theme";

const ThemeState=(props)=>{
  const[mode, setMode]=useState(true);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  
  const setColor = (color)=>{
    setCurrentColor(color);
}
  const handleState=()=>{
    setMode(!mode);
  }
    return(
        <ThemeContext.Provider value={{mode, handleState,setColor,currentColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeState;
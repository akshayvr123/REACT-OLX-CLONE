import { createContext ,useState} from "react";

export const productssContext=createContext()

function Postss ({children}){
    const [product,setProduct]=useState([])
  return(
    <productssContext.Provider value={{product,setProduct}}>
        {children}
    </productssContext.Provider>
  )
}
export default Postss
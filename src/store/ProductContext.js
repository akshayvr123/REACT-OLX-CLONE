import { createContext ,useState} from "react";

export const productContext=createContext()

function Posts ({children}){
    const [products,setProducts]=useState([])
  return(
    <productContext.Provider value={{products,setProducts}}>
        {children}
    </productContext.Provider>
  )
}
export default Posts
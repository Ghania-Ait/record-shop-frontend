import {createContext,useState,useEffect} from "react";
export const context = createContext();


const ContextProvider=props=>{
     const [records, setRecords]=useState([])

    // const [addRecordData,setAddRecordData]=useState({
    //     Title:'',
    //     Artist:'',
    //     Year:'',
    //     Price:'',
    // })
    useEffect(()=>{
        fetch('http://localhost:4001/records')
            .then(res =>res.json())
            .then(json=> setRecords(json))
    },[])


return(
    <context.Provider  value={{records, setRecords}}>
     {props.children}
    </context.Provider>
)

}
export default ContextProvider;
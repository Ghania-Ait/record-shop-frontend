import React,{ useContext, useState,useEffect} from 'react';
import Recordlist from '../components/RecordsList/RecordList';
//import {nanoid} from 'nanoid';
import {context} from '../context/context';

export function RecordsAdd(props) {
    // const [records, setRecords]=useState([]);
    //const [records, setRecords]=useState([])
    const{records,setRecords} = useContext(context)
    
    //  useEffect(()=>{
    //        fetch('http://localhost:4001/records')
    //          .then(res =>res.json())
    //          .then(json=> setRecords(json))
    //  })
    
    const [addRecordData,setAddRecordData]=useState({
        title:'',
        artist:'',
        year:'',
        price:'',
    })
    


   

const handleAddRecordChange=(e)=>{

    // e.preventDefault();
    const fieldTitle = e.target.name;
    const fieldValue= e.target.value;

    const newRecordData = {...addRecordData};
    newRecordData[fieldTitle] = fieldValue;
    setAddRecordData(newRecordData)

}
const addFormSubmit=(e)=>{
e.preventDefault();
const newRecord ={
    
    title: addRecordData.title,
    artist: addRecordData.artist,
    year: addRecordData.year,
    price: addRecordData.price,
}

fetch('http://localhost:4001/records',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newRecord),
})
.then(res=>res.json())
.then(data=> {
    console.log('Post request success', data)

    const newRecords= [...records, newRecord]
    setRecords(newRecords)
})


}



    return (
        <div>
            {/* <table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {records.map(record =>
                         <tr>
                         <td>{record.Title  } </td>
                         <td>{record.Artist } </td>
                         <td>{record.Year} </td>
                         <td>{record.Price} </td>
                     </tr>

                    )}
                   
                </tbody>
            </table> */}
            
       <Recordlist/>
           <h2>Add a Record</h2>
           <form onSubmit={addFormSubmit} >
               <input type="text"
                       name="title"
                       required='required'
                       placeholder="Enter a Title..." onChange={handleAddRecordChange}/>

                 <input type="text"
                       name="artist"
                       required='required'
                       placeholder="Enter an Artist Name..."onChange={handleAddRecordChange}/>
                <input type="text"
                       name="year"
                       required='required'
                       placeholder="Enter a Year..." onChange={handleAddRecordChange}/>
               <input type="text"
                       name="price"
                       required='required'
                       placeholder="Enter a Price..." onChange={handleAddRecordChange}/>

                       <button type="submit">Add</button>
           </form>
        </div>
    )
}
export default RecordsAdd;
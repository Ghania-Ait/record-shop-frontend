import React , {useContext,useEffect,useState} from 'react';
import './RecordsList.css';
import {context} from '../../context/context';


export function Recordlist() {
    // const [records, setRecords]=useState([])
    const{records} =useContext(context)
    
    //  useEffect(()=>{
    //        fetch('http://localhost:4001/records')
    //          .then(res =>res.json())
    //          .then(json=> setRecords(json))
    //  },[])

    return (
        <div className="container">
            <table>
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {records.map(record =>
                         <tr>
                         <td>{record.title  } </td>
                         <td>{record.artist } </td>
                         <td>{record.year} </td>
                         <td>{record.price} </td>
                     </tr>

                    )}
                   
                </tbody>
            </table>
        </div>
    )
}
export default Recordlist; 
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Context from '../../context/context';
import './index.scss'

const Dashboard = () => {

    const [inputValue, setInputValue] = useState('');
    const {state, dispatch} = useContext(Context);
    const addDataDispatch = data => dispatch({type:"ADD", payload: data})
  

    const productButtons = useCallback(()=> {
        console.log(sort([3,100,45,2,5,122,54,7,6]))
        const buttons = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
        return(
            buttons.map((value, index) => (
                <div key={index} className=" btn btn-warning m-1 col "
                onClick={()=>setInputValue(inputValue.concat(value))}>{value}</div>
            ))

        )
        }
    )

    const dialingButton = useCallback( () => {
        if (/^\d+$/.test(inputValue ) && inputValue.length > 7){
            const data = {"phone" : inputValue,
                          "date" : new Date().toLocaleDateString('en-US')};
            addDataDispatch(data);
        }
        else alert('The number is not valid')

    })

    const sort = (arr) => {
        let swap = true;
        while(swap){
            swap=false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]>arr[i+1]){
                    swap=true
                    let temp =arr[i]
                    arr[i]=arr[i+1]
                    arr[i+1]=temp
                }                
            }
        }
        return arr
    }

    return (

        <div className="wrap">
            <div>
                <input type="text" value={inputValue} 
                 onChange={(e)=>setInputValue(e.target.value)} placeholder="Enter Number"/>
                <div className="m-1 form">{productButtons()}</div>
                <button className="btn btn-success" onClick={dialingButton}>dialing</button>
                <button className="btn btn-secondary mx-2" onClick={()=> setInputValue('')}>Clear</button>
                <div>{state.appData.map((value, index) =>(
                       <ul key={index}>{`Phone Number : ${value.phone} Date : ${value.date}`}</ul>
                     ))}
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
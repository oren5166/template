import React, { useContext, useState } from 'react';
import Context from '../context/context';

const CreateMessage = () => {

    const [inputValue, setInputValue] = useState('');
    let {state, dispatch} = useContext(Context);
    const addMessageDispatch = data => dispatch({type:"ADD_MESSAGE", payload: data})
    const send = ()=> {
        const data = {message:inputValue}
        addMessageDispatch(data);
        setInputValue('');
    }

    return (

        <div className="createMessage">
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={send}>Submit</button>
           
        </div>
    )
};

export default CreateMessage;
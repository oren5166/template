import React, { useContext } from 'react';
import Context from '../context/context';

const Messages = () => {
    
    let {state} = useContext(Context);

    return (

        <div className="messages">
           {state.messages.map((value, index) => (
            <div className="message" key={index}>
                <div className="message_user">
                   1
                </div>
                <div className="message_content">
                  {value.message}
                </div>
            </div>
        ))}
        </div>
    )
};

export default Messages;
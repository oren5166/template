import React from 'react';
import CreateMessage from '../../components/CreateMessage';
import Messages from '../../components/Messages';

const Chat = () => {


    return (

        <div className="chat">
           <Messages/>
           <CreateMessage/>
        </div>
    )
};

export default Chat;
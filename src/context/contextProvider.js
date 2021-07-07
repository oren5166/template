import React , {useReducer} from "react";
import Context from './context';

const initialState = {appData:[],messages:[]};

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD" :
            return {...state, appData: state.appData.concat(action.payload)};
        case "ADD_MESSAGE":
            return {...state, messages: state.messages.concat(action.payload)};
        default:
            return state;

    }
};

const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
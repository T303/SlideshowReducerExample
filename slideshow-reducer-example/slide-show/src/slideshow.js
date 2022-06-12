import React, { useReducer } from 'react'

const initialState = {
    imagePathList: ['/images/Bear.jpg', '/images/Otter.jpg', '/images/Elephant.jpg'],
    pathIndex: 0
};

export default function Slideshow(){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <button onClick={() => dispatch({type: 'previous'})}>Previous</button>
            <button onClick={() => dispatch({type: 'next'})}>Next</button>
            <div>
                <img src={state.imagePathList[state.pathIndex]} className='slideshow-image'/>
            </div>
            <h3>Current slide: {state.pathIndex}</h3>
        </div>
    );
}

function reducer(state, action){
    console.log("trying to " + action);
    let newPathIndex = state.pathIndex;
    switch(action.type){
        case "next":
            if(newPathIndex++ >= state.imagePathList.length - 1){
                newPathIndex = 0;
            }
            return {...state, pathIndex: newPathIndex};
        case "previous":
            if(newPathIndex-- <= 0){
                newPathIndex = state.imagePathList.length - 1;
            }
            return {...state, pathIndex: newPathIndex};
        default:
            throw new Error();
    }
}
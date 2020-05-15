import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action){
    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state, {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED: 
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_UPDATED:
            console.log(state);
            //update this
            
            return(

                state['id'] = action.payload.id
            );

        default:
            console.log("This is Default");
            return state;
    }



    // if(action.type === 'bugAdded')
    // return [
    //     ...State, {
    //         id: ++lastId,
    //         description: action.payload.description,
    //         resolved: false
    //     }
    // ]; 
    // else if (action.type === 'bugRemoved'){
    //     return State.filter(bug => bug.id !== action.payload);
    // }
    // return State;
}
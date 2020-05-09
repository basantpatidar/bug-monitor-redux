import * as actions from './actionTypes';

export const bugAdded = description => ({
        type: actions.BUG_ADDED,
        payload:{
        description: description
        }
    });

// export function bugAdded (description){
//     return {
//         type: actions.BUG_ADDED,
//         payload:{
//         description: 'BugOne'
//         }
//     }
// }


export const bugRemoved = () =>{
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: 1
        }
    }
}
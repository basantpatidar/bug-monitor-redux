import store from './store';
import {bugAdded, bugRemoved} from './actions';

const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed", store.getState());
    
});

store.dispatch(bugAdded('BugOne'));

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload:{
//     description: 'BugOne'
//     }
// });

unsubscribe();

// store.dispatch(bugRemoved());

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })

console.log(store.getState());


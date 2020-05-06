import store from './store';

store.dispatch({
    type: 'bugAdded',
    payload:{
    description: 'BugOne'
    }
});

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})

console.log(store.getState());


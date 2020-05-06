import store from './store';

store.dispatch({
    type: 'bugAdded',
    description: 'BugOne'
});

console.log(store.getState());


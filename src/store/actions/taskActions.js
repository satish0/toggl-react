import { ADD_TASK, ADD_PROJECT, GET_TASK } from '../../store/type'

// export const addTask = (task) => {
//     return (dispatch, getState, {getFirestore}) => {
//         // make async call to database
//         const firestore = getFirestore();
//         firestore.collection('tasks').add({
//             ...task,
//             authorId: 12345,
//             createdAt: new Date()
//         }).then(() => {
//             dispatch({ type: 'ADD_TASK_SUCCESS' });
//         }).catch(err => {
//             dispatch({ type: 'ADD_TASK_ERROR' }, err);
//         });
//     }
// };

export const addTask = (task) => {
    return (dispatch) => {
        dispatch({ 
            type: ADD_TASK, 
            payload: task 
        });
    }
};

export const addProject = (project) => {
    console.log(project)
    return (dispatch) => {
        dispatch({ 
            type: ADD_PROJECT, 
            payload: project 
        });
    }
};

export const getTask = (task) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TASK_SUCCESS' });
    }
};

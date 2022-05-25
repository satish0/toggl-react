import { ADD_TASK, ADD_PROJECT, GET_TASK } from '../../store/type'

const initialState = {
  taskLists: [
    {
        "id": "rJPRSpnrr",
        "taskName": "contact us page created in wordpress and responsive",
        "project": "ashoka",
        "timeCapture": "0:01:24",
        "date": new Date()
    },
    {
        "id": "QEZ10NPkd",
        "taskName": "contact us page created",
        "project": "ashoka",
        "timeCapture": "0:00:56",
        "date": new Date()
    },
    {
        "id": "fAWpYM4Pv",
        "taskName": "arm website blog weekly blog added",
        "project": "arm",
        "timeCapture": "0:00:57",
        "date": new Date()
    }
  ],
  projects: [
    {
        "id": "rJPRSpnrr",
        "projectName": "Arm"
    },
    {
        "id": "rJPRSpnrr",
        "projectName": "Ashoka"
    },
    {
        "id": "rJPRSpnrr",
        "projectName": "Tech"
    }
  ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
          console.log(action.payload)
          console.log(state)
          return {
            ...state,
            taskLists: [action.payload, ...state.taskLists]
          };

        case 'ADD_TASK_ERROR':
          console.log('ADD TASK ERROR');
          return state;

        case ADD_PROJECT:
          console.log(state.projects);
          console.log('ADD PROJECT');
          return {
            ...state,
            projects: [action.payload, ...state.projects]
          };

        case GET_TASK:
          console.log(state.taskLists);
          console.log('GET TASK');
          return state.taskLists;

        default:
          return state;
    }
}
export default taskReducer
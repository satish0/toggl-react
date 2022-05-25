import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'
import useTimer from '../../../../hook/useTimer'
import { formatTime } from '../../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../../../store/actions/taskActions'
import shortid from 'shortid'
import SelectProject from './SelectProject'
import './AddTask.css'


function AddTask() {

    const [ taskName, setTaskName] = useState('')
    const [ project, setProject] = useState('')
    const [ timeCapture, setTimeCapture] = useState('')

    const { timer, isActive, handleStart, handleReset } = useTimer(0)

    const dispatch = useDispatch();
    const allProjectList = useSelector(state => state.tasks.projects);
    console.log(allProjectList);

    const taskNameHandler = (e) => {
        setTaskName(e.target.value)
        console.log(e.target.value)
    }

    const projectHandler = (e) => {
        setProject(e.target.value)
        console.log(e.target.value)
    }

    const onSubmitAddTask = (e) => {
        e.preventDefault()
        setTimeCapture(formatTime(timer))

        const taskList = {
            id: shortid.generate(),
            taskName: taskName,
            project: project,
            timeCapture: formatTime(timer),
            date: new Date()
        }
        console.log(JSON.stringify(taskList))
        dispatch(addTask(taskList))
    }

    return (
        <>
            <div className="cp add-task">
                <form onSubmit={(e) => handleReset(onSubmitAddTask(e))}>
                    <input type="text" onChange={taskNameHandler} value={taskName} placeholder="What are you working on?" />
                    <div className="action-option">
                        <SelectProject 
                            projectHandler={projectHandler} 
                            project={project} 
                            allProjectList={allProjectList} 
                        />
                        <div className="action timer">
                            <p>{formatTime(timer)}</p>
                        </div>
                        <div className="action play">
                            {!isActive ?
                                (<button className="play" onClick={handleStart}><FontAwesomeIcon icon={faPlayCircle} /></button>)
                                : (<button className="stop" type="submit"><FontAwesomeIcon icon={faStopCircle} /></button>) }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTask

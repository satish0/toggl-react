import React from 'react'
import Logout from '../../authComponent/Logout'
import DayTaskList from './DayTaskList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function WeekTaskList() {
    const taskLists = useSelector(state => state.tasks.taskLists)
    const allProjectList = useSelector(state => state.tasks.projectList)
    console.log(taskLists)
    return (
        <>
            <div className="task-list">
                <div className="day-actions bg-cust-white">
                    <div className="cust-date-p">
                        <p>Tue, 11 May</p>
                    </div>
                    <div className="cust-time-p total-time">
                        <div className="cust-time">
                            <p>0:00:00</p>
                        </div>
                        <div className="task-hover-c bulk-action">
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                    </div>
                </div>
                {taskLists.map((taskList, index) => (
                    <DayTaskList taskList={taskList} key={index} allProjectList={allProjectList} />
                ))}
            </div>
            {/* <div className="task-list">
                <div className="day-actions bg-cust-white">
                    <div className="cust-date-p">
                        <p>Tue, 11 May</p>
                    </div>
                    <div className="cust-time-p total-time">
                        <div className="cust-time">
                            <p>0:00:00</p>
                        </div>
                        <div className="task-hover-c bulk-action">
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                    </div>
                </div>
                <DayTaskList />
                <DayTaskList />
                <DayTaskList />
                <DayTaskList />
            </div> */}
            <div className="task-list">
                <Logout />
            </div>
        </>
    )
}

export default WeekTaskList

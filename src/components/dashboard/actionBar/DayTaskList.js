import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function DayTaskList({taskList, allProjectList}) {
    return (
        <>{taskList && 
            <div className="day-task bg-cust-white">
                <div className="task-description">
                    <p>{taskList.taskName}</p>
                </div>
                <div className="task-project">
                    <p>{taskList.project}</p>
                </div>
                <div className="task-time-p total-time">
                    <div className="cust-time">
                        <p>{taskList.timeCapture}</p>
                    </div>
                    <div className="task-hover-g d-n timer-btn">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <div className="task-hover-g d-n task-action-btn">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default DayTaskList

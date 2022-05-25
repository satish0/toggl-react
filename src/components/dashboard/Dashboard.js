import React from 'react'
import Sidebar from './sidebar/Sidebar'
import AddTask from './actionBar/addTask/AddTask'
import WeekTaskList from './actionBar/WeekTaskList'
import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <section className="dashboard">
                <div className="left-col left-nav">
                    <Sidebar />
                </div>
                <div className="right-col right-dashboard">
                    <div className="dashboard-content">
                        <AddTask />
                        <div className="task-list-all">
                            <div className="cp this-week">
                                <p>This week: 0:00:00</p>
                            </div>
                            <div className="cp projects-progress-bar">
                                <div className="project-progress-bar">
                                    <p>ASHOKA</p>
                                    <span className="cprogress-bar"></span>
                                </div>
                            </div>
                            <div className="task-lists">
                                <WeekTaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
